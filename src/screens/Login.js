import React, {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Item, Label, Input } from 'native-base'

import Colors from '../utils/Colors'
import Codes from '../utils/Codes'

const Login = ({ navigation }) => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  const handleChangeEmail = email => {
    setEmail(email)
  }

  const handleChangePassword = password => {
    setPassword(password)
  }

  const handleNavigateToRegister = () => {
    navigation.navigate('Register')
  }

  const handleLogin = () => {
      if(email !== '' && password !== '')
      {
        fetch('https://fridge-api-rest.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
            body: JSON.stringify({
                "email": email,
                "password" : password
            }),
        })
        .then(response => response.json())
        .then(res => {
            if(res.message === Codes.NOT_EXISTS)
            {
                setErrorMessage('El usuario y/o la contrasena son incorrectos')
            }
            if(res.message === Codes.LOGIN)
            {
                navigation.navigate('Home')
            }
        })
      }
      else
      {
          setErrorMessage('Debe ingresar un usuario y una contrasena')
      }
  }
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.titleContainer}>
          <Label style={styles.title}> F  R  I  D  G  E  </Label>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel >
            <Label>Email</Label>
            <Input
              onChangeText={handleChangeEmail}
              value={email}
            />
          </Item>
          <Item floatingLabel style={{ marginTop: 5 }}>
            <Label>Contrasena</Label>
            <Input
              onChangeText={handleChangePassword}
              value={password}
            />
          </Item>
          <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
            <Label style={styles.buttonText}>Ingresar</Label>
          </TouchableOpacity>
          {errorMessage &&
            <Label style={{ color: 'red' }}>
              {errorMessage}
            </Label>}
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={handleNavigateToRegister}>
            <Label style={styles.linkButton}> No estas registrado? Presiona aca!</Label>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREY_BACKGROUND,
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
  },

  inputContainer: {
    width: '75%',
    flex: 1,
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 35,
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.VIOLET,
    backgroundColor: Colors.GREY_BACKGROUND
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 14,
  },

  actionContainer: {
    flex: 1,
    justifyContent: 'center'
  },


  linkButton: {
    textAlign: 'center',
    color: Colors.VIOLET
  },
})

export default Login