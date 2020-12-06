import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FullScreen from './screens/FullscreenScreen';
import HomeScreen from './screens/HomeScreen';
import ModalScreen from './screens/ModalScreen';
import StatusBarScreen from './screens/StatusBarScreen';

const Tab = createBottomTabNavigator();

const Navigation = observer(() => {
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          safeAreaInsets: {
            bottom: Platform.OS === 'ios' ? insets.bottom : 0,
            top: Platform.OS === 'ios' ? insets.top : 0,
          },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Full" component={FullScreen} />
        <Tab.Screen name="StatusBar" component={StatusBarScreen} />
        <Tab.Screen name="Modals" component={ModalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
});

export default Navigation;
