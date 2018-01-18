import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Gradient from 'react-native-linear-gradient'

export default class NavegationBar extends Component {
    render () {
        return (
            <View style={{shadowOffset: { width: 2, height: 0}}}>
                <Gradient colors={['#D06600', '#E69A09']} style={styles.bar}>
                    <Icon name="menu" size={35} color="#fff"/>
                    <Text style={styles.txtText}> Restaurantes </Text>
                    <Icon name="settings" size={35} color="#fff"/>
                </Gradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#D06600',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    txtText: {
        fontSize: 25,
        color: '#fff',
        flex: 1,
        textAlign: 'center'
    }
})