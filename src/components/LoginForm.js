import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, registerUser, loginUserGoogle } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onLoginPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    onGooglePress() {
        this.props.loginUserGoogle( );
    }

    onRegistrationPress() {
        console.log("move");
        this.props.registerUser();
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

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }else{
            return(
                <Button onPress={this.onLoginPress.bind(this)}>
                    Login
                </Button>
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
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <CardSection>
                    <Button onPress={this.onGooglePress.bind(this)}>
                        Login with Google
                    </Button>
                </CardSection>
                {/*<CardSection>*/}
                    {/*<Button onPress={()=>{}}>*/}
                        {/*Login with Facebook*/}
                    {/*</Button>*/}
                {/*</CardSection>*/}
                <CardSection>
                    <Button onPress={this.onRegistrationPress.bind(this)}>
                        Registration
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
    }
};

const mapStateToProp = state => {
    const { email, password, error, loading } = state.auth;

    return {email, password, error, loading };
};

export default connect(mapStateToProp, {
    emailChanged, passwordChanged, loginUser, registerUser, loginUserGoogle
})(LoginForm);