import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { AppProvider } from './context/AppContext';
import FullScreen from './screens/FullscreenScreen';
import ModalScreen from './screens/ModalScreen';
import StatusBarScreen from './screens/StatusBarScreen';
import createFullscreenStore from './stores/FullscreenStore';
import createStatusBarStore from './stores/StatusBarStore';

const Tab = createBottomTabNavigator();
const statusBarStore = createStatusBarStore();
const fullscreenStore = createFullscreenStore();

const App = observer(() => {
  return (
    <AppProvider
      statusBarStore={statusBarStore}
      fullscreenStore={fullscreenStore}>
      <StatusBar
        barStyle={statusBarStore.style}
        hidden={statusBarStore.hidden}
        animated={statusBarStore.animated}
        translucent={statusBarStore.translucent}
        backgroundColor={statusBarStore.bg}
      />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={FullScreen} />
          <Tab.Screen name="StatusBar" component={StatusBarScreen} />
          <Tab.Screen name="Modals" component={ModalScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
});

export default App;
