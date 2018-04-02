import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-vector-icons/MaterialIcons';

const ImageText = ({ iconName, iconSize=30, textSize=20, children }) => {
    return (
        <View style={styles.containerStyle}>
            <Button size={iconSize}>{iconName}</Button>
            <Text style={{fontSize:textSize, justifyContent:'center'}}>
                {children}
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        justifyContent:'center',
        alignItems: 'center'
    }
};

export {ImageText} ;
