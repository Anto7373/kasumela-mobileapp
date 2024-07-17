import * as React from 'react';
import { Pressable } from 'react-native';
import MyText from './MyText';
import { appStyles } from './appStyles';

function MyLink(props) {
    if(!props)
        return null;

    return (
        <Pressable style={props.style ? [props.style, appStyles.linkContainer] : appStyles.linkContainer} onPress={props.onPress}>
            <MyText style={props.textStyle || appStyles.linkTextStyle}>{props.text}</MyText>
        </Pressable>
    );
}

export default MyLink;