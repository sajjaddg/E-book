import React from "react";
import {View,StyleSheet,Text , Image} from "react-native";
import { useFonts } from 'expo-font';
import SubmitButton from "../component/submitButton";
const Landing = () => {
    const [loaded] = useFonts({
        LandTitle: require('../../assets/fonts/LandTitle.ttf'),
        LandDisc: require('../../assets/fonts/CormorantGaramond-SemiBold.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return(
        <View style={styles.body}>
           <View style={styles.container}>
               <View style={styles.imageBox}>
                   <View>
                       <Image
                           source={require('../../assets/reading.jpg')}
                           style={{width:500,height:250, resizeMode: 'contain'}}
                       />
                   </View>
               </View>
               <View style={styles.textBox}>
                    <View>
                        <Text style={{fontFamily:'LandTitle',fontSize:30,textAlign:'center'}}>
                            {'Wear the old coat\nand buy the new book.'}
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontFamily:'LandDisc',fontSize:18,textAlign:'center'}}>
                            {'chose from over a million ebooks from this app\nor enjoy popular magazines and newspapers'}
                        </Text>
                    </View>
               </View>
               <View style={styles.buttonBox}>
                    <SubmitButton
                        label={'START FREE TRIAL'}
                        buttonStyles={{backgroundColor:'#FF512F'}}
                        textStyle={{color:"#fff",fontSize:16}}
                    />
                    <SubmitButton
                        label={'LATER'}
                        buttonStyles={{borderColor:'#FF512F',borderWidth:1,marginTop:16}}
                        textStyle={{fontSize:16}}
                    />
               </View>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    container:{
        flex:1,
        marginHorizontal:20,
    },
    imageBox:{
        flex:2,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    textBox:{
        flex:1,
        marginTop:8,
        justifyContent:"space-around",
        alignItems:"center",
    },
    buttonBox:{
        flex:1,
        paddingTop:17,
        justifyContent:"center",
    },
});
export default Landing;
