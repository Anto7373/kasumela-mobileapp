import * as React from 'react';
import { Pressable, View } from 'react-native';
import MyText from './MyText';
import { appStyles } from './appStyles';

function MyButton(props) {
    if(!props)
        return null;

    return (
        <View style={appStyles.parent}>
            <Pressable disabled={props.isDisabled || false} style={props.isDisabled && props.isDisabled === true ? appStyles.buttonDisabled : (props.style ? [props.style, appStyles.buttonContainer] : appStyles.buttonContainer)} onPress={props.onPress}>
                <MyText style={props.textStyle || appStyles.textStyle}>{props.text}</MyText>
            </Pressable>
        </View>
    );
}

export default MyButton;