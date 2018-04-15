import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Button } from './common';
import { ScanRestaurant } from '../actions';

class ScanRestaurantForm extends Component {
    onNextPress(){
        this.props.ScanRestaurant();
    }

    render() {
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <View style={styles.barcodeContainer}>
                    <Button onPress={this.onNextPress.bind(this)}>
                        Scan
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    barcodeContainer: {
        height:200,
        width:200,
        justifyContent:'center'
    }
};

const mapStateToProp = state => {
    const { email, password, error, loading } = state.auth;

    return {email, password, error, loading };
};

export default connect(mapStateToProp, {ScanRestaurant})(ScanRestaurantForm);