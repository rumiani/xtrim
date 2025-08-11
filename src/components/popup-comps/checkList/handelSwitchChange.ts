import { Feature } from "@/assets/lists/featuresList";
import { runTheListObjectFunction } from "@/content/handlers/runTheListObjectFunction";
import { refreshHandler } from "@/popup/handlers/refreshHandler";
import useSettingStore from "@/stores/settingStore";
import useListStore from "@/stores/useListStore";

export const handleSwitchChange = async (item: Feature): Promise<void> => {
    const { value, status } = item
    try {
        const { setAllListItemStatus, setListItemStatus } = useListStore.getState();
        
        if (value === "isActive") {
            useSettingStore.getState().setIsActive(status)
            setAllListItemStatus(status)
            refreshHandler()
            return
        } else {
            setListItemStatus(value);
            runTheListObjectFunction(item)
        }
    } catch (error) {
        console.error("Error saving to storage:", error);
    }
};
