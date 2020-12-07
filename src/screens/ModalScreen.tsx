import { observer } from 'mobx-react';
import { Container, Content, Form, Input, Item } from 'native-base';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  immersiveModeOff,
  immersiveModeOn,
} from 'react-native-android-immersive-mode';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

const ModalScreen: React.FC = observer(() => {
  const modalizeRef1 = React.useRef<Modalize>(null);
  const inputRef = React.useRef<Input>(null);

  const onOpen = () => {
    modalizeRef1.current?.open();
    immersiveModeOff();
  };

  const onOpenFocus = () => {
    modalizeRef1.current?.open();
    immersiveModeOff();
    setTimeout(() => {
      console.log(inputRef.current);
      inputRef.current?._root.focus();
    }, 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Modal!</Text>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onOpenFocus}>
        <Text>Open the modal (focus)</Text>
      </TouchableOpacity>
      <Portal>
        <Modalize
          ref={modalizeRef1}
          adjustToContentHeight
          onClose={() => immersiveModeOn()}>
          <Content padder>
            <Form>
              <Item>
                <Input ref={inputRef} placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item last>
                <Input placeholder="Password" />
              </Item>
            </Form>
          </Content>
        </Modalize>
      </Portal>
    </View>
  );
});

export default ModalScreen;
