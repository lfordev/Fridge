import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import CardItem from '../components/CardItem'

const data = [
  {
    name : "Alfajores",
    amount: "3"
  },
  {
    name : "Leche",
    amount: "1"
  },
  {
    name : "Nesquik",
    amount: "6"
  },
  {
    name : "Parmesano",
    amount: "3"
  },
  {
    name : "Oreos",
    amount: "19"
  },
]

const Main = () => {
  const renderCardItem = ({ item }) => {
    return <CardItem name={item.name} amount={item.amount} />
  }
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderCardItem}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
  },
})

export default Main