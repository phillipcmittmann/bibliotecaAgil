import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
    return (
        <View
            style={ styles.container }
        >
            <Button
                titulo='Retirar livro'
                onPress={ () => navigation.navigate('RetirarLivro') }
            />

            <Button
                titulo='Devolver livro'
            />

            <Button
                titulo='Doar livro'
                onPress={ () => navigation.navigate('DoarLivro') }
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