import React from "react";
import {Image, StyleSheet, View,TextInput} from "react-native";

const SearchBar = (props) => {
  return(
      <View style={styles.container}>
        <Image
            source={require('../../assets/search.png')}
            style={styles.image}
        />
        <TextInput
            placeholder={'search books,magazines'}
            style={styles.input}
        />
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    backgroundColor:'#F2F2F2',
    height:50,
    borderRadius:12,
    alignItems:"center",
  },
  image:{
    marginLeft:20,
    width:22,
    height:22,
    resizeMode:'contain',
    opacity: 0.7
  },
  input:{
    padding: 10,
    width:'100%',
    fontSize:16
  }
});
export default SearchBar;
