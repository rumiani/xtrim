import { Feature, list as fallbackList } from '@/assets/lists/featuresList';
import { create } from 'zustand';

export interface ListStore {
    list: Feature[];
    loadListFromStorage: () => void;
    setListItemStatus: (itemValue: string) => void;
    setAllListItemStatus: (status: boolean) => void;
}

const useListStore = create<ListStore>((set, get) => ({
    list: [...fallbackList],
    loadListFromStorage: async () => {
        const result = await chrome.storage.local.get(['list']);
        if (result.list && Array.isArray(result.list) && result.list.length > 0) {
            set({ list: result.list });
        } else {
            set(state => ({ list: state.list }));
            await chrome.storage.local.set({ list: result });
        }
    },
    setListItemStatus: async (itemValue) => {
        const updatedList = get().list.find((item) => item.value === itemValue);
        updatedList!.status = !updatedList!.status;
        set((state) => {
            chrome.storage.local.set({ list: state.list });
            return ({ list: [...state.list] })
        });
    },
    setAllListItemStatus: async (status) => {
        const updatedList = get().list.map((item) => ({
            ...item,
            status: !status
        }));
        set({ list: updatedList });
        await chrome.storage.local.set({ list: updatedList });
    },
}));

export default useListStore;
