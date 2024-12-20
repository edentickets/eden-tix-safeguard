import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useAuthModal = create<AuthModalState>((set) => ({
  isOpen: false,
  openModal: () => {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('hidden');
    set({ isOpen: true });
  },
  closeModal: () => {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
    set({ isOpen: false });
  },
}));