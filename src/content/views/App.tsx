import './App.css'
import { storageChangeListener } from '../handlers/storageChangeListener';
import { injectCustomElement } from '@/components/content-comps/accountNoteHandler/accountNoteHandler';

// import { useEffect } from 'react';
// import { getUserInfo } from '../handlers/getUserInfo/getUserInfo';

function App() {

  storageChangeListener()
  // useEffect(() => {
  //   const observer = new MutationObserver(() => {
  //     const noteElement = document.getElementById('accountNote');
  //     if (noteElement) {
  //       const handleClick = () => {
  //         noteElement.contentEditable = 'true';
  //         noteElement.focus();
  //         const user = getUserInfo()
  //         noteElement.onchange = (e) => chrome.storage.local.set({ notes: { ...user, note: (e.target as HTMLElement).textContent } })
  //         console.log('clicked');
  //       };
  //       noteElement.addEventListener('click', handleClick);
  //       observer.disconnect(); // Stop observing once element is found
  //       return () => noteElement.removeEventListener('click', handleClick);
  //     }
  //   });

  //   observer.observe(document.body, { childList: true, subtree: true });

  //   return () => observer.disconnect();
  // }, []); // Empty dependency array to run once on mount

  injectCustomElement();

  return (
    <div>
    </div>
  )
}

export default App
