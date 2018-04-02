import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TextInput } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import {emailRegistrationChanged, passwordRegistrationChanged, firstNameChanged, lastNameChanged,
    passwordConfirmRegistrationChanged, registrationNextStage} from '../actions';

class RegistrationForm extends Component {

    onEmailChange(text) {
        this.props.emailRegistrationChanged(text);
    }
    onPasswordChanged(text){
        this.props.passwordRegistrationChanged(text);
    }
    onConfirmPasswordChanged(text){
        this.props.passwordConfirmRegistrationChanged(text);
    }
    onFirstNameChange(text) {
        this.props.firstNameChanged(text);
    }
    onLastNameChanged(text){
        this.props.lastNameChanged(text);
    }

    onNextPress(){
        const { firstName, lastName, email, password } = this.props;
        this.props.registrationNextStage({ firstName, lastName, email, password });
    }

    render() {
        console.log(this.props.firstName,this.props.lastName,this.props.email,this.props.password,);
        const {inputField, topTextContainer, topText} = styles;
        return(
            <View>
                <View style={topTextContainer}>
                    <Text style={topText}>
                        Become a fitness champion - Sign up for free
                    </Text>
                </View>
                <CardSection>
                    <TextInput
                        value={this.props.firstName}
                        onChangeText={this.onFirstNameChange.bind(this)}
                        autoCorrect={false}
                        style={inputField}
                        placeholder="First Name"
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        value={this.props.lastName}
                        onChangeText={this.onLastNameChanged.bind(this)}
                        autoCorrect={false}
                        style={inputField}
                        placeholder="Last Name"
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                        autoCorrect={false}
                        style={inputField}
                        placeholder="Email"
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        value={this.props.password}
                        onChangeText={this.onPasswordChanged.bind(this)}
                        autoCorrect={false}
                        style={inputField}
                        placeholder="Password"
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        value={this.props.confirmPassword}
                        onChangeText={this.onConfirmPasswordChanged.bind(this)}
                        autoCorrect={false}
                        style={inputField}
                        placeholder="Confirm Password"
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onNextPress.bind(this)}>
                        Next
                    </Button>
                </CardSection>
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
    const { firstName, lastName, email, password, confirmPassword } = state.registration;

    return { firstName, lastName, email, password, confirmPassword };
};

export default connect(mapStateToProp, {
    emailRegistrationChanged, passwordRegistrationChanged, firstNameChanged, lastNameChanged,
    passwordConfirmRegistrationChanged, registrationNextStage
})(RegistrationForm);