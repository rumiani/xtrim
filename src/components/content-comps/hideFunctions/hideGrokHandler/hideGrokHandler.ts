import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideGrokHandler = (status: boolean) => {
    const hideGrok = () => {
        hideElementHandler('a[href="/i/grok"]', status)
        hideElementHandler('div[data-testid="GrokDrawer"]', status)
    }
    hideGrok()
    bodyChangesObserver(hideGrok)
}