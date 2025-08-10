import { create } from "zustand";
import { persist } from "zustand/middleware";
interface Language { code: string, name: string }
interface SettingsStore {
    isActive: boolean;
    lang: Language;
    toggleIsActive: () => void;
    setLanguage: (language: Language) => void;
}

const useSettingsStore = create<SettingsStore>()(
    persist(
        (set) => ({
            isActive: false,
            lang: { code: "fa", name: "Persian" },
            toggleIsActive: () => set((state) => ({ isActive: !state.isActive })),
            setLanguage: (lang) => set({ lang }),
        }),
        {
            name: "language",
            partialize: (state) => ({
                lang: state.lang,
                isActive: state.isActive,

            }),
        }
    )
);

export default useSettingsStore;
