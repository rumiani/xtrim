export const hideElementHandler = (selector: string, status: boolean) => {
    const element = document.querySelector(selector) as HTMLAnchorElement | null;
    if (element) {
        element.style.display = status ? 'none' : '';
    }
}