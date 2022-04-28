import React from 'react'
import Card from '../Card/Card'

const ItemListContainer = ({greetings}) => {
  return (
    <div className='bg-info'>Este es el componente ItemListContainer

        <p>{greetings}</p>
        <div className="d-flex justify-content-evenly p-4">

          <Card stock={5}/>
          <Card stock={2}/>
          <Card stock={8}/>

        </div>

    </div>
  )
}

export default ItemListContainer