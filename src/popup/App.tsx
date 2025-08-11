import './App.css'
import { CheckList } from '@/components/popup-comps/checkList/checkList';
import { DevelopingInfo } from '@/components/popup-comps/developingInfo/developingInfo';
import { ExtensionActivationBtn } from '@/components/popup-comps/extensionActivationBtn/extensionActivationBtn';
import { useEffect, useState } from 'react';
import { isPageAllowedHandler } from './handlers/isPageAllowedHandler';
import { IsPageAllowed } from '@/components/popup-comps/isPageAllowed/isPageAllowed';
import useListStore from '@/stores/useListStore';
import useSettingStore from '@/stores/settingStore';

export default function App() {
  const { loadListFromStorage } = useListStore()
  const { loadSettingsFromStorage } = useSettingStore()


  const [isPageAllowed, setIsPageAllowed] = useState(true);

  useEffect(() => {
    (async () => setIsPageAllowed(await isPageAllowedHandler()))();
    loadListFromStorage()
    loadSettingsFromStorage()
  }, [])

  if (!isPageAllowed) return <IsPageAllowed />
  return (
    <div className="w-96 h-96 bg-gradient-to-r from-black to-gray-800 text-white">
      <ExtensionActivationBtn />
      <CheckList />
      <div className='fixed w-full bottom-0'>
        <DevelopingInfo />
      </div>
    </div>
  )
}
