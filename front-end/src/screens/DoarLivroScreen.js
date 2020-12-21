import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Alert,
    Text
} from 'react-native';

import Button from '../components/Button';
import { DOAR_LIVRO } from '../common/Urls';

import CheckBox from '@react-native-community/checkbox';

import axios from 'axios'; 

const DoarLivroScreen = () => {
    const [livro, setLivro] = useState({
        titulo: '',
        autor: '',
        ano: '',
        emprestadoPara: null
    });

    const [livroDisponivel, setLivroDisponivel] = useState(true)

    const doarLivro = () => {
        axios.post(DOAR_LIVRO, {
            livro: livro
        })
        .then(function(response) {
            Alert.alert(
                '',
                `${response}`,
                [
                    {
                        text: 'Ok'
                    }
                ]
            )
        })
        .catch(function(error) {
            Alert.alert(
                'Erro',
                `${error.message}`,
                [
                    {
                        text: "Ok"
                    }
                ]
            )
        })
    }

    return (
        <View style={ styles.container }>
            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setLivro({ ...livro, titulo: text })
                }
                value={ livro.titulo }
                placeholder='Título'
            />

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setLivro({ ...livro, autor: text })
                }
                value={ livro.autor }
                placeholder='Autor'
            />

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setLivro({ ...livro, ano: text })
                }
                value={ livro.ano }
                placeholder='Ano'
                keyboardType='numeric'
            />

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => {
                        setLivro({ ...livro, emprestadoPara: text });
                        setLivroDisponivel(false);
                    }
                }
                value={ livro.emprestadoPara }
                placeholder='Emprestado para'
            />

            <View style={ styles.disponivelContainer }>
                <Text style={ styles.disponivelText }>
                    Disponivel
                </Text>
                
                <CheckBox
                    disabled={false}
                    value={livroDisponivel}
                    onValueChange={(newValue) => setLivroDisponivel(newValue)}
                    disabled={
                        livro.emprestadoPara === null ? false :
                        livro.emprestadoPara === '' ? false : true
                    }
                />
            </View>

            <Button
                titulo='Confirmar'
                onPress={doarLivro}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4f63d1'
    },
    inputContainer: {
        marginVertical: 15,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
        fontSize: 20
    },
    disponivelContainer: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    disponivelText: {
        fontSize: 20,
        color: 'white',
        marginRight: 10,
        paddingBottom: 5
    }
});

export default DoarLivroScreen;