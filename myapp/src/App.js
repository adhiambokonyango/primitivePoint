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

function App() {
  return (
    <div className="App">
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClassClick />
      <Counter />
      <Message />
      <Greet name="bruce" heroName="batman"><p>This is children props</p></Greet>
      <Greet name="diana" heroName="wonder woman" />
      <Greet name="clerk" heroName="superman" />

      <Welcome name="bruce" heroName="batman" />
      <Welcome name="diana" heroName="wonder woman" />
      <Welcome name="clerk" heroName="superman" />
      <Hello />
    </div>
  );
}

export default App;
