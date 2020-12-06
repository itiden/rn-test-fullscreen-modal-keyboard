import { observer } from 'mobx-react';
import {
  Body,
  CheckBox,
  Container,
  Content,
  Left,
  ListItem,
  Radio,
  Right,
  Text,
} from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { useStatusBarStore } from '../context/AppContext';

const StatusBarScreen: React.FC = observer(() => {
  const statusBarStore = useStatusBarStore();
  return (
    <Container>
      <Content padder>
        <Text>StatusBar.currentHeight: {StatusBar.currentHeight}</Text>
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
            checked={statusBarStore?.translucent}
            onPress={() =>
              statusBarStore?.setTranslucent(!statusBarStore?.translucent)
            }
          />
          <Body>
            <Text>Translucent</Text>
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
        <ListItem>
          <Left>
            <Text>BG black</Text>
          </Left>
          <Right>
            <Radio
              selected={statusBarStore?.bg === 'black'}
              onPress={() => statusBarStore?.setBg('black')}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>BG green</Text>
          </Left>
          <Right>
            <Radio
              selected={statusBarStore?.bg === 'green'}
              onPress={() => statusBarStore?.setBg('green')}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>BG blue</Text>
          </Left>
          <Right>
            <Radio
              selected={statusBarStore?.bg === 'blue'}
              onPress={() => statusBarStore?.setBg('blue')}
            />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
});

export default StatusBarScreen;
