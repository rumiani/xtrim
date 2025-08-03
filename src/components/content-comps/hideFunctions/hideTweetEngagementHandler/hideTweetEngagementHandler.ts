import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver"

export const hideTweetEngagementHandler = (status: boolean) => {

    const selector = [
        'div[aria-label*="repl"]',
        'div[aria-label*="repost"]',
        'div[aria-label*="like"]',
        'div[aria-label*="bookmark"]',
        'div[aria-label*="view"]'
    ].join(', ');
    const hideTweetEngagement = () => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(btn => {
            const spans = btn.querySelectorAll('span');
            spans.forEach(span => {
                if (span.innerText.trim()) {
                    span.style.cssText = status ? 'display:none !important;' : ''; // hide numeric counts
                }
            });
        });
    }
    hideTweetEngagement()
    bodyChangesObserver(hideTweetEngagement)
}