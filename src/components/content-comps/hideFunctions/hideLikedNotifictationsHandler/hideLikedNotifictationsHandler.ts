import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideLikedNotifictationsHandler = (status: boolean) => {
    const hideLikedNotifictations = () => {
        const isQuotesPage = window.location.href.endsWith('/notifications');
        if (!isQuotesPage) return;
        const notifications = document.querySelectorAll('[data-testid="notification"]');
        notifications.forEach(notification => {
            const text = (notification as HTMLDivElement).innerText.toLowerCase();
            if (text.includes('liked your post') || text.includes('liked your reply') || text.includes('of your posts'))
                (notification as HTMLDivElement).style.display = status ? 'none' : '';
        })
    }
    hideLikedNotifictations()
    bodyChangesObserver(hideLikedNotifictations)
}