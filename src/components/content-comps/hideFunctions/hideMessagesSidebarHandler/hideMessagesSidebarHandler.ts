import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideMessagesSidebarHandler = (status: boolean) => {
    const hideMessagesSidebar = () => {
        const DMDrawer = document.querySelector('div[data-testid="DMDrawer"]') as HTMLDivElement | null;
        if (DMDrawer) {
            DMDrawer.style.display = status ? 'none' : ''
        }
    }
    hideMessagesSidebar()
    bodyChangesObserver(hideMessagesSidebar)
}

