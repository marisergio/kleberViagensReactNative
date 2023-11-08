import { TextInput } from "react-native";

import { style } from "./styles";

type Props = {
    place: string,
    value: string,
    setValue: (string) => void
}

export default function MyInputText(props: Props) {
    return (<TextInput style={style.campo} placeholder={props.place} value={props.value} onChangeText={props.setValue} />)
}