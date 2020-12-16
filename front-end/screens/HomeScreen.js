import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import ButtonHome from '../components/ButtonHome';

const HomeScreen = () => {
    return (
        <View
            style={ styles.container }
        >
            <ButtonHome
                title='Retirar livro'
            />

            <ButtonHome
                title='Devolver livro'
            />

            <ButtonHome
                title='Doar livro'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4f63d1'
    }
});

export default HomeScreen;