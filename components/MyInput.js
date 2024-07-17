import * as React from 'react';
import { TextInput } from 'react-native';
import { appStyles } from './appStyles';

function MyInput(props) {
    if(!props)
        return null;

    return (
        <TextInput
            style={props.style ? [props.style, appStyles.textFieldContainer] : appStyles.textFieldContainer}
            placeholderTextColor={"#666"}
            {...props}
        />
    );
}

export default MyInput;