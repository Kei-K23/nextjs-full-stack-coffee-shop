"use client";

import { create } from "zustand";

interface NavbarState {
  position: number;
  isInBanner: boolean;
  isInSlideshow: boolean;
  isInFooter: boolean;
  isInAdvertising: boolean;
  setInBanner: (value: boolean) => void;
  setInSlideshow: (value: boolean) => void;
  setInFooter: (value: boolean) => void;
  setInAdvertising: (value: boolean) => void;
  setPosition: (position: number) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  position: 0,
  isInBanner: false,
  isInSlideshow: false,
  isInFooter: false,
  isInAdvertising: false,
  setInBanner: (value) => set({ isInBanner: value }),
  setInSlideshow: (value) => set({ isInSlideshow: value }),
  setInFooter: (value) => set({ isInFooter: value }),
  setInAdvertising: (value) => set({ isInAdvertising: value }),
  setPosition: (position) => set({ position }),
}));
