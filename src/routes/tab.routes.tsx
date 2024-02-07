import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';

import Home from "../telas/home";
import Viagem from "../telas/viagem";
import ListarViagens from "../telas/Viagens";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const ViagemStack = () => {
    return <Stack.Navigator initialRouteName="Viagens" screenOptions={{headerShown:false}}>
        <Stack.Screen
            name="viagem"
            component={Viagem}
        />

        <Stack.Screen
            name="Viagens"
            component={ListarViagens}
        />
    </Stack.Navigator>
}

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Início'
                }}
            />


            <Tab.Screen
                name="Viagens"
                component={ViagemStack}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Viagens'
                }}
            />
        </Tab.Navigator>
    );
}