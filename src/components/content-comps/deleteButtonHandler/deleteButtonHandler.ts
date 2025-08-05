import { getUserInfo } from "@/content/handlers/getUserInfo/getUserInfo";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const deleteButtonHandler = (status: boolean) => {
    // Function to check if user info is loaded and add delete buttons
    function checkUserAndAddButtons() {
        const user = getUserInfo();        
        if (!user?.username) return; // Exit if user info isn't ready yet

        function addDeleteButtons() {
            if (!status) 
                return document.querySelectorAll('.custom-delete-button').forEach(container => container.remove())

            const posts = document.querySelectorAll('article[role="article"]') as NodeListOf<HTMLElement>;
            posts.forEach((post) => {
                if (post.querySelector('.custom-delete-button')) return;

                const usernameLink = post.querySelector(`a[href="/${user!.username}"]`);
                const isRepost = post.querySelector('svg[data-testid="icon-retweet"]') || post.textContent?.includes('You reposted');
                if (!usernameLink || isRepost) return;

                const actionBar = post.querySelector('div[role="group"]');
                if (!actionBar) return;

                const deleteButton = document.createElement('button');
                deleteButton.className = 'custom-delete-button';
                deleteButton.textContent = 'Delete';
                deleteButton.style.cssText = 'margin-left: 10px; color: red; cursor: pointer; background: none; border: none; font-size: 14px;';

                actionBar.appendChild(deleteButton);

                deleteButton.addEventListener('click', () => automateDelete(post));
            });
        }

        addDeleteButtons();
        bodyChangesObserver(addDeleteButtons);
    }

    // Use MutationObserver to wait for user info element (adjust selector based on getUserInfo() source)
    const userInfoObserver = new MutationObserver(() => {
        const user = getUserInfo();
        if (user?.username) {
            checkUserAndAddButtons();
            userInfoObserver.disconnect(); // Stop observing once user info is loaded
        }
    });

    // Start observing the body (or a specific container where user info appears)
    userInfoObserver.observe(document.body, { childList: true, subtree: true });

    // Initial check in case user info is already loaded
    checkUserAndAddButtons();
};

function automateDelete(post: HTMLElement) {
    const moreButton = post.querySelector('button[aria-haspopup="menu"]') as HTMLElement | null;
    if (!moreButton) return;
    moreButton.click();

    const menuObserver = new MutationObserver((mutations, observer) => {
        const deleteMenuItem = document.querySelector('div[role="menuitem"][tabindex="0"] span');
        if (deleteMenuItem && deleteMenuItem.textContent!.trim() === 'Delete') {
            (deleteMenuItem as HTMLElement).click();
            console.log("deleteMenuItem:", mutations);

            const confirmObserver = new MutationObserver((_, confirmObserver) => {
                const confirmButton = document.querySelector('button[data-testid="confirmationSheetConfirm"]') as HTMLElement | null;
                if (confirmButton) {
                    confirmButton.click();
                    confirmObserver.disconnect();
                }
            });
            confirmObserver.observe(document.body, { childList: true, subtree: true });
            observer.disconnect();
        }
    });
    menuObserver.observe(document.body, { childList: true, subtree: true });
}