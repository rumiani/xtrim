import ReactDOM from 'react-dom/client';
// import { bodyChangesObserver } from '@/content/handlers/others/bodyChangesObserver';
import NoteContainer from './noteContainer/noteContainer';
// import { bodyChangesObserver } from '@/content/handlers/others/bodyChangesObserver';
import { getXProfileUsernameFromURL } from '@/content/handlers/getUserInfo/getXProfileUsernameFromURL';

export const profileNoteHandler = (status: boolean) => {
    const profileNote = () => {
        const foundUsername = getXProfileUsernameFromURL()
        const navbar = document.querySelector('nav[aria-label="Profile timelines"]');
        const noteContainer = document.getElementById("noteContainer")

        if (!foundUsername || !navbar) return
        if (!status && noteContainer) return noteContainer.remove()

        if (status && !noteContainer) {
            (navbar as HTMLDivElement).style.cssText = 'width:100%; display: flex !important; flex-direction: column !important;';
            const customDiv = document.createElement('div');
            customDiv.id = "noteContainer";
            customDiv.style.cssText = "width:100%; background:white; padding:2px;";
            (navbar as HTMLDivElement).prepend(customDiv);
            const root = ReactDOM.createRoot(customDiv);
            root.render(<NoteContainer />);
        }
    }
    setInterval(() => profileNote(), 500);
};
