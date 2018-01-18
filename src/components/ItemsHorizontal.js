import React, { Component } from 'react';
import { Text, Image, FlatList, View, StyleSheet  } from 'react-native';

export default class ItemsHorizontal extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Image source={{uri: this.props.item.image}} style={styles.photo} />
                <Text style={styles.txtPhoto}>{this.props.item.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        alignItems: 'center'
    },
    photo: {
        width: 100,
        height: 100,
        marginTop: 10,
        marginBottom: 30,
        marginRight: 5
    },
    txtPhoto: {
        position: 'absolute',
        color: '#fff',
        bottom: 1,
        fontFamily: 'Roboto'
    }
})