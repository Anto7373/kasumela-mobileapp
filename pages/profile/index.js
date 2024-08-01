import * as React from 'react';
import { View, Text,Image,Linking } from 'react-native';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import { appStyles } from '../../components/appStyles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

function Profile(props) {
    const [userProfileData, setUserData] = React.useState(null);
    const { getItem } = useAsyncStorage('isUser');

    const readItemFromStorage = async () => {
        const item = await getItem();
        setUserData(JSON.parse(item));
    };
    React.useEffect(() => {
        readItemFromStorage();
    }, []);

    return (


        <View style={{ flex: 1, alignItems: "left", justifyContent: "center", padding: 50 }} className="main">
            {
            userProfileData
            ?
            <View>
                <View style={appStyles.logoContainer}>
                    <Image  style={appStyles.headerLogo}  source={require('../../assets/header_logo.png')}></Image>
                </View>

                <MyText style={[appStyles.mainTitle, appStyles.fontAlignLeft]}>Profile</MyText>
                <MyText style={appStyles.profileLabel}>First Name</MyText>
                <MyText style={appStyles.profileValue}>{userProfileData.firstName}</MyText>
                <MyText style={appStyles.profileLabel}>Last Name</MyText>
                <MyText style={appStyles.profileValue}>{userProfileData.lastName}</MyText>
                <MyText style={appStyles.profileLabel}>Email</MyText>
                <MyText style={appStyles.profileValue}>{userProfileData.email}</MyText>
                <MyText style={appStyles.profileLabel}>Phone</MyText>
                <MyText style={appStyles.profileValue}>{userProfileData.phone || "-"}</MyText>
                <MyText style={appStyles.profileLabel}>Status</MyText>
                <MyText style={appStyles.profileValue}>Active</MyText>
            </View>
            :
            null 
            }
            <MyButton onPress={() => props.onLogout(false)} text={"Signout"} />

            <View style={appStyles.privacyPolicy} >
                <Text style={appStyles.privacyPolicyText} onPress={() => Linking.openURL('http://kasumela.com/privacy-policy')}>
                Privacy Policy
                </Text>
            </View>
        </View>
    );
}

export default Profile;