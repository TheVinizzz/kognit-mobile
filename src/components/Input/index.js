import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container, TextInput } from './style';

export default function Input({ placeholder, header }) {
  return (
    <Container header={header}>
      <MaterialIcons name="search" size={25} color='#79338C' />
      <TextInput placeholder={placeholder} />
    </Container>
  );
}