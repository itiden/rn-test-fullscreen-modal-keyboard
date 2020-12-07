import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet, View, Text, PixelRatio } from 'react-native';
import { Container, Content, H2 } from 'native-base';

const DpiScreen: React.FC = observer(() => {
  return (
    <Container>
      <Content padder>
        <View style={styles.dp300}>
          <Text style={styles.font24}>Width: 300, Font: 24</Text>
        </View>
        <H2>Pixel sizes</H2>
        <Text>PixelRatio.get(): {PixelRatio.get()}</Text>
        <Text>PixelRatio.getFontScale(): {PixelRatio.getFontScale()}</Text>
        <Text>
          PixelRatio.getPixelSizeForLayoutSize(100):{' '}
          {PixelRatio.getPixelSizeForLayoutSize(100)}
        </Text>
      </Content>
    </Container>
  );
});

const styles = StyleSheet.create({
  dp300: {
    width: 300,
    backgroundColor: 'green',
  },
  font24: {
    fontSize: 24,
    lineHeight: 24,
  },
});

export default DpiScreen;
