import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard.jsx'

export function App () {  
  const format = (userName) => `@${userName}`
  const pheralb = { isFollowing: false, userName: 'pheralb', formatUserName: format } //Para pasar objetos como props

  return(
    <section className='App'>
      <TwitterFollowCard 
        formatUserName={format} 
        userName='midudev'    
        initialIsFollowing={true}     
      >
        Miguel Ángel Durán
      </TwitterFollowCard>

      { /* Comentarios dentro de return, pero no es recomendado hacerlo */ }

      <TwitterFollowCard 
        formatUserName={format}          
        userName='josedjaykv'         
      >
        José David Jayk Vanegas
      </TwitterFollowCard>

      <TwitterFollowCard 
        formatUserName={format}          
        userName='uribe'         
      >
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard 
        formatUserName={format}        
      >
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard {...pheralb} >
        Miguel Ángel Durán
      </TwitterFollowCard>

    </section>
  )

}
