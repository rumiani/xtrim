export type SettingsTypes = {
    isActive: boolean,
    lang: { code: string, name: string }
}
export const settings: SettingsTypes = {
    isActive: false,
    lang: { code: "fa", name: "Persian" }
}