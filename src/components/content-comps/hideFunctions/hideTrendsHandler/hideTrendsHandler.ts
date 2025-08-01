import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideTrendsHandler = (status: boolean) => {
    const hideTrends = () => {
        const trendsDiv = document.querySelector('div[aria-label="Timeline: Trending now"]') as HTMLDivElement | null;
        if (trendsDiv) {
            trendsDiv.style.display = status ? 'none' : 'block';
        }
    }
    hideTrends
    bodyChangesObserver(hideTrends)
};