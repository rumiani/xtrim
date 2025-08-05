import { create } from 'zustand';

interface ActivationStore {
    isActive: boolean;
    toggleIsActive: (status: boolean) => void;
}

const useActivationStore = create<ActivationStore>((set) => ({
    isActive: false,
    toggleIsActive: (status) => set(() => ({
        isActive: status
    }))
}));

export default useActivationStore;
