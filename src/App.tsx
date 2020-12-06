import { observer } from 'mobx-react';
import * as React from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { StatusBar } from 'react-native';
import { immersiveModeOn } from 'react-native-android-immersive-mode';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { AppProvider } from './context/AppContext';
import Navigation from './Navigation';
import createFullscreenStore from './stores/FullscreenStore';
import createStatusBarStore from './stores/StatusBarStore';

enableScreens();

const statusBarStore = createStatusBarStore();
const fullscreenStore = createFullscreenStore();

const App = observer(() => {
  React.useEffect(() => {
    function handleAppStateChange(state: AppStateStatus) {
      if (state === 'active' && fullscreenStore.fullscreen) {
        immersiveModeOn();
      }
    }
    changeNavigationBarColor('black', true, false);
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);
  return (
    <AppProvider
      statusBarStore={statusBarStore}
      fullscreenStore={fullscreenStore}>
      <StatusBar
        barStyle={statusBarStore?.style}
        hidden={statusBarStore?.hidden}
        animated={statusBarStore?.animated}
        translucent={statusBarStore?.translucent}
        backgroundColor={statusBarStore?.bg}
      />
      <SafeAreaProvider>
        <Host>
          <Navigation />
        </Host>
      </SafeAreaProvider>
    </AppProvider>
  );
});

export default App;
