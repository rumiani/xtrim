import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hidePeopleYouMayKkowHandler = (status: boolean) => {
    const hidePeopleYouMayKkow = () => {
        const releventPeopleAside = document.querySelector('aside[aria-label="Relevant people"]') as HTMLDivElement | null;
        const peopleYouMayKkowAside = document.querySelector('aside[aria-label="Who to follow"]') as HTMLDivElement | null;
        if (peopleYouMayKkowAside) {
            peopleYouMayKkowAside.style.display = status ? 'none' : '';
        } else if (releventPeopleAside) {
            releventPeopleAside.style.display = status ? 'none' : '';
        }
    }
    hidePeopleYouMayKkow()
    bodyChangesObserver(hidePeopleYouMayKkow)

}