import { observer } from 'mobx-react';
import {
  Body,
  CheckBox,
  Container,
  Content,
  ListItem,
  Text,
} from 'native-base';
import React from 'react';
import { useFullscreenStore } from '../context/AppContext';
import FullScreen from 'react-native-full-screen';
import ImmersiveMode from 'react-native-immersive-mode';

const FullscreenScreen: React.FC = observer(() => {
  const fullscreenStore = useFullscreenStore();
  return (
    <Container>
      <Content>
        <ListItem>
          <CheckBox
            checked={fullscreenStore?.fullscreen}
            onPress={() => {
              if (fullscreenStore?.fullscreen) {
                fullscreenStore?.setFullscreen(false);
                FullScreen.offFullScreen();
              } else {
                fullscreenStore?.setFullscreen(true);
                FullScreen.onFullScreen();
              }
            }}
          />
          <Body>
            <Text>Fullscreen (react-native-full-screen)</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox
            checked={fullscreenStore?.fullscreen}
            onPress={() => {
              if (fullscreenStore?.fullscreen) {
                fullscreenStore?.setFullscreen(false);
                ImmersiveMode.setBarMode('Normal');
              } else {
                fullscreenStore?.setFullscreen(true);
                ImmersiveMode.setBarMode('Bottom');
              }
            }}
          />
          <Body>
            <Text>Fullscreen bottom (react-native-immersive-mode)</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox
            checked={fullscreenStore?.fullscreen}
            onPress={() => {
              if (fullscreenStore?.fullscreen) {
                fullscreenStore?.setFullscreen(false);
                ImmersiveMode.setBarMode('Normal');
              } else {
                fullscreenStore?.setFullscreen(true);
                ImmersiveMode.fullLayout(true);
                ImmersiveMode.setBarMode('Full');
              }
            }}
          />
          <Body>
            <Text>Fullscreen full (react-native-immersive-mode)</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  );
});

export default FullscreenScreen;
