import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";
import { visibilityElementHandler } from "@/content/handlers/visibilityElementHandler";

export const hideGrokHandler = (status: boolean) => {
    const hideGrok = () => {
        hideElementHandler('a[href="/i/grok"]', status)
        visibilityElementHandler('div[data-testid="GrokDrawer"]', status)
    }
    hideGrok()
    bodyChangesObserver(hideGrok)
}