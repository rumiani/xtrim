import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const otherThingsHnadler = (status: boolean) => {
    const hideOtherThings = () => {
        const inviteToSupscribeDiv = document.querySelector('div[aria-label="Trending"]') as HTMLDivElement | null;
        if (inviteToSupscribeDiv) {
            inviteToSupscribeDiv.style.display = status ? 'none' : '';
        }
    }
    hideOtherThings()
    bodyChangesObserver(hideOtherThings)
}