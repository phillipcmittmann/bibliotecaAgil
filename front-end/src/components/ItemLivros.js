import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const ItemLivros = (props) => {
    return (
        <TouchableOpacity 
            style={[ styles.container, { backgroundColor: props.idSelecionado === props.index ? 'yellow' : 'white' } ]}
            onPress={ () => props.onPress(props.index) }    
        >
            <Text style={ styles.text }>
                { props.item.titulo }
            </Text>

            <Text style={ styles.textValues }>
                Autor: { props.item.autor }
            </Text>

            <Text style={ styles.textValues }>
                Ano: { props.item.ano }
            </Text>

            <Text style={ styles.textValues }>
                Status: { props.item.disponivel === 0 ? 'Retirado' : 'Disponivel' }
            </Text>

            { 
                props.item.disponivel === 1 ? 
                (
                    <Text style={ styles.textValues }>
                        Emprestado para: { props.item.emprestadoPara }
                    </Text>
                )
                : <View />
            }
        </TouchableOpacity>
    )
}

const styles = new StyleSheet.create({
    container: {
        marginHorizontal: 40,
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        fontSize: 25
    },
    textValues: {
        fontSize: 20,
        color: 'grey',
        marginLeft: 10
    }
});

export default ItemLivros;