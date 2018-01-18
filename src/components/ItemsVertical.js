import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default class ItemsVertical extends Component {
    render() {
        return (
            <View style={styles.principalView}>
                <View style={styles.itemMainView}>
                    <View style={styles.photoView}>
                        <Image style={styles.photo} source={{uri: this.props.item.image}}/>
                    </View>

                    <View style={styles.itemView}>
                        <View>
                            <Text style={styles.txtTitle}>{this.props.item.name}</Text>
                        </View>

                        <View style={styles.locationMainView}>
                            <View style={styles.locationView}>
                                <Text>{this.props.item.type}</Text>
                                <Text>{this.props.item.distance}</Text>
                            </View>

                            <View style={styles.locationView}>
                                <Text>{this.props.item.price}</Text>
                                <Text>{this.props.item.neigborhood}</Text>
                            </View>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.txtRating}>{this.props.item.rating}</Text>
                    </View>
                </View>

                <View style={styles.commentView}>
                    <Text style={styles.txtComment}>"{this.props.item.comment}"</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemMainView: {
        flexDirection: 'row',
        flex: 4
    },
    photoView: {
        flex: 5,
        margin:10
    },
    itemView: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 7
    },
    locationMainView: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    locationView: {
        flex: 2
    },
    principalView: {
        borderWidth: 0.5,
        borderColor: '#A0A0A0',
    },
    commentView: {
        marginLeft: 10,
        flex: 1
    },
    photo: {
        height: 90, 
        width: 125
    },
    txtTitle: {
        fontSize: 18,
        color: '#D06600'
    },
    txtRating: {
        fontSize: 18,
        color: '#fff',
        backgroundColor: '#3CCD36',
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 5
    },
    txtComment: {
        justifyContent: 'center',
        flex: 1
    }
})