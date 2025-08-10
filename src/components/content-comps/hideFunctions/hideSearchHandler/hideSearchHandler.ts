import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";
// import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideSearchHandler = (status: boolean) => {
    const hideSearch = () => {
        hideElementHandler('form[aria-label="Search"]', status)
        hideElementHandler('a[href="/explore"]', status)
    }
    hideSearch()
    bodyChangesObserver(hideSearch)
}