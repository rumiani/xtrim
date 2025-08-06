import { list } from '@/assets/lists/featuresList';
import { create } from 'zustand';

export interface FeatureListTypes {
    category: 'tools' | 'hideElements';
    label: string;
    value: string;
    status: boolean;
    description: string;
}

export interface ListStore {
    list: FeatureListTypes[];
    setListItems: (items: FeatureListTypes[]) => void;
    setListItemStatus: (itemValue: string, status: boolean) => void;
    setAllListItemStatus: (status: boolean) => void;
}

const useListStore = create<ListStore>((set, get) => ({
    list: [...list] as FeatureListTypes[],
    setListItems: (items) => set({ list: items }),
    setListItemStatus: (itemValue, status) =>
        set((state) => ({
            list: state.list.map((item) =>
                item.value === itemValue ? { ...item, status } : item
            ),
        })),
    setAllListItemStatus: (status) => {
        const updatedList = get().list.map((item) => ({
            ...item,
            status,
        }));
        set({ list: updatedList });
        chrome.storage.local.set({ list: updatedList });
    },
}));

export default useListStore;
