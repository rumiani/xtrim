import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideMessagesHandler = (status: boolean) => {
    const hideMessages = () => {
        hideElementHandler('a[href="/messages"]',status)
        hideElementHandler('div[data-testid="DMDrawer"]',status)
    }
    hideMessages()
    bodyChangesObserver(hideMessages)
};