import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideNewPostsNotificationHandler = (status:boolean) => {   
    const hideNewPostsNotification = () => {
        
        const cellDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]');
        cellDivs.forEach(div => {
            const span = div.querySelector('button span');
            if (span && span.textContent!.toLowerCase().startsWith('show')) {
                (div as HTMLElement).style.display = status ?  'none':'';
            }
        });
        const blueDotDiv = document.querySelector('div[aria-label="undefined unread items"]') as HTMLDivElement | null;
        if (blueDotDiv) {
            blueDotDiv.style.display = status ? 'none' : '';
        } 
    }
    hideNewPostsNotification()
    bodyChangesObserver(hideNewPostsNotification)
}

