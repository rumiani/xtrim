import { runTheListObjectFunction } from "@/content/handlers/runTheListObjectFunction";
import { theDifferentObjetHandler } from "./others/theDifferentObjetHandler";
import { Feature } from "@/assets/lists/featuresList";
import { chromStorageHandler } from "@/handlers/chromStorageHandler";
import { SettingsTypes } from "@/assets/lists/settings";
import useSettingStore from "@/stores/settingStore";

export const storageChangeListener = () => {
    const handleStorageChange = (changes: any, namespace: string) => {           
        if (namespace === 'local' && changes.list) {
            const { newValue, oldValue } = changes.list
            const changedObject: Feature | undefined = theDifferentObjetHandler(newValue, oldValue)
            if (changedObject) runTheListObjectFunction(changedObject)
        } else if (namespace === 'local' && changes.isActive) {
            const { newValue } = changes.isActive
            if (newValue)
                loadInitialList()
        }
    }
    const loadInitialList = async () => {
        try {
            const list = await chromStorageHandler.get('list') as Feature[]            
            if (list !== undefined)
                list.forEach((object: Feature) => runTheListObjectFunction(object))
            const settings = await chromStorageHandler.get('settings') as SettingsTypes
            if (settings !== undefined) {
                useSettingStore.getState().setIsActive(settings.isActive)
            }
        } catch (error) {
            console.error('Error loading initial list:', error)
        }
    }
    loadInitialList()

    chrome.storage.onChanged.addListener(handleStorageChange);
    window.addEventListener("beforeunload", () => {
        chrome.storage.onChanged.removeListener(handleStorageChange);
        console.log("[Content Script] Storage listener removed");

    });
}