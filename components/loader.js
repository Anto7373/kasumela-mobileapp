import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { appStyles } from './appStyles';

function Loader(props) {
    if(!props)
        return null;

    return (
        <View style={appStyles.loadingContainer}>
            <ActivityIndicator size="large" color="#7071E8" />
        </View>
    );
}

export default Loader;