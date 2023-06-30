import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Cad() {
  return <Image source={require('../assets/Cad.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
})
