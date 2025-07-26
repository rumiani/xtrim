import { list } from "./assets/lists/featuresList";

console.log('background');
// This runs immediately when extension is installed
chrome.runtime.onInstalled.addListener(async (details) => {
    console.log("hi - Extension installed!")
    console.log("Install reason:", details.reason) // 'install', 'update', 'chrome_update', etc.

    if (details.reason === 'install') {
        console.log("This is a fresh install!")

        try {
            await chrome.storage.local.set({ list })
        } catch {
            console.error('Error saving to storage:')
        }


        // Example: Set default storage values
        chrome.storage.local.set({
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