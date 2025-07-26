export function bodyChangesObserver(callback: () => void) {
    const observer = new MutationObserver(callback);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
    callback(); // Initial call
}