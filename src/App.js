import React, { useState, useEffect, Fragment } from 'react';

import axios from 'axios';

import Card from './component/Card';

import Loader from './component/Loader';

function App() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {

    await axios({

      method: "get",

      url: "https://fakestoreapi.com/products",

    })
      .then(res => res.status === 200 && setProducts(res.data))


      .catch((err) => console.error(err));
  }

  useEffect(() => {

    getProducts();
  }, [])

  return (
    <Fragment>

      <header className='flex items-center justify-center font-serif text-2xl font-bold bg-gray-400 rounded-2xl p-5'>

        products list
      </header>

      {products && products.length > 0 ?

        <div className='container mx-auto my-5'>

          <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-4'>

            {products.map(product => (

              <Card product={product} key={product.id} />

            ))}

          </div>

        </div>

        : <Loader />
      }

    </Fragment>
  );
}

export default App;
