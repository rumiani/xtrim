
export const IsPageAllowed = () => {
    const moveToX = async () => {
        chrome.tabs.create({ url: "https://x.com" });
    }
    return (
        <div className='w-96 h-10 p-2 text-base font-semibold text-black bg-red-500 xl'>
            You have to be on
            <button onClick={moveToX} title="Move to x.com" className="text-blue-500 mx-1 cursor-pointer hover:underline" >x.com</button>
            to use this extension.
        </div>
    )
}
