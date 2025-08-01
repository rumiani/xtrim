interface UserInfo {
    username: string;
    userId: string;
    name: string;
}
export const getUserInfo = (): UserInfo | undefined => {

    const nameElement = document.querySelector('div[data-testid="UserName"] > div > div');
      const link = document.querySelector('a[data-testid="editProfileButton"][href="/settings/profile"]');
    if(!!link && nameElement){
        const nameElementArray = nameElement!.textContent?.split('@') ?? null;
        const [name, username] = nameElementArray!
        
        // User ID may be in a tweet link; cast to HTMLAnchorElement to access href
        const userIdElement = document.querySelector('a[href*="/status/"]') as HTMLAnchorElement | null;
        const userId = userIdElement ? userIdElement.href.match(/\/status\/(\d+)/)?.[1] ?? null : null;
        
        if (nameElementArray && userId) {
            return { name, userId, username }
        }
    }
}