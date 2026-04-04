import './App.css'
import HomePage from './pages/home'
import { ModalProvider } from './context/modal'
function App() {
  return (
    <>
      <ModalProvider>
        <HomePage />
      </ModalProvider>

    </>
  )
}

export default App
