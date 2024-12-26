import './App.css'
import Task from './components/Task'
import { UserProvider } from './context/myContext'

function App() {

  return (
  <div>

    <UserProvider value="Ramadanuv">
    <Task/>
    </UserProvider>
  </div>
   
  )
}

export default App
