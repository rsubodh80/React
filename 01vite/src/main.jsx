import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'




function Myapp() {
  return (
    <div>
      <h1>Don Vite!</h1>
    </div>
  )
}

//const ReactElement = {
  //  type: 'a',
    //props: {
      //  href: 'https://example.com',
        //target: '_blank'},
    //children: 'click me'

    //}
const username = "subodhraj"

    const anotherUser = "meghabanayi"

    const reactElement = React.createElement(
      'a',
      { href: 'https://example.com', target: '_blank' },
      'click me to visit example.com'
      ,
      anotherUser
      , username

    )


    const Subodh = (
      <a href="https://example.com" target="_blank"> click meso that </a>
    )




    

createRoot(document.getElementById('root')).
render(
 

reactElement 

)

