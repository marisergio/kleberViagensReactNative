import { useState } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { style } from "./styles";

import MyInputText from "../../componentes/inputText";


export default function Home() {

    const [kmIda, setKmIda] = useState('');
    const [kmVolta, setKmVolta] = useState('');
    const [valorKm, setValorKm] = useState('');
    const [fator, setFator] = useState('');
    const [total, setTotal] = useState(0);

    function calcularValorTotal() {
        let valorTotal = (parseInt(kmIda) + parseInt(kmVolta)) * parseInt(valorKm) * parseInt(fator);
        setTotal(valorTotal);
        setKmIda('');
        setKmVolta('');
        setValorKm('');
        setFator('');
    }

    return (
        <View style={style.caixa}>
            <Text style={style.textoTitulo}>KLEBERviagens</Text>
            <MyInputText place="Distância da ida em KM" value={kmIda} setValue={setKmIda} />
            <MyInputText place="Distância da volta em KM" value={kmVolta} setValue={setKmVolta} />
            <MyInputText place="Valor do KM em R$" value={valorKm} setValue={setValorKm} />
            <MyInputText place="Fator de equidade" value={fator} setValue={setFator} />
            <TouchableOpacity style={style.botao} onPress={calcularValorTotal}>
                <Text style={style.textoBotao}>CALCULAR</Text>
            </TouchableOpacity>
            <Text style={style.textoValorTotal}>R$ {total}</Text>
        </View>
    )
}