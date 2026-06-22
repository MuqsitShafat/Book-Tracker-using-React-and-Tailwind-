import React from 'react'
import Card from './components/Card/Card'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div className='h-screen w-full bg-slate-800'>
      <Title />
      <Card />
    </div>
  )
}

export default App