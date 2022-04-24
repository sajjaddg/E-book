import React from "react";
import {View,StyleSheet,Text,Image} from "react-native";
import {useFonts} from "expo-font";
import SearchBar from "../component/searchBar";

const Home = () => {
    const [loaded] = useFonts({
        LandDisc: require('../../assets/fonts/CormorantGaramond-SemiBold.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Image
                            source={require('../../assets/menuIcon.png')}
                            style={{width:35,height:35, resizeMode: 'contain'}}
                        />
                    </View>
                    <View style={{ flexDirection:"row" , alignItems:'center'}}>
                        <Text style={{fontFamily:'LandDisc',fontSize:30,textAlign:'center',color:'#FF5432'}}>
                            Book
                        </Text>
                        <Text style={{marginLeft:3,fontFamily:'LandDisc',fontSize:30,textAlign:'center'}}>
                            Buys
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/notification.png')}
                            style={{width:35,height:35, resizeMode: 'contain'}}
                        />
                    </View>
                </View>
                <View style={styles.searchBar}>
                    <SearchBar/>
                </View>
                <View style={styles.activtiesBox}>

                </View>
                <View style={styles.contain}>

                </View>
                <View style={styles.lastReleasesBox}>

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
        marginTop:35,
        marginHorizontal:20,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    searchBar:{
        marginTop:15,
    }
});
export default Home;
