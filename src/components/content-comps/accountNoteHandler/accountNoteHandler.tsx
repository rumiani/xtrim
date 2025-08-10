import ReactDOM from 'react-dom/client';
// import { bodyChangesObserver } from '@/content/handlers/others/bodyChangesObserver';
import NoteContainer from './noteContainer/noteContainer';
import { bodyChangesObserver } from '@/content/handlers/others/bodyChangesObserver';
import { getXProfileUsernameFromURL } from '@/content/handlers/getUserInfo/getXProfileUsernameFromURL';

export const profileNoteHandler = (status: boolean) => {

    const profileNote = () => {
        const foundUsername = getXProfileUsernameFromURL()
        const isOnProfile = document.querySelector('nav[aria-label="Profile timelines"]');
        const noteContainer = document.getElementById("noteContainer")
        if (!foundUsername || !isOnProfile) return

        if (!status && noteContainer) {
            console.log("No ...........");
            return noteContainer.remove()
        }
        if (status && !noteContainer) {
            console.log('ceate .........',status);
            
            (isOnProfile as HTMLDivElement).style.cssText = 'width:100%; display: flex !important; flex-direction: column !important;';
            const customDiv = document.createElement('div');
            customDiv.id = "noteContainer";
            customDiv.style.cssText = "width:100%; background:white; padding:2px;";
            (isOnProfile as HTMLDivElement).prepend(customDiv);
            const root = ReactDOM.createRoot(customDiv);
            root.render(<NoteContainer />);

        }
    }
    profileNote()
    bodyChangesObserver(profileNote)
};
