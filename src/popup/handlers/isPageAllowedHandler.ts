export const isPageAllowedHandler = (): Promise<boolean> => {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const isPageAllowed = new URL(tabs[0].url!).hostname === 'x.com';
            resolve(isPageAllowed);
        });
    });
};
