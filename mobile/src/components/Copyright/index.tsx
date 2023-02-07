import React from 'react';
import { View, Text, Linking } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Feito por {''}
        <Text
          style={styles.linking}
          onPress={() => {
            Linking.openURL(
              'https://www.linkedin.com/in/matheus-magnani-ba4842236/'
            );
          }}
        >
          Matheus Magnani
        </Text>
      </Text>
    </View>
  );
}
