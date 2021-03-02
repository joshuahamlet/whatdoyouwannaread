import './App.scss';
import { Switch, Route, useLocation } from 'react-router-dom'
import NavbarTitle from './components/Navbar'
import Landing from './components/Landing'
import SwipeDeck from './components/SwipeDeck'
import Matches from './components/Matches'
import Login from './components/Login'
import { AnimatePresence } from 'framer-motion';
import AuthContextProvider from './contexts/authContext'

function App() {
  
  const location = useLocation()
  
  return (
    <div className="App">
      <AuthContextProvider>
        <NavbarTitle/>

        <div className="App-body">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route path='/' exact component={Landing} />
              <Route path='/Login' component={Login} />
              <Route path='/startswiping' component={SwipeDeck} />
              <Route path='/matches' component={Matches} />
            </Switch>
          </AnimatePresence>
        </div>



        </AuthContextProvider>
    </div>
  );
}

export default App;
