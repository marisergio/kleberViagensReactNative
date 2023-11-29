import { KeyboardTypeOptions, TextInput } from "react-native";

import { style } from "./styles";

type Props = {
    place: string,
    value: string,
    type?: KeyboardTypeOptions,
    setValue: (value: string) => void
}

export default function MyInputText(props: Props) {
    return (<TextInput
        style={style.campo}
        placeholder={props.place}
        value={props.value}
        keyboardType={props.type || 'default'}
        onChangeText={props.setValue} />)
}