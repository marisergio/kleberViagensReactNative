import { useState, useEffect } from "react";

import { View, TouchableOpacity, Text, FlatList } from "react-native";

import { Feather } from '@expo/vector-icons';

import { style } from "./styles";

import MyInput from "../../componentes/inputText";

import { Header } from "../../componentes/header";

import ViagemService from "../../services/viagem";
import { styles } from "../../componentes/header/styles";


type Viagem = {
    destino: string;
    distancia: string;
    contratante: string;
    valor: string;
}



export default function Viagem({ navigation }) {

    const [viagem, setViagem] = useState<Viagem>({ destino: '', distancia: '', contratante: '', valor: '' });

    const [viagens, setViagens] = useState([]);

    function adicionarViagem() {

        ViagemService.createViagem(viagem).finally(() => navigation.navigate('Viagens'));

        setViagens(prevState => [...prevState, viagem]);
        //viagens.push({ destino, distancia, contratante, valor });

        //  setViagem({ destino: '', distancia: '', contratante: '', valor: '' })
    }

    function removerViagem(index: number) {

        const updateViagens2 = [...viagens];
        updateViagens2.splice(index, 1)


        // const updateViagens =  viagens.filter((v:Viagem)=>v.contratante!=key);

        setViagens(updateViagens2);

    }

    function handleChange(key: string, value: string) {

        setViagem({ ...viagem, [key]: value });

    }


    return (
        <View style={style.caixa}>
            <Header />
            <Text style={style.textoTitulo}>CADASTRAR VIAGEM</Text>
            <MyInput place="Destino" value={viagem.destino} setValue={(text) => handleChange('destino', text)} />
            <MyInput place="Distância" value={viagem.distancia} setValue={(text) => handleChange('distancia', text)} />
            <MyInput place="Contratante" value={viagem.contratante} setValue={(text) => handleChange('contratante', text)} />
            <MyInput place="Valor do frete" value={viagem.valor} setValue={(text) => handleChange('valor', text)} type='numeric' />
            <TouchableOpacity style={style.botao} onPress={adicionarViagem}>
                <Text style={style.textoBotao}>SALVAR</Text>
            </TouchableOpacity>

            <FlatList
                style={{ width: '100%' }}
                data={viagens}
                keyExtractor={item => item.contratante}
                renderItem={({ item, index }) => (
                    <View style={style.itemLista}>
                        <Text style={{ flex: 1, padding: 10, fontSize: 18 }}>{item.contratante}</Text>

                        <TouchableOpacity onPress={() => removerViagem(index)} style={{ backgroundColor: '#f00', padding: 10 }}>
                            <Feather name="trash" size={24} />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}