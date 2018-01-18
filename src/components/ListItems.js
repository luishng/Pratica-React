import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import axios from 'axios';

import ItensVertical from './ItemsVertical';
import ItensHorizontal from './ItemsHorizontal';
import NavegationBar from './NavegationBar';

export default class ListItems extends Component {
    
    constructor(props) {
        super(props);

        this.state = { itemsVertical: [], itemsHorizontal: [] }
    }

    componentWillMount() {
        axios.get('http://localhost:8081/src/data/restaurants.json')
        .then(response => { this.setState({ itemsVertical: response.data.list }) })
        .catch(() =>{ console.log('Erro ao recuperar os dados'); });

        axios.get('http://localhost:8081/src/data/restaurants.json')
        .then(response => { this.setState({ itemsHorizontal: response.data.categories }) })
        .catch(() =>{ console.log('Erro ao recuperar os dados'); });
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor= '#D06600'/>
                <NavegationBar/>
                <ScrollView horizontal style={{marginLeft: 30}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        { this.state.itemsHorizontal.map(item => (<ItensHorizontal key={item.name} item={item}/>)) }
                    </View>
                </ScrollView>
                <ScrollView>
                    <View>
                        { this.state.itemsVertical.map(item => (<ItensVertical key={item.name} item={item}/>)) }
                    </View>
                </ScrollView>
            </View>
        );
    }
}