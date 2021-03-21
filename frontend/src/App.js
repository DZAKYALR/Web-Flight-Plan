import React from 'react'
import Home from './pages/Home/Home'
// import Recipe from './pages/Recipe/Recipe'
// import Bookmark from './pages/Bookmark/Bookmark'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

export default function App() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path='/recipe/:id'> */}
            {/* <Recipe/> */}
          {/* </Route> */}
          {/* <Route path='/bookmarks'> */}
            {/* <Bookmark/> */}
          {/* </Route> */}
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

