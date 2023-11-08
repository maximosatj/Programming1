import React from 'react'
import vinos from '../../DATA/vinos'
import Card from '../Card/Card'
import './CardContainer.css'

export const CardContainer = () => {
    return (
      <div>
          {vinos.map((vino) =>{
                return(<Card key={vino.id} vino={vino} />)
              
          })}
      </div>
    )
  }