import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideQuotedInquotesPageHandler = (status: boolean) => {
    const hideQoutedInqoutesPage = () => {
        const isQuotesPage = window.location.href.endsWith('/quotes');
        if (!isQuotesPage) return;

        const selector = 'div[role="link"]:has([data-testid="tweetText"])';
        const quotedTweets = document.querySelectorAll(selector);

        quotedTweets.forEach((element) => {
            // Hide the element if it's not already hidden.
            if (status && (element as HTMLDivElement).style.display !== 'none') {
                (element as HTMLDivElement).style.display = 'none';
            }
            else if (!status) {
                (element as HTMLDivElement).style.display = 'block';
            }
        });
    }

    hideQoutedInqoutesPage()
    bodyChangesObserver(hideQoutedInqoutesPage)

}