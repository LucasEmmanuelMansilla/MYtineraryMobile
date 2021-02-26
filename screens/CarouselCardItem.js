import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"


export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.imgUrl}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 0 ,
    width: '100%'
  },
  image: {
    paddingVertical: 55,
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",

    paddingTop: 20,
    textAlign: 'center'

  },

   
  
})

export default CarouselCardItem