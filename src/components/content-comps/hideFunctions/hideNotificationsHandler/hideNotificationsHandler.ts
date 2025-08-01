import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideNotificationsHandler = (status: boolean) => {
    const hideNotifications = () => {
        const notificationsLink = document.querySelector('a[aria-label="Notifications"]') as HTMLAnchorElement | null;
        if (notificationsLink) {
            notificationsLink.style.display = status ? 'none' : '';
        }
    }
    hideNotifications()
    bodyChangesObserver(hideNotifications)
};