const CUSTOM_DIV_ID = 'my-unique-profile-div';

export const injectCustomElement = () => {
    // Find the profile page's main navigation bar
    const navBar = document.querySelector('nav[aria-label="Profile timelines"]');
    // Proceed only if the nav bar exists and our element isn't already there
    if (navBar && !document.getElementById(CUSTOM_DIV_ID)) {
        // (navBar as HTMLDivElement).style.cssText = 'display: flex !important;width:100% !important; flex-direction: column !important;';
        console.log('✅ X profile nav found. Injecting custom element.');

        // 1. Create the new div
        const customDiv = document.createElement('div');
        customDiv.id = CUSTOM_DIV_ID;
        customDiv.style.cssText = 'display:block !important; width:100% !important;';
        customDiv.textContent = 'My Custom One-Liner 👋';

        // 2. Prepend it to the navigation bar
        navBar.prepend(customDiv);

        // 3. Add a class to the nav element to apply our custom layout
        navBar.classList.add('custom-layout-container');
    }
};

// Use a MutationObserver to detect page changes in the SPA
const observer = new MutationObserver(() => {
    // On any DOM change, try to inject the element.
    // The check inside injectCustomElement prevents duplicates.
    injectCustomElement();
});

// Start observing the document body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true,
});