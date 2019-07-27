import React from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View, TextInput, FlatList } from 'react-native'

const data = [
  {
    name : "holis",
  },
  {
    name : "holis",
  },
  {
    name : "holis",
  },
  {
    name : "holis",
  },
  {
    name : "holis",
  },
]

export default class Main extends React.Component {

  componentDidMount() {
        
  }

  renderData(item){
    return (
      <View style={styles.itemListContainer}>
        <Text>{item.name}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => this.renderData(item)}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemListContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})