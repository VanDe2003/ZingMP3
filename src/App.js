import logo from './logo.svg';
import './App.css';
import {Home, Login, Public} from './containers/public/'
import { useSelector, useDispatch } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import path from './ultis/path.js'
import {useEffect} from 'react'
import * as actions from './store/actions'
// import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getHome())
  }, [])

  return (
    <>
      <div className="">
        <Routes>
          <Route path = {path.PUBLIC} element={<Public/>}>
              <Route path = {path.HOME} element={<Home/ >}/>

              <Route path = {path.STAR} element={<Home/ >}/>
          </Route>
        </Routes>
      </div>
    </>
  );
} 

export default App;
