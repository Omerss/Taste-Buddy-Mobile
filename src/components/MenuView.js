import React, {Component} from 'react';

import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import { Card, CardSection, Input, Button, Badge } from './common';

import Carousel from 'react-native-snap-carousel';
import SliderEntry from "./common/SliderEntry";
import {connect} from "react-redux";
import {updateMenuItems, getMenuCategories} from "../actions";
import CourseDetail from "./common/CourseDetail";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const firstItem = 0;

class MenuView extends Component {

    componentWillMount(){
        //this.props.getMenuCategories();
        // console.log('componentWillMount', firstItem);
        this.selectCategory(firstItem);
    }

    _renderItem ({item, index}) {
        // console.log("rendering category", item, index);
        return <SliderEntry
            data={{title: item, index}}
        />;
    }

    selectCategory(index){
        // console.log('selectCategory', index);
        this.setState({ slider1ActiveSlide: index });
        this.props.updateMenuItems(index);
    }

    renderMenuBar() {
        console.log("renderMenuBar", this.props.menuCategories);
        return (
            <View style={{height:60}}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.props.menuCategories}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    loop={true}
                    loopClonesPerSide={2}
                    onSnapToItem={(index) => this.selectCategory(index) }
                    lockScrollWhileSnapping={true}
                    firstItem={firstItem}
                />
            </View>
  )
    }

    renderMenuItems() {
        // console.log('renderMenuItems', this.state, this.props);
        return this.props.userMenu.map(courseData =>
            <CourseDetail courseData={courseData} key={courseData.title}/>);
    }

    render() {
        return(
            <View style={{flex:1}}>
                {this.renderMenuBar()}
                {/*<Text>*/}
                    {/*{this.state.slider1ActiveSlide}*/}
                {/*</Text>*/}
                <ScrollView>
                    {this.renderMenuItems()}
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    slide: {
        paddingVertical: 10,
        width: 350,
        height: 50,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#fff7fa',
        justifyContent:'center',
        alignItems: 'center'
    },
    title:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.5
    }
});

const mapStateToProp = state => {
    const { categories, categoryMenu, overallMenu } = state.restaurantData;

    return { userMenu: categoryMenu, menuCategories: categories };
};

export default connect(mapStateToProp, {updateMenuItems, getMenuCategories})(MenuView);
