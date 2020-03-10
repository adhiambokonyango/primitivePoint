import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import FunctionClassClick from './components/FunctionClassClick'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import PureComp from './components/PureComp'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './components/redux/Store'

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <CakeContainer />
//      <PureComp />
//      <LifecycleA />
//      <Form />
//      <Stylesheet />
//      <NameList />
//      <UserGreeting />
//      <ParentComponent />
//      <EventBind />
//      <FunctionClassClick />
//      <Counter />
//      <Message />
//      <Greet name="bruce" heroName="batman"><p>This is children props</p></Greet>
//      <Greet name="diana" heroName="wonder woman" />
//      <Greet name="clerk" heroName="superman" />
//
//      <Welcome name="bruce" heroName="batman" />
//      <Welcome name="diana" heroName="wonder woman" />
//      <Welcome name="clerk" heroName="superman" />
//      <Hello />
    </div>
    </Provider>
  )
}

export default App;
