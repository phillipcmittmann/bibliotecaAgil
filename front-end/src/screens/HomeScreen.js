import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.imagemContainer }>
                <Image
                    source={ require('../assets/img/Livro.png') }
                    style={ styles.imagemStyle }
                />

                <Text style={ styles.textStyle }>
                    Biblioteca Ágil
                </Text>
            </View>

            <Button
                titulo='Retirar livro'
                onPress={ () => navigation.navigate('RetirarLivro') }
            />

            <Button
                titulo='Devolver livro'
                onPress={ () => navigation.navigate('DevolverLivro') }
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
    },
    imagemContainer: {
        marginBottom: '15%',
        alignItems: 'center'
    },
    imagemStyle: {
        marginBottom: 20
    },
    textStyle: {
        fontSize: 40,
        color: 'white'
    }
});

export default HomeScreen;