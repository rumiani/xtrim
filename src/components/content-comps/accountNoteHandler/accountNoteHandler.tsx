import ReactDOM from 'react-dom/client';
import { bodyChangesObserver } from '@/content/handlers/others/bodyChangesObserver';
import NoteContainer from './noteContainer/noteContainer';
import { getXProfileUsername } from '@/content/handlers/getUserInfo/getXProfileUsername';

export const profileNoteHandler = (status: boolean) => {
    if (!status) return

    const profileNote = () => {
        const foundUsername = getXProfileUsername()
        if (!foundUsername) return
        // Find the profile page's main navigation bar
        const navBar = document.querySelector('nav[aria-label="Profile timelines"]');
        // Proceed only if the nav bar exists and our element isn't already there
        if (navBar && !document.getElementById("noteContainer")) {

            (navBar as HTMLDivElement).style.cssText = 'width:100%; display: flex !important; flex-direction: column !important;';

            const customDiv = document.createElement('div');
            customDiv.id = "noteContainer";
            customDiv.style.cssText = "width:100%; background:white; padding:2px;"
            navBar.prepend(customDiv);
            const root = ReactDOM.createRoot(customDiv);
            root.render(<NoteContainer />);

        }
        // 3. Add a class to the nav element to apply our custom layout
    }
    profileNote()
    bodyChangesObserver(profileNote)


};
