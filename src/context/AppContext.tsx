import * as React from 'react';
import { StatusBarStore } from '../stores/StatusBarStore';
import { FullscreenStore } from '../stores/FullscreenStore';
const AppContext = React.createContext<{
  statusBarStore?: StatusBarStore;
  fullscreenStore?: FullscreenStore;
}>({});

type AppProviderProps = {
  statusBarStore: StatusBarStore;
  fullscreenStore: FullscreenStore;
};

const AppProvider: React.FC<AppProviderProps> = ({
  children,
  statusBarStore,
  fullscreenStore,
}) => {
  return (
    <AppContext.Provider value={{ statusBarStore, fullscreenStore }}>
      {children}
    </AppContext.Provider>
  );
};

const useStatusBarStore = () => {
  const context = React.useContext(AppContext);
  return context.statusBarStore;
};

const useFullscreenStore = () => {
  const context = React.useContext(AppContext);
  return context.fullscreenStore;
};

export { AppProvider, useStatusBarStore, useFullscreenStore };
