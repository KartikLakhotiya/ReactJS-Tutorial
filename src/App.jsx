import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Message from './components/Message'
import NameList from './components/NameList'
import HoverCounter from './components/HoverCounter'
import PostList from './components/PostList'
import InsertPostData from './components/InsertPostData'
import CounterClass from './components/CounterClass'
import CounterHook from './components/CounterHook'
import CounterPrevState from './components/CounterPrevState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hello name="Kartik">
        <p>This is a children prop</p>
      </Hello> */}
      {/* <Message name="Class" /> */}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      <CounterPrevState />
      {/* <NameList /> */}
      {/* <HoverCounter /> */}
      {/* <PostList /> */}
      {/* <InsertPostData /> */}
    </>
  )
}

export default App
