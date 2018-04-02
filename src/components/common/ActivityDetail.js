import React, {Component} from 'react';
import { Text, View, Image, Linking, Button, TouchableWithoutFeedback} from 'react-native';
import {HorizontalCard }from './HorizontalCard';
import {CardSection} from './CardSection';
import {connect} from "react-redux";
import {activitySelected} from "../../actions";


class ActivityDetail extends Component {

    onPress() {
        this.props.activitySelected(this.props.activity);
    }

    render(){
        const { activity_name, price, rating } = this.props.activity;
        const { thumbnailStyle,
            headerContentStyle,
            buttonContainerStyle} = styles;
        return (
            <HorizontalCard>
                <CardSection>
                    <TouchableWithoutFeedback onPress={this.onPress.bind(this)} >
                        <View>
                            <Image
                                style={thumbnailStyle}
                                source={require("../../assets/running.jpeg")}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </CardSection>
                <CardSection>
                    <View style={headerContentStyle}>
                        <Text>{activity_name}</Text>
                        <Text>{price}</Text>
                        <Text>{rating}</Text>
                    </View>
                </CardSection>
                <View style={buttonContainerStyle}>
                    <Button onPress={() => {}} title="book"
                            containerStyle={{padding:10, height:45, borderRadius:4, backgroundColor: 'white'}}
                    />
                </View>
            </HorizontalCard>
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
    thumbnailStyle: {
        height: 150,
        width: 150
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,

    },
};

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, {activitySelected})(ActivityDetail);

