import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import routeMock from '../api-mock'

// axios mock method
const mock = new MockAdapter(axios)

mock.onGet("/api/products").reply(200, {
  ...routeMock[0].response.data
})

// const res = routeMock[1]
routeMock.forEach(res => {
  mock['on'+ res.method](res.url).reply(res.status,
    res.response.data
  )
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product:{},
    products:[],
    carts:[],
    shipping:{},
    payment: {}
  },
  mutations: {
    setProduct (state, value) {
      state.product = value
    },
    setProducts (state, value) {
      state.products = value
    },
    setCarts (state, value) {
      state.carts = value
    },
    deleteProduct (state, value) {
      state.carts = state.carts.filter(prod => prod.id !== value);
    }
  },
  actions: {
    getProducts ({ commit }) {
      axios.get("/api/products").then(function (response) {
        commit('setProducts', response.data)
      });
    },
    getProduct ({ commit }, param) {
      axios.get("/api/products/"+ param.id).then(function (response) {
        commit('setProduct', response.data)
      });
    },
    getCarts ({ commit }) {
      axios.get("/api/carts").then(function (response) {
        commit('setCarts', response.data)
      });
    },
    removeProduct ({ commit }, param) {
      commit('deleteProduct', param)
    },
  },
  getters: {
    products: state => state.products,
    carts: state => state.carts
  }

})
