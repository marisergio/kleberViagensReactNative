import { View, Text, FlatList, Button, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import ViagemService from '../../services/viagem';
import { Header } from '../../componentes/header';
import { style } from '../home/styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function ListarViagens({ navigation }) {

    const [viagens, setViagens] = useState([]);
    const navigationState = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     ViagemService.getAllViagens().then(response => {
    //         setViagens(response.data);
    //         setIsLoading(false);
    //     }).catch(error => {
    //         console.error('Erro ao buscar clientes:', error);
    //     });
    // }, []);

    /* async function getAllViagens() {
        const response  = await ViagemService.getAllViagens();
        if(response.status==200){
            setViagens(response.data);
        }else{
           
        }
        setIsLoading(false);
        
     }*/

    /* interface Viagem {
         id: string;
         destino: string;
         distancia: string;
         proprietario: string;
         valor: string;
     }
     
     if ('data' in response) {
         setViagens(response.data as Viagem[]); // Converta response.data para o tipo Viagem[]
       } else {
         throw new Error('Formato de resposta inválido');
       }
     */

    useEffect(() => {
        const unsubscribe = navigationState.addListener('focus', () => {
            ViagemService.getAllViagens().then(response => {
                setViagens(response.data);
            }).catch(error => {
                Alert.alert('Erro ao buscar viagens')
            }).finally(() => setIsLoading(false));
        });

        // Retorno de função para limpar o efeito quando o componente é desmontado
        return unsubscribe;
    }, [navigationState]);

    function removerViagem(index: number, id: number) {

        const updateViagens2 = [...viagens];
        updateViagens2.splice(index, 1)


        // const updateViagens =  viagens.filter((v:Viagem)=>v.contratante!=key);

        setViagens(updateViagens2);

        ViagemService.deleteViagem(id);

    }


    if (isLoading) {
        return (<ActivityIndicator />)
    }
    return (<View style={style.caixa}>
        <Header />
        <Text style={style.textoTitulo}>VIAGEM</Text>
        <Button title='Nova Viagem' onPress={() => navigation.navigate('viagem')} />
        <FlatList style={{ width: '100%' }}
            data={viagens}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
                <View style={{ backgroundColor: '#f3f3f3', padding: 10, margin: 10 }}>
                    <Text>Contratante: {item.contratante}</Text>
                    <Text>Destino: {item.destino}</Text>
                    <Text>Distância: {item.distancia}</Text>
                    <TouchableOpacity onPress={() => removerViagem(index, item.id)} style={{ backgroundColor: '#f00', padding: 10 }}>
                            <Feather name="trash" size={24} style={{color:'#fff'}} />
                        </TouchableOpacity>
                </View>
            )}
        />
    </View>);
}