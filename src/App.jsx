import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import NameList from './components/NameList'
import HoverCounter from './components/HoverCounter'
import PostList from './components/PostList'
import InsertPostData from './components/InsertPostData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hello name="Kartik">
        <p>This is a children prop</p>
      </Hello> */}
      {/* <Message name="Class" /> */}
      {/* <Counter /> */}
      {/* <NameList /> */}
      {/* <HoverCounter /> */}
      {/* <PostList /> */}
      <InsertPostData />
    </>
  )
}

export default App
