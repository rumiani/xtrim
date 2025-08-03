import './App.css'
import { storageChangeListener } from '../handlers/storageChangeListener';
import { injectCustomElement } from '@/components/content-comps/accountNoteHandler/accountNoteHandler';
import { useEffect } from 'react';

// import { useEffect } from 'react';
// import { getUserInfo } from '../handlers/getUserInfo/getUserInfo';

function App() {

  storageChangeListener()
  injectCustomElement();

  return (
    <div>
    </div>
  )
}

export default App
