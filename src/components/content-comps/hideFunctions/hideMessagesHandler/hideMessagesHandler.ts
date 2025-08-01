import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideMessagesHandler = (status: boolean) => {
    const hideMessages = () => {
        const messagesLink = document.querySelector('a[href="/messages"]') as HTMLAnchorElement | null;
        if (messagesLink) {
            messagesLink.style.display = status ? 'none' : '';
        }
    }
    hideMessages()
    bodyChangesObserver(hideMessages)
};