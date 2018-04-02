import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Button } from './common';
import { ScanRestaurant } from '../actions';

class ScanRestaurantFrom extends Component {
    onNextPress(){
        this.props.ScanRestaurant({ });
    }

    render() {
        return(
            <View style={{flex:1}}>
                <Button onPress={this.onNextPress.bind(this)}>
                    Next
                </Button>
            </View>
        );
    }
}

const styles = {
    inputField: {
        flex:1
    },
    topText: {
        fontSize: 30,
        textAlign: 'center'
    },
    topTextContainer: {
        height: 120
    }
};

const mapStateToProp = state => {
    const { email, password, error, loading } = state.auth;

    return {email, password, error, loading };
};

export default connect(mapStateToProp, {ScanRestaurant})(ScanRestaurantFrom);