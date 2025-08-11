import { list } from "./assets/lists/featuresList";
import { settings } from "./assets/lists/settings";
import { chromStorageHandler } from "./handlers/chromStorageHandler";

chrome.runtime.onInstalled.addListener(async (details) => {
    console.log("Install reason:", details.reason) // 'install', 'update', 'chrome_update', etc.
    if (details.reason === 'install') {
        try {
            await chromStorageHandler.set("list", list)
            await chromStorageHandler.set("settings", settings)
        } catch {
            console.error('Error saving to storage:')
        }

        await chromStorageHandler.set("defaultStorageValues", {
            firstInstall: true,
            installDate: Date.now(),
            version: chrome.runtime.getManifest().version
        })

    } else if (details.reason === 'update') {
        console.log("Extension was updated!")
        console.log("Previous version:", details.previousVersion)
    }
})

// This also runs when extension starts up
chrome.runtime.onStartup.addListener(() => {
    console.log("hi - Extension startup!")
})

// This runs when Chrome starts
chrome.runtime.onStartup.addListener(() => {
    console.log("Chrome browser started")
})
