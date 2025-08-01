import './App.css'
import { CheckList } from '@/components/popup-comps/checkList/checkList';
import { DevelopingInfo } from '@/components/popup-comps/developingInfo/developingInfo';

export default function App() {

  return (
    <>
      <div className="w-72 h-96 bg-gray-200">
        <CheckList />
        <div className='fixed w-full bottom-0'>
          <DevelopingInfo />
        </div>
      </div>
    </>
  )
}
