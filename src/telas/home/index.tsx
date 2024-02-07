import { useState, useEffect } from "react";

import { View, TouchableOpacity, Text, Switch } from "react-native";

import { style } from "./styles";

import MyInputText from "../../componentes/inputText";

import { Header } from "../../componentes/header";

import { Picker } from "@react-native-picker/picker";

import Slider from "@react-native-community/slider";


export default function Home() {

    const [kmIda, setKmIda] = useState('');
    const [kmVolta, setKmVolta] = useState('');
    const [valorKm, setValorKm] = useState('');
    const [fator, setFator] = useState(1);
    const [isIdaVolta, setIsIdaVolta] = useState(null);
    const [isIgualIdaVolta, setIsIgualIdaVolta] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Esta função será executada sempre que isIgualIdaVolta for atualizado
        setKmVolta(isIgualIdaVolta ? kmIda : '');
    }, [isIgualIdaVolta, kmIda]);

    function calcularValorTotal() {
        let valorTotal = (parseInt(kmIda) + parseInt(kmVolta)) * parseInt(valorKm) * fator;
        setTotal(valorTotal);
        setKmIda('');
        setKmVolta('');
        setValorKm('');
        setFator(1);
    }

    function handlerIsIdaVolta(value) {
        setIsIdaVolta(value == "Sim" ? true : false);
    }

    function handlerIsIgualIdaVolta(value) {
        setIsIgualIdaVolta(value);
        setKmVolta(kmIda);
    }

    return (
        <View style={style.caixa}>
            <Header />
            <Text style={style.textoTitulo}>VIAGENS SEGURAS</Text>
            <MyInputText place="Distância da ida em KM" value={kmIda} setValue={setKmIda} />
            <Picker
                style={style.campo}
                selectedValue={isIdaVolta}
                onValueChange={(itemValue, itemIndex) => handlerIsIdaVolta(itemValue)}>
                <Picker.Item label="Viagem de ida e volta" value={null} />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
            </Picker>
            {isIdaVolta &&
                <View style={{ width: '100%' }}>
                    <Text style={{ marginTop: 10, width: '100%' }}>Distâncias iguais?</Text>
                    <Switch style={{ marginBottom: 10 }} value={isIgualIdaVolta} onValueChange={(value) => {
                        setIsIgualIdaVolta(value);
                        setKmVolta(isIgualIdaVolta ? kmIda : '');
                    }} />
                    <MyInputText place="Distância da volta em KM" value={kmVolta} setValue={setKmVolta} />
                </View>

            }

            <Text style={{ marginTop: 10 }}>Fator: {fator.toFixed(1)}</Text>
            <Slider style={{ marginTop: 10, marginBottom: 30, width: '100%' }}
                minimumValue={0.5}
                maximumValue={4}
                value={fator}
                step={0.5}
                onValueChange={(value) => setFator(value)}

            />

            <MyInputText place="Valor do KM em R$" value={valorKm} setValue={setValorKm} />


            <TouchableOpacity style={style.botao} onPress={calcularValorTotal}>
                <Text style={style.textoBotao}>CALCULAR</Text>
            </TouchableOpacity>
            <Text style={style.textoValorTotal}>R$ {total}</Text>
        </View>
    )
}