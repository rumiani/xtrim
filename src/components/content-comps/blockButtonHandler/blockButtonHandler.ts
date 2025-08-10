import { getUserInfo } from "@/content/handlers/getUserInfo/getUserInfo";
import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const blockButtonHandler = (status: boolean) => {

    function checkUserAndAddButtons() {
        const isOnProfile = document.querySelector('nav[aria-label="Profile timelines"]');
        if (isOnProfile) return

        function addblockButtons() {
            if (!status)
                return document.querySelectorAll('.custom-block-button').forEach(container => container.remove())

            const posts = document.querySelectorAll('article[role="article"]') as NodeListOf<HTMLElement>;
            posts.forEach((post) => {
                if (post.querySelector('.custom-block-button')) return;

                const actionBar = post.querySelector('div[role="group"]');
                if (!actionBar) return;

                const blockButton = document.createElement('button');
                blockButton.className = 'custom-block-button';
                blockButton.textContent = 'Block';
                blockButton.style.cssText = 'margin-left: 10px; color: red; cursor: pointer; background: none; border: none; font-size: 14px;';

                actionBar.appendChild(blockButton);

                blockButton.addEventListener('click', () => automateBlock(post));
            });
        }

        addblockButtons();
        bodyChangesObserver(addblockButtons);
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

function automateBlock(post: HTMLElement) {
    const moreButton = post.querySelector('button[aria-haspopup="menu"]') as HTMLElement | null;
    if (!moreButton) return;
    moreButton.click();

    const menuObserver = new MutationObserver((mutations, observer) => {
        const blockMenuItem = document.querySelector('div[data-testid="block"]');
        if (blockMenuItem) {
            (blockMenuItem as HTMLElement).click();
            console.log("blockMenuItem:", mutations);

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