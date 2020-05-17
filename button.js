import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';

export default function AdvButton({ text, onPress, icon, iconName,}){
    return (
        <TouchableOpacity onPress={onPress} icon={icon}>
            {text=='Return to Home'? 
            <View style={{borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                {text=='Return to Home'? <AntDesign name={iconName} size={25} color='#000'/>:null}
                {text=='Return to Home'? <Text style={{color: 'black',
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'best-font',
        marginLeft: '4%',
        marginRight: '-2%'}}>
                    { text }
                </Text>:<Text style={styles.buttonText}>
                    { text }
                </Text>}
                </View>
            </View>:<View style={styles.button}>
                <View style={{flexDirection:'row'}}>
                {text=='Return to Home'? <AntDesign name={iconName} size={20} color='#000'/>:null}
                {text=='Return to Home'? <Text style={{color: 'black',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'best-font',
        marginLeft: '4%',
        marginRight: '-2%'}}>
                    { text }
                </Text>:<Text style={styles.buttonText}>
                    { text }
                </Text>}
                </View>
            </View>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#74b53d',
    },
    buttonText:{
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'best-font'
    }
})
