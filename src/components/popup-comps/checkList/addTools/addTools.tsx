import { SelectLangs } from "../../langsSelect/langsSelect";
import CheckboxInput from "../checkBoxInput/input"
import useListStore, { FeatureListTypes } from "@/stores/useListStore";

export const AddTools = ({ handleInputChange }: { handleInputChange: Function }) => {
    const { list } = useListStore();
    return (
        <div className="w-full p-2">
            <h2 className="text-black font-bold">Add tools</h2>
            <ul className="pl-2">
                {list.filter((item: FeatureListTypes) => item.category === "tools").map((item: any) => {
                    return <li key={item.label}><div className="flex flex-row justify-between">
                        <CheckboxInput status={item.status} label={item.label} value={item.value} handleInputChange={() => handleInputChange(item.value)} />
                            {item.value === "translate_button" && <SelectLangs/>}
                            </div></li>
                })}
            </ul>
        </div>
    )
}
