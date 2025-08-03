import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hidePremiumHandler = (status: boolean) => {
    const hidePremium = () => {
        hideElementHandler('a[href="/i/premium_sign_up"]', status)
        hideElementHandler('div[data-testid="super-upsell-UpsellCardRenderProperties"]', status)
        hideElementHandler('div[data-testid="verified_profile_visitor_upsell"]', status)
    }
    hidePremium()
    bodyChangesObserver(hidePremium)
}