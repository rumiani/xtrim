import { useEffect, useState } from "react"
import { MinimalInterface } from "./minimalInterface/minimalInterface"
import { AddTools } from "./addTools/addTools"
import { FeatureListTypes, list } from "@/assets/lists/featuresList"

export const CheckList = () => {
    const [data, setData] = useState<FeatureListTypes[]>(list)

    useEffect(() => {
        loadCountFromStorage()
    }, [])
    const loadCountFromStorage = async () => {
        try {
            const result = await chrome.storage.local.get(['list'])
            if (result.list) setData(result.list)
        } catch {
            console.error('Error loading from storage')
        }
    }
    const handleInputChange = async (value: string) => {
        const item = data!.find((item: any) => item.value === value)!;
        item.status = !item.status
        setData([...data]) // Re-render the component
        try {
            await chrome.storage.local.set({ list: data })
        } catch (error) {
            console.error('Error saving to storage:', error)
        }
    }

    return (
        <div className="h-80 custom-scrollbar">
            <AddTools handleInputChange={handleInputChange} featuresList={data} />
            <MinimalInterface handleInputChange={handleInputChange} featuresList={data} />
        </div>
    )
}
