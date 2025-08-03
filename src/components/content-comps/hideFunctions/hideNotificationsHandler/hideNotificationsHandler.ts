import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideNotificationsHandler = (status: boolean) => {
    const hideNotifications = () => hideElementHandler('a[aria-label="Notifications"]',status)
    hideNotifications()
    bodyChangesObserver(hideNotifications)
};