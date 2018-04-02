import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../../styles/SliderEntry.style';

export default class SliderEntry extends Component {

    render () {
        const { data: { title } } = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={styles.title}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;


        return (
            <View
                activeOpacity={1}
                style={styles.slideInnerContainer}
            >
                <View style={styles.textContainer}>
                    { uppercaseTitle }
                </View>
            </View>
        );
    }
}