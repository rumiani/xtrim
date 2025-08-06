import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const hideTweetEngagementHandler = (status: boolean) => {
  const selector = [
    'div[aria-label*="repl"]',
    'div[aria-label*="repost"]',
    'div[aria-label*="like"]',
    'div[aria-label*="bookmark"]',
    'div[aria-label*="view"]'
  ].join(', ');

  const hideTweetEngagement = () => {
    const buttons = document.querySelectorAll(selector);

    buttons.forEach(btn => {
      const spans = btn.querySelectorAll('span');

      spans.forEach(span => {
        if (span.innerText.trim()) {
          if (status) {
            // Hide and mark
            span.setAttribute("data-engagement-hidden", "true");
            span.style.display = "none";
          } else {
            // Only unhide if we hid it before
            if (span.getAttribute("data-engagement-hidden") === "true") {
              span.style.display = "";
              span.removeAttribute("data-engagement-hidden");
            }
          }
        }
      });
    });
  };

  hideTweetEngagement();
  bodyChangesObserver(hideTweetEngagement);
};
