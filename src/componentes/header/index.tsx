import { View, Image } from "react-native";

import { styles } from "./styles";

import logo from "../../assets/Kleber_logo_64.png";

export function Header() {
    return (
        <View>
            <Image source={logo} style={styles.logo} />
        </View>
    )
} 