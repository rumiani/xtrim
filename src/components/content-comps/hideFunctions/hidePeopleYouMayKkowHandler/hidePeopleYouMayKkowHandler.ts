import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hidePeopleYouMayKkowHandler = (status: boolean) => {
    const hidePeopleYouMayKkow = () => {
        hideElementHandler('aside[aria-label="Relevant people"]', status)
        hideElementHandler('aside[aria-label="Who to follow"]', status)
    }
    hidePeopleYouMayKkow()
    bodyChangesObserver(hidePeopleYouMayKkow)

}