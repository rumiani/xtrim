import { Feature, list as fallbackList } from '@/assets/lists/featuresList';
import { chromStorageHandler } from '@/handlers/chromStorageHandler';
import { create } from 'zustand';

export interface ListStore {
    list: Feature[];
    loadListFromStorage: () => void;
    setListItemStatus: (itemValue: string) => void;
    setAllListItemStatus: (status: boolean) => void;
}

const useListStore = create<ListStore>((set) => ({
    list: [...fallbackList],
    loadListFromStorage: async () => {
        const list = await chromStorageHandler.get('list') as Feature[];
        if (list && Array.isArray(list) && list.length > 0) {
            set({ list: list });
        } else {
            set(state => ({ list: state.list }));
            await chromStorageHandler.set("list", list);
        }
    },
    setListItemStatus: async (itemValue) => {
        const list = await chromStorageHandler.get('list') as Feature[];
        const listItem = list.find((item) => item.value === itemValue);
        listItem!.status = !listItem!.status;
        chromStorageHandler.set("list", list);
        set({list})
    },
    setAllListItemStatus: async (status) => {
        const list = await chromStorageHandler.get('list') as Feature[];
        const updatedList = list.map((item) => ({
            ...item,
            status
        }));
        set({ list: updatedList });
        await chromStorageHandler.set("list", updatedList);
    },
}));

export default useListStore;
