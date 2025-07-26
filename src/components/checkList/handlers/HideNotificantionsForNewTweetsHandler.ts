export const HideNotificantionsForNewTweetsHandler = () => {
    console.log("runing ...");
    
    const cellDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]');
    cellDivs.forEach(div => {
        // Find the span with text starting with "Show" (case-insensitive)
        const span = div.querySelector('button span');
        if (span && span.textContent!.toLowerCase().startsWith('show')) {
            // Hide the parent div with data-testid="cellInnerDiv"
            (div as HTMLElement).style.display = 'none';
        }
    });
}