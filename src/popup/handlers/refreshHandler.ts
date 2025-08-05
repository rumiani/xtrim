export const refreshHandler = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.id === undefined) return
    chrome.tabs.reload(tab.id);
}