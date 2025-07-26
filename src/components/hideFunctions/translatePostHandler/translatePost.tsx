import { isPersian } from '@/components/hideFunctions/translatePostHandler/handlers/isPersian';
import ReactDOM from 'react-dom/client';
import { TranslateButton } from './translateButton/TranslateButton';
import { bodyChangesObserver } from '@/handlers/bodyChangesObserver';
import { optionPermisionHandler } from '@/handlers/optionPermisionHandler';


// Main function to observe posts and inject buttons
export const translatePostHandler = async () => {
    if (!await optionPermisionHandler("translate_button")) {
        const translateBtnContainers = document.querySelectorAll('.translate-btn-container');
        translateBtnContainers.forEach(container => container.remove())
        return
    }

    async function addTranslateButtons() {
        if (!await optionPermisionHandler("translate_button")) return
        // get the text from the post
        const posts = document.querySelectorAll('[data-testid="tweet"]');
        posts.forEach((tweet) => {
            const tweetTextDiv = tweet.querySelector('[data-testid="tweetText"]');
            if (!tweetTextDiv || tweetTextDiv.querySelector('.translate-btn-container')) return;

            const rawText = Array.from(tweetTextDiv.querySelectorAll('span'))
                .map((span) => span.textContent)
                .join(' ')
                .trim();

            if (!rawText || isPersian(rawText)) return;
            // --- Container for React component ---
            const container = document.createElement('div');
            container.className = 'translate-btn-container';
            tweetTextDiv.appendChild(container);

            const root = ReactDOM.createRoot(container);
            root.render(<TranslateButton text={rawText} />);
        });
    }

    bodyChangesObserver(addTranslateButtons);
};
