export const optionPermisionHandler = async (optionValue: string) => {
    const result = await chrome.storage.local.get(['list'])
    return result.list.find((item: any) => item.value === optionValue).status
}