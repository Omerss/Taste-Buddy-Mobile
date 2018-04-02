import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import ActivityDetail from './ActivityDetail';
import {connect} from "react-redux";
import {ActivitiesQueryURL} from "../../communication/HttpCommunication";

class ActivityList extends Component {
    state = { activities: [] }; // The default list of albums we start with

    componentWillMount() {
        let requestData = {};
        if (this.props.queryCategory !== ""){
            requestData = {...requestData, activity_type: this.props.queryCategory}
        }

        axios.post(ActivitiesQueryURL, requestData)
            .then( (response) =>{
                console.log(response);
                this.setState({ activities: response.data.res });
            })
            .catch(  (error) => {
                console.log(error);
                this.setState({ activities: [] });
            });

    }

    renderActivities() {
        return this.state.activities.map(activity =>
            <ActivityDetail key={activity.id} activity={activity} />);
    }

    render() {
        return (
            <View style={styles.scrollStyle}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.renderActivities()}
                </ScrollView>
            </View>


        );
    }
}

const styles = {
    scrollStyle: {
        flex:1,
        height:100
    }
};

const mapStateToProp = state => {
    //console.log(state.auth);
    const { queryLocation, queryDatetime, queryCategory } = state.queryActivity;

    return {queryLocation, queryDatetime, queryCategory };
};

export default connect(mapStateToProp)(ActivityList);