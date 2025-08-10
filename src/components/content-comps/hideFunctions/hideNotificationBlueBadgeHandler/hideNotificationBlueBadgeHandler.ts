import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideNotificationBlueBadgeHandler = (status: boolean) => {
    const hideNotificationBlueBadge = () => {
        hideElementHandler('a[href="/notifications"] div[aria-label$="unread items"]', status)
        hideElementHandler('button[aria-label="Account menu"] div[aria-label$="unread items"]', status)
        hideElementHandler('div[data-testid="hoverCardParent"] div[aria-label$="unread items"]', status)
    }

    hideNotificationBlueBadge()
    bodyChangesObserver(hideNotificationBlueBadge)
}

