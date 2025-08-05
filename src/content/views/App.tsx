import './App.css'
import { storageChangeListener } from '../handlers/storageChangeListener';
// import { injectCustomElement } from '@/components/content-comps/accountNoteHandler/accountNoteHandler';

function App() {

  storageChangeListener()
  // injectCustomElement();

  return (
    <div>
    </div>
  )
}

export default App
