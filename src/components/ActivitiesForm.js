import React, {Component} from 'react';

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card, CardSection, Input, Button, Badge } from './common';
import axios from 'axios';
import ActivityDetail from './common/ActivityDetail';

import baseURL from "../communication/HttpCommunication"
import  ActivityList  from './common/ActivityList';

class ActivitiesForm extends Component {
    state = { badges: '' }; // The default list of badges we start with

    render() {
        const { userScore } = 5000;
        return(
            <View style={{flex:1}}>
                <Text> hello </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({

});

export default ActivitiesForm;
