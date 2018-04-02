import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import {locationChanged, datetimeChanged, categoryChanged, searchActivity } from '../actions';

class SearchActivity extends Component {

    onLocationChange(text) {
        this.props.locationChanged(text);
    }
    onTimeAndDate(text){
        this.props.datetimeChanged(text);
    }
    onCategories(text){
        this.props.categoryChanged(text);
    }

    onButtonPress() {
        const { location, datetime, category } = this.props;
        this.props.searchActivity( location, datetime, category );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Image
                        source={require('../assets/flexity_logo.jpg')}
                        style={styles.imageStyle}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Location"
                        placeholder="Location"
                        onChangeText={this.onLocationChange.bind(this)}
                        value={this.props.location}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Datetime"
                        placeholder="Time & Date"
                        onChangeText={this.onTimeAndDate.bind(this)}
                        value={this.props.datetime}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="categories"
                        placeholder="Categories"
                        onChangeText={this.onCategories.bind(this)}
                        value={this.props.category}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Search
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    },
    imageStyle: {
        height: 100,
        flex:1
    }
};

const mapStateToProp = state => {
    //console.log(state.auth);
    const { location, datetime, category } = state.queryActivity;

    return {location, datetime, category };
};

export default connect(mapStateToProp, {locationChanged, datetimeChanged, categoryChanged, searchActivity})(SearchActivity);