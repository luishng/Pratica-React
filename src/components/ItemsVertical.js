import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default class ItemsVertical extends Component {
    numberToFloat(number){

        return number.toFixed(1);
    }

    formatColorRating(rating){
        var ratingColor;

        if(rating >= 9)
            ratingColor = '#3CCD36'
        else 
            if (rating >= 8 && rating < 9)
                ratingColor = '#93CD36'
            else
                if (rating >= 7 && rating < 8)
                    ratingColor = '#CBCD36'
                else
                    ratingColor = '#CD6136'

        return ratingColor;
    }

    formatDistance(distance){
        var strDistance = '';

        if(distance >= 1000){
            distance = distance / 1000;
            distance.toFixed(1);
            strDistance = distance + ' km';
        } 
        else
            strDistance = distance + ' m';

        return strDistance;
    }
    
    formatPrice(price){
        var strPrice = '';
        var i = 0;

        for(i = 0; i < price-1; i++){
            strPrice += '$'
        }

        return strPrice;
    }

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
                                <Text>{this.formatDistance(this.props.item.distance)}</Text>
                            </View>

                            <View style={styles.locationView}>
                                <View style={styles.priceView}>
                                    <Text>{this.formatPrice(this.props.item.price)}</Text>
                                    <Text style={{color: '#A0A0A0'}}>$</Text>
                                </View>
                                <Text>{this.props.item.neigborhood}</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.txtRating, 
                            {backgroundColor: this.formatColorRating(this.props.item.rating)}]}>
                            {this.numberToFloat(this.props.item.rating)}</Text>
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
    priceView: {
        flexDirection: 'row'
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
        color: '#D06600',
        fontFamily: 'Roboto'
    },
    txtRating: {
        fontSize: 18,
        color: '#fff',
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 5,
        fontFamily: 'Roboto'
    },
    txtComment: {
        justifyContent: 'center',
        flex: 1,
        fontFamily: 'Roboto'
    }
})