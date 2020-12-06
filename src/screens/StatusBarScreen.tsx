import { observer } from 'mobx-react';
import {
  Body,
  CheckBox,
  Container,
  Content,
  Header,
  Left,
  ListItem,
  Picker,
  Radio,
  Right,
  Text,
} from 'native-base';
import React from 'react';
import { useStatusBarStore } from '../context/AppContext';

const StatusBarScreen: React.FC = observer(() => {
  const statusBarStore = useStatusBarStore();
  return (
    <Container>
      <Header>
        <Text>StatusBar</Text>
      </Header>
      <Content>
        <ListItem>
          <CheckBox
            checked={statusBarStore?.hidden}
            onPress={() => statusBarStore?.setHidden(!statusBarStore?.hidden)}
          />
          <Body>
            <Text>Hidden</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox
            checked={statusBarStore?.animated}
            onPress={() =>
              statusBarStore?.setAnimated(!statusBarStore?.animated)
            }
          />
          <Body>
            <Text>Animated</Text>
          </Body>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Style default</Text>
          </Left>
          <Right>
            <Radio
              selected={statusBarStore?.style === 'default'}
              onPress={() => statusBarStore?.setStyle('default')}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Style dark-content</Text>
          </Left>
          <Right>
            <Radio
              selected={statusBarStore?.style === 'dark-content'}
              onPress={() => statusBarStore?.setStyle('dark-content')}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Style light-content</Text>
          </Left>
          <Right>
            <Radio
              selected={statusBarStore?.style === 'light-content'}
              onPress={() => statusBarStore?.setStyle('light-content')}
            />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
});

export default StatusBarScreen;
