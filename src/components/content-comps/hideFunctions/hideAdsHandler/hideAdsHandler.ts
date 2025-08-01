import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideAdsHandler = (status: boolean) => {
    const hideAds = () => {
        const cellDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]') as NodeListOf<HTMLDivElement>;
        cellDivs.forEach((div: HTMLDivElement) => {
            const spans = div.querySelectorAll('span') as NodeListOf<HTMLSpanElement>;
            for (const span of spans) {
                if (span.textContent?.trim() === 'Ad') {
                    div.style.display = status ? 'none' : ''
                    break; // Exit loop once an "Ad" span is found
                }
            }
        });
    }
    hideAds()
    bodyChangesObserver(hideAds)
}