import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })
  

  
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      
      
    </div>
  )
}

export default App;
