import React from 'react'
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Item, Label, Input } from 'native-base'

import Colors from '../utils/Colors'
import Codes from '../utils/Codes'

export default class SignUp extends React.Component {

  state = { email: '', password: '', repeatedPassword: '', errorMessage: null }

  handleSignUp = () => {
    const {email, password, repeatedPassword, name} = this.state

    if(email !== '' && password !== '' && name !== '' && password === repeatedPassword)
    {
      fetch('https://fridge-api-rest.herokuapp.com/api/register', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
       },
          body: JSON.stringify({
              "email": email,
              "name" : name,
              "password" : password
          }),
      })
      .then(response => response.json())
      .then(res => {
          if(res.message === Codes.ALREADY_EXISTS)
          {
              this.setState({errorMessage : 'Debe ingresar un mail valido'})
          }
          if(res.message === Codes.REGISTER)
          {
              this.props.navigation.navigate('Home')
          }
      })
    }
    else
    {
        this.setState({errorMessage : 'Debe completar todos lo campos de forma correcta'})
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.titleContainer}>
          <Label style={styles.title}> F  R  I  D  G  E  </Label>
        </View>
        <View style={styles.inputContainer}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              onChangeText={email => this.setState({ email })}
              value={this.state.email} />
          </Item>
          <Item floatingLabel style={{ marginTop: 5 }}>
            <Label>Nombre</Label>
            <Input
              onChangeText={name => this.setState({ name })}
              value={this.state.name} />
          </Item>
          <Item floatingLabel style={{ marginTop: 5 }}>
            <Label>Contrasena</Label>
            <Input
              onChangeText={password => this.setState({ password })}
              value={this.state.password} />
          </Item>
          <Item floatingLabel style={{ marginTop: 5 }}>
            <Label>Repetir contrasena</Label>
            <Input
              onChangeText={repeatedPassword => this.setState({ repeatedPassword })}
              value={this.state.repeatedPassword} />
          </Item>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={this.handleSignUp} style={styles.buttonContainer}>
            <Label style={styles.buttonText}>Registarse</Label>
          </TouchableOpacity>
          {this.state.errorMessage &&
            <Label style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Label>}
        </View>
      </KeyboardAvoidingView>
    )
  }
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
    backgroundColor: Colors.GREY_BACKGROUND,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 14,
  },

  actionContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '75%',
  },


  linkButton: {
    textAlign: 'center',
    color: Colors.VIOLET
  },
})