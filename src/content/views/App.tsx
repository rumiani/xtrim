import { useState } from 'react'
import './App.css'
// import { useStorageListener } from '@/components/storageListener'
import { useListListener } from '@/components/useListListener'
import { translatePostHandler } from '@/components/hideFunctions/translatePostHandler/translatePost'

function App() {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  // useStorageListener()
  useListListener()
  translatePostHandler()
  return (
    <div className="popup-container">
      {show && (
        <div className={`popup-content ${show ? 'opacity-100' : 'opacity-0'}`}>
          <h1>HELLO You</h1>
        </div>
      )}
      <button className="toggle-button" onClick={toggle}>
        test
      </button>
    </div>
  )
}

export default App
