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
import FormUseState from './components/FormUseState'
import ArrayUseState from './components/ArrayUseState'
import DocTitleCount from './components/DocTitleCount'
import MousePosition from './components/MousePosition'
import DataFetching from './components/DataFetching'

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
      {/* <CounterPrevState /> */}
      {/* <FormUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <DocTitleCount /> */}
      {/* <MousePosition /> */}
      <DataFetching />
      {/* <NameList /> */}
      {/* <HoverCounter /> */}
      {/* <PostList /> */}
      {/* <InsertPostData /> */}

    </>
  )
}

export default App
