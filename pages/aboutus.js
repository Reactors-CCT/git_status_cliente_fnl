import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Aboutus({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.team}>Developed by:</Text>
            <Text style={styles.small}>(the wonderful students)</Text>
            <Text>Alan Gabriel Arango Monroy</Text>
            <Text >Christian Jesus Farfan Colin</Text>
            <Text>Claudia Luiza Gonzalez Ferrufino</Text>
            <Text>Jackson Ferreira dos santos</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02b2e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    team: {
        color: '#ffffff',
        fontFamily: "notoserif",
        fontSize: 40,
        fontWeight: "bold",
    },
    small: {
        marginBottom:10,
        fontSize:7
    }
});