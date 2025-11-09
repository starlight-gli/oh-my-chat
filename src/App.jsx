import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div className="root">
      <nav>导航</nav>
      <aside>{activeView === 'chat' && <ThreadsPane />}</aside>
      <main>{activeView === 'chat' && <MessagesPane />}</main>
    </div>
  );
}


export default App
