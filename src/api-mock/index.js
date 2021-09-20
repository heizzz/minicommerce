const routes = [
    {
      method: 'Get',
      url: '/api/products',
      status: 200,
      response: {
        data: [
          {
            id: 'product-1',
            image: 'https://via.placeholder.com/200',
            title: 'Product 1',
            price: 'Rp.100.000'
          },
          {
            id: 'product-2',
            image: 'https://via.placeholder.com/200',
            title: 'Product 2',
            price: 'Rp.100.000'
          },
          {
            id: 'product-3',
            image: 'https://via.placeholder.com/200',
            title: 'Product 3',
            price: 'Rp.100.000'
          },
          {
            id: 'product-4',
            image: 'https://via.placeholder.com/200',
            title: 'Product 4',
            price: 'Rp.100.000'
          },
          {
            id: 'product-5',
            image: 'https://via.placeholder.com/200',
            title: 'Product 5',
            price: 'Rp.100.000'
          }
        ]
      }
    },
    {
        method: 'Get',
        url: '/api/products/product-1',
        status: 200,
        response: {
          data: [
            {
              id: 'product-1',
              image: 'https://via.placeholder.com/200',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              title: 'Product 1',
              price: 'Rp.100.000'
            }
          ]
        }
    },
    {
      method: 'Get',
      url: '/api/products/product-2',
      status: 200,
      response: {
        data: [
          {
            id: 'product-2',
            image: 'https://via.placeholder.com/200',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            title: 'Product 2',
            price: 'Rp.100.000'
          }
        ]
      }
    },
  {
    method: 'Get',
    url: '/api/carts',
    status: 200,
    response: {
      data: [
        {
          id: 'product-1',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          title: 'Product 1',
          price: 'Rp.100.000'
        },
        {
          id: 'product-2',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          title: 'Product 2',
          price: 'Rp.100.000'
        },
        {
          id: 'product-3',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          title: 'Product 3',
          price: 'Rp.100.000'
        }
      ]
    }
  }
    
  ]
  
export default routes
  