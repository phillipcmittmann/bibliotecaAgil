import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';

import Button from '../components/Button';

const DoarLivroScreen = () => {
    const [livro, setLivro] = useState({
        titulo: '',
        autor: '',
        ano: '',
        disponivel: 1,
        emprestadoPara: ''
    });

    return (
        <View
            style={ styles.container }
        >
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
            />

            {/* disponivel */}

            <TextInput
                style={ styles.inputContainer }
                onChangeText={
                    text => setLivro({ ...livro, emprestadoPara: text })
                }
                value={ livro.emprestadoPara }
                placeholder='Emprestado para'
            />

            <Button
                titulo='Confirmar'
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
        width: 200,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
        fontSize: 20
    }
});

export default DoarLivroScreen;