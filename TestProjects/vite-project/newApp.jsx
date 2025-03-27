import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from 'react-dom/client';
import './App.css'
function Newtest(){
  return(<h1>hello world</h1>)
  
}
function MyButton() {
  

  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <div id="navigation" ></div>
    </div>
  );
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(Newtest());
