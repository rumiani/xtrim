import ReactDOM from 'react-dom/client';
import { TranslateButton } from '../translateButton/TranslateButton';
// import { optionPermisionHandler } from '@/content/handlers/others/optionPermisionHandler';
import { bodyChangesObserver } from '@/content/handlers/others/bodyChangesObserver';
import { isPersian } from '../handlers/isPersian';


// Main function to observe posts and inject buttons
export const translatePostHandler = async (status: boolean) => {

    async function addTranslateButtons() {
        if (!status)
            return document.querySelectorAll('.translate-btn-container').forEach(container => container.remove())

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
