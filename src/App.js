//@flow 

import * as React from 'react'
import Component from './Component'

export default function App() : React.Node{
  
  return (
    <div>
      App Works
      <Component someProp={1} />
    </div>
  )
}
