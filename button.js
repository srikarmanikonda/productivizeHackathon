import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function AdvButton({ text, onPress, icon }){
    return (
        <TouchableOpacity onPress={onPress} icon={icon}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    { text }
                </Text>
            </View>
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
