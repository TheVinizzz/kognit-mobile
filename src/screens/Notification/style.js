import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'; 

export const Container = styled.View`
  padding: 10px 20px;
`;

export const Card = styled.Text`
  color: #333;
  background-color: #f6ce55;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  }
});
