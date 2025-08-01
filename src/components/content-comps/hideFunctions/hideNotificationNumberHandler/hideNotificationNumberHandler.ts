import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideNotificationNumberHandler = (status: boolean) => {
    const hideNotificationNumber = () => {
        const badgeSelectors = [
            'span[data-testid="AppTabBar_Notifications_Badge"]', // Notification count badge
            'div[aria-label*="unread items"]' // Badge container for accessibility
        ];
        badgeSelectors.forEach(selector => {
            const badges = document.querySelectorAll(selector);
            badges.forEach(badge => {
                (badge as HTMLElement).style.display = status ? 'none' : '';
            });
        });
    }

    hideNotificationNumber()
    bodyChangesObserver(hideNotificationNumber)
}

