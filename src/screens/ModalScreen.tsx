import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';

const ModalScreen: React.FC = observer(() => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Modal!</Text>
    </View>
  );
});

export default ModalScreen;
