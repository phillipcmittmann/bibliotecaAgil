import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    FlatList,
    TextInput
} from 'react-native';

import Button from '../components/Button';
import { DEVOLVER_LIVRO, LIVROS_DISPONIVEIS, LIVROS_RETIRADOS } from '../common/Urls';
import ItemLivros from '../components/ItemLivros';

import axios from 'axios'; 

const RetirarLivro = () => {
    const [livros, setLivros] = useState([
        {
            titulo: 'Como fazer sentido e bater o martelo',
            autor: 'Alexandro Aolchique',
            ano: '2017',
            emprestadoPara: 'João Carlos',
            disponivel: 0
        },
        {
            titulo: 'Código Limpo',
            autor: 'Tio Bob',
            ano: '2001',
            emprestadoPara: 'Fulano de Tal',
            disponivel: 0
        },
        {
            titulo: 'Basquete 101',
            autor: 'Hortência Marcari',
            ano: '2010',
            emprestadoPara: 'Maria Josefina',
            disponivel: 0
        }
    ]);

    const [idSelecionado, setIdSelecionado] = useState(null);

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

    // const devolverLivro = () => {
    //     axios.post(DEVOLVER_LIVRO, {
    //         id: idSelecionado
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
    //         );

    //         ;(async function() {
    //             axios.get(LIVROS_RETIRADOS)
    //             .then(function(response) {
    //                 Alert.alert(
    //                     '',
    //                     `${response}`,
    //                     [
    //                         {
    //                             text: 'Ok'
    //                         }
    //                     ]
    //                 );
    //             })
    //             .catch(function(error) {
    //                 Alert.alert(
    //                     'Erro',
    //                     `${error.message}`,
    //                     [
    //                         {
    //                             text: "Ok"
    //                         }
    //                     ]
    //                 )
    //             });
    //         })
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
    //     });
    // };

    // Comentar o metodo abaixo em caso de funcionamento do back-end.

    const devolverLivro = () => {
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
                    keyExtractor={ (item, index) => index.toString() }
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

            <Button
                titulo="Devolver livro"
                onPress={devolverLivro}
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