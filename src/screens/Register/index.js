import React, { useState } from 'react'
import * as   Animatable from "react-native-animatable"
import { theme } from '../../core/theme'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import TextInput from '../../components/TextInput'
import Background from '../../components/Background'
import Button from '../../components/Button'
import Cad from '../../components/Cad'

import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'

import { useNavigation } from '@react-navigation/native'



const Register = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState({ value: '', error: '' })

    const [name, setName] = useState({ value: '', error: '' })

    const [tel, setTel] = useState({ value: '', error: '' })

    const [password, setPassword] = useState({ value: '', error: '' })



    return (
        <Background style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0000' }}>
                <Animatable.View animation="fadeInDown" delay={500} style={styles.containerHeader}>
                    <Cad />
                </Animatable.View>
            <TextInput
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
                keyboardType="default"
            />
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Telefone"
                returnKeyType="next"
                value={tel.value}
                onChangeText={(Number) => setTel({ value: Number, error: '' })}
                error={!!tel.error}
                errorText={tel.error}
                autoCapitalize="none"
                autoCompleteType="tel"
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
            />
            <TextInput
                label="Senha"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.forgot}>Já tenho uma Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Button mode="contained">Cadastrar</Button>
            </TouchableOpacity>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
        marginBottom: 20,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

export default Register