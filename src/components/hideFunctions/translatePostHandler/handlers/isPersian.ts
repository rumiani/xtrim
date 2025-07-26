export const isPersian = (text: string): boolean => {
    const persianChars = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g;
    const matches = text.match(persianChars);
    return !!matches && matches.length > text.length * 0.3;
}