import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import sucessImg from '../../assets/sucess.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

export function Sucess() {
  return (
    <View style={styles.container}>
      <Image source={sucessImg} style={styles.img} />

      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
