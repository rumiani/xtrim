import { SelectLangs } from "../../langsSelect/langsSelect";
import SwitchInput from "../SwitchInput/SwitchInput";
import { Feature } from "@/assets/lists/featuresList";

export const HideSection = ({ categoryList }: { categoryList: Feature[] }) => {

    return (
        <section className="w-full p-2">
            <h2 className="text-white font-bold">{categoryList[0].title}</h2>
            <ul className="pl-2">
                {categoryList.map((item: Feature) => {
                    return (
                        <li key={item.label}>
                            <div className="flex flex-row justify-between">
                                <SwitchInput item={item} />
                                {item.value === "translate_button" && <SelectLangs />}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
