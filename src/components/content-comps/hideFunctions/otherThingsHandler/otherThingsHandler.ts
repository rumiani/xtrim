import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const otherThingsHnadler = (status: boolean) => {
    const hideOtherThings = () => hideElementHandler('div[aria-label="Trending"]', status)
    hideOtherThings()
    bodyChangesObserver(hideOtherThings)
}