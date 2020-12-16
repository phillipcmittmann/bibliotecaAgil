import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const ButtonHome = (props) => {
    return (
        <TouchableOpacity
            style={ styles.buttonContainer }
            onPress={null}
        >
            <Text
                style={ styles.textStyle }
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 10,
        width: 200,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 20,
        marginVertical: 20
    }
});

export default ButtonHome;