import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    FlatList,
    TextInput
} from 'react-native';

import Button from '../components/Button';
import { RETIRAR_LIVRO, LIVROS_DISPONIVEIS } from '../common/Urls';
import ItemLivros from '../components/ItemLivros';

import axios from 'axios'; 

const RetirarLivro = () => {
    const [livros, setLivros] = useState([
        {
            titulo: 'Como fazer sentido e bater o martelo',
            autor: 'Alexandro Aolchique',
            ano: '2017',
            emprestado_para: null,
            disponivel: 1
        },
        {
            titulo: 'Código Limpo',
            autor: 'Tio Bob',
            ano: '2001',
            emprestado_para: null,
            disponivel: 1
        },
        {
            titulo: 'Basquete 101',
            autor: 'Hortência Marcari',
            ano: '2010',
            emprestado_para: null,
            disponivel: 1
        }
    ]);

    const [idSelecionado, setIdSelecionado] = useState(null);

    const [emprestadoPara, setEmprestadoPara] = useState(null);

    // Busca no banco de dados os livros disponveis para retirada ao montar o componente.
    // Descomentar em caso de funcionamento do back-end

    // useEffect(() => {
    //     axios.get(LIVROS_DISPONIVEIS)
    //     .then(function(response) {
    //         setLivros(oldLivros => [...oldLivros, response]);
    //     })
    //     .catch(function(error) {
    //         Alert.alert(
    //             'Erro',
    //             `${error.message}`,
    //             [
    //                 {
    //                     text: "Ok"
    //                 }
    //             ]
    //         )
    //     })
    // });

    // Retira o livro de disponibilidade acessando o banco de dados.
    // Descomentar em caso de funcionamento do back-end

    // const retirarLivro = () => {
    //     axios.post(RETIRAR_LIVRO, {
    //         id: idSelecionado,
    //         emprestadoPara: emprestadoPara
    //     })
    //     .then(function(response) {
    //         Alert.alert(
    //             '',
    //             `${response}`,
    //             [
    //                 {
    //                     text: 'Ok'
    //                 }
    //             ]
    //         )
    //     })
    //     .catch(function(error) {
    //         Alert.alert(
    //             'Erro',
    //             `${error.message}`,
    //             [
    //                 {
    //                     text: "Ok"
    //                 }
    //             ]
    //         )
    //     })
    // }

    // Comentar o metodo abaixo em caso de funcionamento do back-end.

    const retirarLivro = () => {
        setLivros(newLivros => newLivros.filter((livro, index) => index !== idSelecionado));
    }

    const changeIdSelecionado = (index) => {
        setIdSelecionado(index);
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.containerList }>
                <FlatList
                    data={ livros }
                    renderItem={ ({item, index}) => {
                        return (
                            <ItemLivros
                                item={ item }
                                index={ index }
                                idSelecionado={ idSelecionado }
                                onPress={ changeIdSelecionado }
                            />
                        )
                    }}
                    style={ styles.list }
                />
            </View>

            <TextInput
                style={ styles.inputContainer }
                onChangeText={ text => setEmprestadoPara(text) }
                value={ emprestadoPara }
                placeholder='Emprestado para'
            />

            <Button
                titulo="Retirar livro"
                onPress={retirarLivro}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4f63d1'
    },
    containerList: {
        height: '70%',
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    list: {
        marginTop: 10,
    },
    inputContainer: {
        marginVertical: 15,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
        fontSize: 20
    }
});

export default RetirarLivro;