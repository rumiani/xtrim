import { useEffect, useState } from "react"
import CheckboxInput from "../checkBoxInput/input"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useListStore, { FeatureListTypes } from "@/stores/useListStore";

export const MinimalInterface = ({ handleInputChange }: { handleInputChange: Function }) => {
    const { list } = useListStore();
    const [isHiddden, setIsHiddden] = useState(false)
    const [allSelected, setAllSelected] = useState(false)
    const hideElementsArray = list.filter((item: FeatureListTypes) => item.category === "hideElements")

    useEffect(() => {
        const areAllSelected = hideElementsArray.every((item: any) => item.status)
        setAllSelected(areAllSelected)
    }, [hideElementsArray])

    const handleSelectAll = () => {
        hideElementsArray.forEach((item: FeatureListTypes) => {
            if (item.status === allSelected)
                handleInputChange(item.value)
        })
        setAllSelected(!allSelected)
    }
    return (
        <div className="w-full">
            <div onClick={() => setIsHiddden(!isHiddden)} className="flex flex-row justify-between cursor-pointer hover:shadow-sm hover:shadow-gray-300 p-2 my-1">
                <h2 className="text-black font-bold">Minimal the interface</h2>
                <span className="self-center text-black">
                    {isHiddden ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
            {isHiddden && <ul className="pl-4 py-4 bg-gray-300">
                <li>
                    <CheckboxInput status={allSelected} handleInputChange={handleSelectAll} label={allSelected ? "Deselect All" : "Select All"} value="allHideElements" />
                </li>
                {hideElementsArray.map((item: any) => {
                    return <li key={item.value}><CheckboxInput status={item.status} label={item.label} value={item.value} handleInputChange={() => handleInputChange(item.value)} /></li>
                })}
            </ul>}
        </div>
    )
}
