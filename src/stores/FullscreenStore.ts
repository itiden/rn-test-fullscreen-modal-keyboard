import { makeAutoObservable } from 'mobx';

export type FullscreenStore = {
  fullscreen?: boolean;
  setFullscreen: (value: boolean) => void;
};

export default function createFullscreenStore() {
  const store = makeAutoObservable<FullscreenStore>({
    fullscreen: false,
    setFullscreen(value: boolean) {
      store.fullscreen = value;
    },
  });
  return store;
}
