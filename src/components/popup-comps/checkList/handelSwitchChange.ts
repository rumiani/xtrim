import { Feature } from "@/assets/lists/featuresList";
import { runTheListObjectFunction } from "@/content/handlers/runTheListObjectFunction";
import { refreshHandler } from "@/popup/handlers/refreshHandler";
import useListStore from "@/stores/useListStore";
import useSettingsStore from "@/stores/useSettingsStore";

export const handleSwitchChange = async (item:Feature): Promise<void> => {
    const{ value } = item
    try {
        const { setAllListItemStatus, setListItemStatus } = useListStore.getState();

        if (value === "isActive") {
            const { isActive, toggleIsActive } = useSettingsStore.getState();
            toggleIsActive()
            setAllListItemStatus(isActive)
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
