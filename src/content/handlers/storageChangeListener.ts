import { runTheListObjectFunction } from "@/content/handlers/runTheListObjectFunction";
import { theDifferentObjetHandler } from "./others/theDifferentObjetHandler";
import { Feature } from "@/assets/lists/featuresList";

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
            const result = await chrome.storage.local.get(['list'])
            if (result.list !== undefined) {
                result.list.forEach((object: Feature) => {                    
                    runTheListObjectFunction(object)
                })
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