import { create } from 'zustand';

interface IInputSearchState {
	inputSearch: string;
	setInputSearch: (inputSearch: string) => void;
}

const useInputSearchState = create<IInputSearchState>((set) => ({
	inputSearch: '',
	setInputSearch: (inputSearch: string) => set({ inputSearch }),
}));

export { useInputSearchState };
