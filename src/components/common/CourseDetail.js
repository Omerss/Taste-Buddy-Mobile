import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import {CardSection} from './CardSection';
import Button from './Button';


const CourseDetail = ({ courseData }) => {
    const { title, description, price } = courseData;
    const { thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle } = styles;

    return (
        <CardSection>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{description}</Text>
                <Text>{price}</Text>
            </View>
        </CardSection>
    );
};

const styles = {
    headerContentStyle: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default CourseDetail;
