import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default class ItemsVertical extends Component {

    render() {
        return (
            <View style={styles.principal}>
                <View style={styles.item}>
                    <View style={styles.photoView}>
                        <Image style={styles.photo} source={{uri: this.props.item.image}}/>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.txtTitle}>{this.props.item.name}</Text>
                        <Text>{this.props.item.type}</Text>
                        <Text>{this.props.item.price}</Text>
                        <Text>{this.props.item.distance}</Text>
                        <Text>{this.props.item.neigborhood}</Text>
                        <Text>{this.props.item.rating}</Text>
                    </View>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.txtComment}>"{this.props.item.comment}"</Text>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        margin: 10
    },
    principal: {
        borderWidth: 0.5,
        borderColor: '#A0A0A0',
    },
    photoView: {
        shadowOffset: { width: 2, height: 2}
    },
    photo: {
        height: 90, 
        width: 125
    },
    detail: {
        marginLeft: 20,
        flex: 1
    },
    txtTitle: {
        fontSize: 18,
        color: '#D06600',
        marginBottom: 5
    },
    txtComment: {
        justifyContent: 'center',
        flex: 1
    }
})