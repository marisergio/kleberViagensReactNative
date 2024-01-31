import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    caixa: {
        backgroundColor: '#B0E0E6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    botao: {
        backgroundColor: '#00BFFF',
        padding: 10,
        fontSize: 16,
        width: '100%',
        borderRadius: 5,
        marginTop: 20
    },

    textoBotao: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0072ab',
        fontSize: 16
    },

    textoValorTotal: {
        marginTop: 70,
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2596cb'
    },

    textoTitulo: {
        marginBottom: 70,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2596cb'
    },

    campo: {
        backgroundColor: '#E0FFFF',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        color: '#4682B4',
        width: '100%',
        marginBottom: 10
    }
})