export const isXAccount = () => {
    const xPattern = /^(https?:\/\/)?(www\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]{1,15}(\/)?$/;
    return xPattern.test(window.location.href.trim());
}