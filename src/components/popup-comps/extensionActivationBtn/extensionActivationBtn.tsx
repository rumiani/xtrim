import CheckboxInput from "../checkList/checkBoxInput/input"
import { refreshHandler } from "@/popup/handlers/refreshHandler";
import useActivationStore from "@/stores/useActivationStore";
import useListStore from "@/stores/useListStore";

export const ExtensionActivationBtn = () => {
    const { isActive, toggleIsActive } = useActivationStore();
    const { setAllListItemStatus } = useListStore();


    const inputChangeHandler = async () => {
        try {
            const newStatus = !isActive
            toggleIsActive(newStatus)
            await chrome.storage.local.set({ isActive: newStatus })
            refreshHandler()
            setAllListItemStatus(newStatus)
        } catch (error) {
            console.error('Error saving to storage:', error)
        }
    }

    return (
        <div>
            <div className="p-2 mx-2 text-lg flex flex-row justify-between border-b border-gray-400 " >
                <CheckboxInput value="isActive" label="Activate the extension" status={isActive} handleInputChange={() => inputChangeHandler()} />
            </div>
        </div>
    )
}