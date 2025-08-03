import { bodyChangesObserver } from "@/content/handlers/others/bodyChangesObserver";

export const clearTitleHandler = (status: boolean) => {    
    status = !status
    
    const clerarTitle = () => {
        document.title = "";
        // const defaultFavicon = "https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png";
       const defaultFavicon = "https://abs.twimg.com/responsive-web/client-web/icon-svg.ea5ff4aa.svg"
        // const favicon = document.querySelector('link[rel="shortcut icon"]') || document.querySelector('link[rel="icon"]');
        const newFavicon = document.createElement("link");
        newFavicon.rel = "shortcut icon";
        newFavicon.href = defaultFavicon;
        document.head.appendChild(newFavicon);
    }
    clerarTitle()
    bodyChangesObserver(clerarTitle)
}