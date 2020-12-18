import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            style={ styles.buttonContainer }
            onPress={ props.onPress }
        >
            <Text
                style={ styles.textStyle }
            >
                {props.titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 15,
        width: 200,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 20,
        marginVertical: 20
    }
});

export default Button;