import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideSearchBarHandler = (status: boolean) => {
    const hideSearchBar = () => {
        const searchBarDiv = document.querySelector('form[aria-label="Search"]') as HTMLDivElement | null;
        if (searchBarDiv) {
            searchBarDiv.style.display = status ? 'none' : '';
        }
    }
    hideSearchBar()
    bodyChangesObserver(hideSearchBar)
}