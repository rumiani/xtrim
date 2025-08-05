import ReactDOM from 'react-dom/client';
import { CUSTOM_DIV_ID, NoteContainer } from './noteContainer/noteContainer';

export const injectCustomElement = () => {
    // Find the profile page's main navigation bar
    const navBar = document.querySelector('nav[aria-label="Profile timelines"]');
    // Proceed only if the nav bar exists and our element isn't already there
    if (navBar && !document.getElementById(CUSTOM_DIV_ID)) {

        (navBar as HTMLDivElement).style.cssText = 'display: flex !important; flex-direction: column !important;';

        const customDiv = document.createElement('div');
        navBar.prepend(customDiv);
        const root = ReactDOM.createRoot(customDiv);
        root.render(<NoteContainer />);

        // 3. Add a class to the nav element to apply our custom layout
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