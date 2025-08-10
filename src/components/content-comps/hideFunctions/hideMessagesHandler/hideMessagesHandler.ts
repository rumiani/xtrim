import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";
import { visibilityElementHandler } from "@/content/handlers/visibilityElementHandler";

export const hideMessagesHandler = (status: boolean) => {
    const hideMessages = () => {
        hideElementHandler('a[href="/messages"]',status)
        visibilityElementHandler('div[data-testid="DMDrawer"]',status)
    }
    hideMessages()
    bodyChangesObserver(hideMessages)
};