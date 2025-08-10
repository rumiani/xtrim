import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hidePeopleYouMayKkowHandler = (status: boolean) => {
    const hidePeopleYouMayKkow = () => {
        hideElementHandler('aside[aria-label="Relevant people"]', status)
        hideElementHandler('aside[aria-label="Who to follow"]', status)
        const cellDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]') as NodeListOf<HTMLDivElement>;
        cellDivs.forEach((div: HTMLDivElement) => {
            const spans = div.querySelectorAll('span') as NodeListOf<HTMLSpanElement>;
            for (const span of spans) {
                if (span.textContent?.trim() === 'Who to follow') {
                    div.style.display = status ? 'none' : ''
                    break; // Exit loop once a "'Who to follow'" span is found
                }
            }
        });
    }
    hidePeopleYouMayKkow()
    bodyChangesObserver(hidePeopleYouMayKkow)

}