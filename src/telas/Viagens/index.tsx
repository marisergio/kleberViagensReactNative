import { View, Text, FlatList, Button, ActivityIndicator, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import ViagemService from '../../services/viagem';
import { Header } from '../../componentes/header';
import { style } from '../home/styles';
import { useNavigation } from '@react-navigation/native';


export default function ListarViagens({ navigation }) {

    const [viagens, setViagens] = useState([]);
    const navigationState = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    /* useEffect(() => {
         ViagemService.getAllViagens().then(response => {
             setViagens(response);
         }).catch(error => {
             console.error('Erro ao buscar clientes:', error);
         });
     }, []);*/

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


    if (isLoading) { return (<ActivityIndicator />) }
    return (<View style={style.caixa}>
        <Header />
        <Text style={style.textoTitulo}>VIAGEM</Text>
        <Button title='Nova' onPress={() => navigation.navigate('viagem')} />
        <FlatList
            data={viagens}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>Contratante: {item.contratante}</Text>
                    <Text>Destino: {item.destino}</Text>
                    <Text>Distância: {item.distancia}</Text>
                </View>
            )}
        />
    </View>);
}