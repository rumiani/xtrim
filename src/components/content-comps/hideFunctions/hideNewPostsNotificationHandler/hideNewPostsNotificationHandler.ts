import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideNewPostsNotificationHandler = (status: boolean) => {
    const hideNewPostsNotification = () => {

        const cellDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]');
        cellDivs.forEach(div => {
            const span = div.querySelector('button span');
            if (span && span.textContent!.toLowerCase().startsWith('show')) {
                (div as HTMLElement).style.display = status ? 'none' : '';
            }
        });
        hideElementHandler('a[href="/home"] [aria-label$="unread items"]', status)
        hideElementHandler('button[aria-label="New posts are available. Push the period key to go to the them."]', status)
    }
    hideNewPostsNotification()
    bodyChangesObserver(hideNewPostsNotification)
}

