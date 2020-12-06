import { observer } from 'mobx-react';
import { Container, Content, H2, Header, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const HomeScreen: React.FC = observer(() => {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  return (
    <Container>
      <Content padder>
        <H2>Dimenstions</H2>
        <Text>window.height: {Dimensions.get('window').height}</Text>
        <Text>window.width: {Dimensions.get('window').width}</Text>
        <Text>window.fontScale: {Dimensions.get('window').fontScale}</Text>
        <Text>window.scale: {Dimensions.get('window').scale}</Text>
        <Text>screen.height: {Dimensions.get('screen').height}</Text>
        <Text>screen.width: {Dimensions.get('screen').width}</Text>
        <Text>screen.fontScale: {Dimensions.get('screen').fontScale}</Text>
        <Text>screen.scale: {Dimensions.get('screen').scale}</Text>
        <H2>react-native-device-info</H2>
        <Text>hasNotch: {DeviceInfo.hasNotch() ? 'Yes' : 'No'}</Text>
        <H2>react-native-safe-area-context</H2>
        <Text>insets.top: {insets.top}</Text>
        <Text>insets.bottom: {insets.bottom}</Text>
        <Text>insets.left: {insets.left}</Text>
        <Text>insets.right: {insets.right}</Text>
        <Text>frame.x: {frame.x}</Text>
        <Text>frame.y: {frame.y}</Text>
        <Text>frame.width: {frame.width}</Text>
        <Text>frame.height: {frame.height}</Text>
      </Content>
    </Container>
  );
});

export default HomeScreen;
