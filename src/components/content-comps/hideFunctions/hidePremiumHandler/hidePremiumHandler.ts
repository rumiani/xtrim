import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hidePremiumHandler = (status: boolean) => {
    const hidePremium = () => {
        hideElementHandler('a[href="/i/premium_sign_up"]', status)
        const upsellElements = document.querySelectorAll('[data-testid*="upsell"]');
        upsellElements.forEach((el) => {
            (el as HTMLElement).style.display = status ? 'none' : "";
        });
    }
    hidePremium()
    bodyChangesObserver(hidePremium)
}