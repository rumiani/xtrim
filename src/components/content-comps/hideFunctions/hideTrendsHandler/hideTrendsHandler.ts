import { hideElementHandler } from "@/content/handlers/hideElementHandler/hideElementHandler";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideTrendsHandler = (status: boolean) => {
    const hideTrends = () => hideElementHandler('div[aria-label="Timeline: Trending now"]', status)
    hideTrends
    bodyChangesObserver(hideTrends)
};