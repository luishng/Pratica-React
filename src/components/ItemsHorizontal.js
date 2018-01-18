import React, { Component } from 'react';
import { Text, Image, FlatList, View, StyleSheet  } from 'react-native';

export default class ItemsHorizontal extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Image style={styles.photo} source={{uri: this.props.item.image}}/>
                <Text style={styles.txtPhoto}>{this.props.item.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1
    },
    photo: {
        width: 100,
        height: 100,
        marginTop: 10,
        marginBottom: 30,
        marginRight: 5,
        shadowOffset: { width: 2, height: 2}
    },
    txtPhoto: {
        position: 'absolute',
        color: '#fff'
    }
})