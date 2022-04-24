import React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";

const SubmitButton = (props) => {
  return(
      <TouchableOpacity style={[styles.container,props.buttonStyles]} {...props}>
          <Text style={props.textStyle}>
              {props.label}
          </Text>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        height:55
    }
});
export default SubmitButton;
