import * as React from 'react';
import { Text } from 'react-native';
import { appStyles } from './appStyles';

function MyText(props) {
    if(!props)
        return null;

    return (
        <Text style={props.style ? [props.style, appStyles.textFieldcontainer] : appStyles.textFieldcontainer}>
            {props.children}
        </Text>
    );
}

export default MyText;