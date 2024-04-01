import './App.css'
import { Route , Routes} from 'react-router-dom'
import FirtsLoginView from './components/view/FirtsLoginView'
import LoginForm from './components/view/LoginForm'
import Contract from './components/view/Contract'
import ActionSuggest from './components/ActionSuggest'
import HomePage from './components/view/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<FirtsLoginView />}/>
        <Route path='/login'  element={<LoginForm />}/>
        <Route path='/contract' element={<Contract />} />
        <Route path='/action' element={<ActionSuggest />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
