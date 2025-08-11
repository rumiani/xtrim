import { SettingsTypes } from '@/assets/lists/settings';
import { chromStorageHandler } from '@/handlers/chromStorageHandler';
import { create } from 'zustand';

export interface SettingSotore {
    isActive: boolean;
    lang: {
        code: string;
        name: string;
    };
    setLang: (lang: { code: string; name: string }) => void;
    setIsActive: (isActive: boolean) => void;
    loadSettingsFromStorage: () => void
}

const useSettingStore = create<SettingSotore>((set) => ({
    isActive: false,
    lang: { code: "fa", name: "Persian" },
    setLang: async (lang) => {
        const settings = await chromStorageHandler.get('settings') as SettingsTypes;
        settings.lang = lang
        await chromStorageHandler.set("settings", settings)
        set({ lang })
    },
    setIsActive: async (isActive) => {
        const settings = await chromStorageHandler.get('settings') as SettingsTypes;
        settings.isActive = isActive
        await chromStorageHandler.set("settings", settings)
        set({ isActive })
    },
    loadSettingsFromStorage: async () => {
        const { isActive, lang } = await chromStorageHandler.get('settings') as SettingsTypes;
        set({ isActive: isActive, lang: lang })
    }
}));

export default useSettingStore;
