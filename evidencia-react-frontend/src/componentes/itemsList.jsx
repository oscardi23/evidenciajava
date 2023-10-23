import React from 'react'
import datamotos from "../Data/Data.json"
import Item from "../componentes/Items.jsx"

const itemsList = () => {

  
  return (
    <div className='items'>
    {
        datamotos.map((product, idx) => {
            return < Item key={product.id} {...product}/>
        })
    }
      
    </div>
  )
}

export default itemsList
