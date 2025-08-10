export const visibilityElementHandler = (selector: string, status: boolean) => {
    const element = document.querySelector(selector) as HTMLAnchorElement | null;
    if (element) {
        element.style.visibility = status ? 'hidden' : 'visible';
    }
}