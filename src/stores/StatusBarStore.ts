import { makeAutoObservable } from 'mobx';
import { ColorValue, StatusBarStyle } from 'react-native';

export type StatusBarStore = {
  hidden?: boolean;
  animated?: boolean;
  bg?: ColorValue; // Android
  style: StatusBarStyle;
  translucent?: boolean; // Android
  setHidden: (value: boolean) => void;
  setAnimated: (value: boolean) => void;
  setBg: (value: ColorValue) => void;
  setStyle: (value: StatusBarStyle) => void;
  setTranslucent: (value: boolean) => void;
};

export default function createStatusBarStore() {
  const store = makeAutoObservable<StatusBarStore>({
    hidden: false,
    animated: false,
    bg: 'black',
    style: 'light-content',
    translucent: false,
    setHidden(value: boolean) {
      store.hidden = value;
    },
    setAnimated(value: boolean) {
      store.animated = value;
    },
    setBg(value: ColorValue) {
      store.bg = value;
    },
    setStyle(value: StatusBarStyle) {
      store.style = value;
    },
    setTranslucent(value: boolean) {
      store.translucent = value;
    },
  });
  return store;
}
