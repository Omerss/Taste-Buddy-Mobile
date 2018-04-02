import React, {Component} from 'react';
import { Text, View, Image, Button} from 'react-native';
import {connect} from "react-redux";

import {activitySelected} from "../actions";
import {CardSection, Card, ImageText} from "./common";


class ActivityDataForm extends Component {

    render(){
        const { imageStyle,
            headerContentStyle,
            imageContainerStyle,
            buttonContainerStyle} = styles;
        const { trainer, activity_name, rating } = this.props;
        console.log(this.props);
        return(
            <Card>
                <CardSection>
                    <View style={imageContainerStyle}>
                        <Image
                            style={imageStyle}
                            source={require("../assets/running.jpeg")}
                        />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={headerContentStyle}>
                        <ImageText iconName="accessibility">{trainer}</ImageText>
                        <ImageText iconName="chrome_reader_mode">{activity_name}</ImageText>
                        <ImageText iconName="donut_large">{rating}</ImageText>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={buttonContainerStyle}>
                        <Button onPress={() => {}} title="book"
                                containerStyle={{padding:10, height:45, borderRadius:4, backgroundColor: 'white'}}
                        />
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageContainerStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 200,
        width: 200
    },
    buttonContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,

    },
};

function mapStateToProps(state){
    console.log(state.activityData.activity);
    const { id, activity_name, rating, price, trainer, location,imageLocation } = state.activityData.activity;

    return {id, activity_name, rating, price, trainer, location,imageLocation };
}

export default connect(mapStateToProps, {activitySelected})(ActivityDataForm);
