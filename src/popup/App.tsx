import './App.css'
import { CheckList } from '@/components/popup-comps/checkList/checkList';
import { DevelopingInfo } from '@/components/popup-comps/developingInfo/developingInfo';
import { ExtensionActivationBtn } from '@/components/popup-comps/extensionActivationBtn/extensionActivationBtn';
import { useEffect, useState } from 'react';
import { isPageAllowedHandler } from './handlers/isPageAllowedHandler';
import { IsPageAllowed } from '@/components/popup-comps/isPageAllowed/isPageAllowed';
import useActivationStore from '@/stores/useActivationStore';
import useListStore from '@/stores/useListStore';

export default function App() {
  const { toggleIsActive } = useActivationStore();
  const { setListItems } = useListStore()
  const [isPageAllowed, setIsPageAllowed] = useState(false);

  useEffect(() => {
    (async () => setIsPageAllowed(await isPageAllowedHandler()))();

    const loadDataFromChromeStorage = async () => {
      try {
        const activationResult = await chrome.storage.local.get(['isActive'])
        toggleIsActive(activationResult.isActive)
        const listItemsResult = await chrome.storage.local.get(['list'])
        setListItems(listItemsResult.list)
      } catch (error) {
        console.error('Error loading settings:', error)
      }
    }
    loadDataFromChromeStorage()

  }, [])

  if (!isPageAllowed) return <IsPageAllowed />
  return (
    <>
      <div className="w-96 h-96 bg-gray-200">
        <ExtensionActivationBtn />
        <CheckList />
        <div className='fixed w-full bottom-0'>
          <DevelopingInfo />
        </div>
      </div>
    </>
  )
}
