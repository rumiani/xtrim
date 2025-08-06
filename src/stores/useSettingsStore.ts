import { create } from "zustand";
import { persist } from "zustand/middleware";
interface Language { code: string, name: string }
interface SettingsStore {
    isActive: boolean;
    lang: Language;
    toggleIsActive: (status: boolean) => void;
    setLanguage: (language: Language) => void;
}

const useSettingsStore = create<SettingsStore>()(
    persist(
        (set) => ({
            isActive: false,
            lang: { code: "", name: "" },
            toggleIsActive: (status) => set({ isActive: status }),
            setLanguage: (lang) => set({ lang }),
        }),
        {
            name: "language",
            partialize: (state) => ({
                lang: state.lang,
            }),
        }
    )
);

export default useSettingsStore;
