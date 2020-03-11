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
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import RenderProp from './components/RenderProp'
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/userContext'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <PostForm />
      <PostList />
      <UserProvider value="vishwas">
      <ComponentC />
      </UserProvider>
      <RenderProp render={(count, incrementCount) =>
      <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}
      />
      <RenderProp render={(count, incrementCount) =>
      <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>}
      />
      <User render={(isLoggedIn) => isLoggedIn? "vishwas":'Guest'} />
      <ClickCounterTwo />
      <HoverCounterTwo />
      <ErrorBoundary>
      <Hero heroName="batman"></Hero>
      <Hero heroName="superMan"></Hero>
      <Hero heroName="joker"></Hero>
      </ErrorBoundary>
      <PortalDemo />
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
