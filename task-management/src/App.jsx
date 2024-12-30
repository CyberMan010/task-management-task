import './App.css'
import Myform from './components/form'
import Tasklist from './components/Tasklist'
import { TasksProvider } from './context/myContext'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
  <TasksProvider>

<Myform />
<Tasklist/>
<ToastContainer position="top-right" autoClose={2000} />
  </TasksProvider>
    
   
    
 
   
  )
}

export default App
