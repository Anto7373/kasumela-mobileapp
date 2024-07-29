import * as React from 'react';
import { View, Text } from 'react-native';
import MyText from '../../components/MyText';
import MyButton from '../../components/MyButton';
import { appStyles } from '../../components/appStyles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MyImage from '../../assets/header.png';
import '../../assets/css/App.css';

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

                <div className="containerImg">
                    <img  src={MyImage}  />
                </div>
            {
            userProfileData
            ?
            <View>
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
        </View>
    );
}

export default Profile;