import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const DevelopingInfo = () => {
  return (
    <div className=" flex justify-end gap-4 px-4 flex-row h-8 text-l py-1 my-2">
      <a href="https://github.com/rumiani/xtrim" target="blank" title="The project on the github"
      className="w-6 flex justify-center align-middle text-center bg-gray-700 hover:bg-gray-900 rounded-full"
      >
      <FaGithub className="text-2xl"/>
      </a>
      <a href="https://x.com/rumianist" target="blank" title="Developer's X account"
      className="w-6 flex justify-center align-middle text-center bg-gray-700 hover:bg-gray-900 rounded-full"
      >
        <FaXTwitter  className="text-xl pt-1"/>
      </a>
    </div>
  )
}
