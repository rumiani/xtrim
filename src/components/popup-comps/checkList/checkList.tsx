import { MinimalInterface } from "./minimalInterface/minimalInterface"
import { AddTools } from "./addTools/addTools"
import useListStore from "@/stores/useListStore"

export const CheckList = () => {
    const { list,setListItems } = useListStore();


    const handleInputChange = async (value: string) => {
        const item = list!.find((item: any) => item.value === value)!;
        item.status = !item.status
        setListItems([...list]) // Re-render the component

        try {
            await chrome.storage.local.set({ list: list })
        } catch (error) {
            console.error('Error saving to storage:', error)
        }
    }

    return (
        <div className="h-72 custom-scrollbar">
            <AddTools handleInputChange={handleInputChange} />
            <MinimalInterface handleInputChange={handleInputChange} />
        </div>
    )
}
