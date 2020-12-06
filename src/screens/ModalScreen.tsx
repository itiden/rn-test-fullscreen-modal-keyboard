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
  const modalizeRef = React.useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
    immersiveModeOff();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Modal!</Text>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Portal>
        <Modalize
          ref={modalizeRef}
          adjustToContentHeight
          onClose={() => immersiveModeOn()}>
          <Content padder>
            <Form>
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
