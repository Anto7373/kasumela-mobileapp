import * as React from 'react';
import { Pressable, View } from 'react-native';
import MyText from './MyText';
import { appStyles } from './appStyles';

function MyTabButton(props) {
    if(!props)
        return null;

    return (
        <View style={appStyles.tabParent}>
            <Pressable disabled={props.isDisabled || false} style={props.isDisabled && props.isDisabled === true ? appStyles.disabled : (props.style ? [props.style, appStyles.tabContainer] : appStyles.tabContainer)} onPress={props.onPress}>
                <MyText style={props.tabTextStyle || appStyles.tabTextStyle}>{props.text}</MyText>
            </Pressable>
        </View>
    );
}

export default MyTabButton;