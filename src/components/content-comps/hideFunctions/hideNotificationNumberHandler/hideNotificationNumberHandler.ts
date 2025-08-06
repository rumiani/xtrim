import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideNotificationNumberHandler = (status: boolean) => {
    const hideNotificationNumber = () => hideElementHandler('a[href="/notifications"] div[aria-label$="unread items"]', status)

    hideNotificationNumber()
    bodyChangesObserver(hideNotificationNumber)
}

