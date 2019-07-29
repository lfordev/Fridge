import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const CardItem = ({name, amount}) => {
    const renderItem = (iconName, onPress) => (
        <Icon name={iconName} onPress={onPress} size={20} style={styles.cardIcon}/>
    )

    const handlePlusPress = () => {
        console.warn('Plus Press')
    }

    const handleMinusPress = () => {
        console.warn('Minus Press')
    }

    const handleDeletePress = () => {
        console.warn('Delete Press')
    }

    return (
      <View style={styles.container}>
        <Text> {name} </Text>
        <Text> {amount} </Text>
        <View style={styles.actionsContainer}>
            {renderItem("plus", handlePlusPress)}
            {renderItem("minus", handleMinusPress)}
            {renderItem("trash", handleDeletePress)}
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'red',
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  actionsContainer: {
    flexDirection: 'row',
  },

  cardIcon: {
    marginHorizontal: 10,
  },
})

export default CardItem