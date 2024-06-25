import React, { useReducer, useState } from 'react'
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
import CounterOne from './components/UseReducer/CounterOne'
import CounterTwo from './components/UseReducer/CounterTwo'
import CounterThree from './components/UseReducer/CounterThree'
import ComponentA from './components/UseReducer/UseContext/ComponentA'
import ComponentB from './components/UseReducer/UseContext/ComponentB'
import ComponentC from './components/UseReducer/UseContext/ComponentC'
import DataFetchingTwo from './components/UseReducer/DataFetching/DataFetchingTwo'
import FocusInput from './components/UseRef/FocusInput'
import Form from './components/CustomHooks/Form'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountCOntext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState
    default:
      state

  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)


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
      {/* <DataFetching /> */}
      {/* <NameList /> */}
      {/* <HoverCounter /> */}
      {/* <PostList /> */}
      {/* <InsertPostData /> */}
      {/* <UserContext.Provider value={'Kartik'}>
        <ChannelContext.Provider value={'Code Evolution'}>
          <ComponentC />

        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <CountCOntext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>
          <h1>{count}</h1>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountCOntext.Provider> */}

      {/* <DataFetchingTwo /> */}
      {/* <FocusInput /> */}
      <Form />

    </>
  )
}

export default App
