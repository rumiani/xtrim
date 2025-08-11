import SwitchInput from "../checkList/SwitchInput/SwitchInput";
import { Feature } from "@/assets/lists/featuresList";
import useSettingStore from "@/stores/settingStore";

export const ExtensionActivationBtn = () => {
    const { isActive } = useSettingStore();

    const item: Feature = {
        value: "isActive",
        title: "Extension Activation",
        category: "hideMisc",
        description: "",
        label: "Activate the extension",
        status: isActive
    }

    return (
        <div>
            <div className="p-2 mx-2 text-lg flex flex-row justify-between border-b border-gray-400 " >
                <SwitchInput item={item} />
            </div>
        </div>
    )
}