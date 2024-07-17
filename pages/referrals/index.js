import * as React from 'react';
import { View, ScrollView, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyTabButton from '../../components/MyTabButton';
import { getFormattedAmount } from '../../utils';
import { appStyles } from '../../components/appStyles';

import { getReferrals } from '../../api';
import Loader from '../../components/loader';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

function Referrals() {
    const [activeTab, setActiveTab] = React.useState("ongoing");
    const [referrals, setReferrals] = React.useState([]);

    const [loading, setLoading] = React.useState("");

    const [userProfileData, setUserData] = React.useState(null);
    const { getItem } = useAsyncStorage('isUser');

    const readItemFromStorage = async () => {
        const item = await getItem();
        setUserData(JSON.parse(item));
    };
    React.useEffect(() => {
        readItemFromStorage();
    }, []);

    React.useEffect(() => {
        if(userProfileData)
            getMyReferrals(userProfileData.email);
    }, [userProfileData]);

    const getMyReferrals = async (email) => {
        try {
            setLoading(true);
            const response = await fetch(getReferrals+"/"+email);
            const json = await response.json();
            setReferrals(json);
        } catch (error) {
            setError("Unable to process your request. Please try after sometimes!")
            setTimeout(() => {
                setError(null);
            }, 5000);
        } finally {
            setLoading(false);
        }
    }

    const filteredItems = referrals.filter(i => {
        if(activeTab == "completed")
        {
            return i.status == "DISPOSAL";
        }
        else 
        {
            return i.status != "DISPOSAL";
        }
    });

    return (
        <ScrollView style={{height: "100%", display: "grid"}}>
            <View style={appStyles.pageContainer}>
                {
                    loading
                    ?
                    <Loader />
                    :
                    null
                }
                <View style={appStyles.appHeader}>
                    <View style={appStyles.profileInfo}>
                        <Text style={appStyles.profileInfoText}>Referrals</Text>
                    </View>
                </View>
                <View style={appStyles.refTabs}>
                    <MyTabButton onPress={() => setActiveTab("ongoing")} style={activeTab == "ongoing" ? [appStyles.refTabButton, appStyles.refTabButtonActive] : appStyles.refTabButton} text="Ongoing" />
                    <MyTabButton onPress={() => setActiveTab("completed")} style={activeTab == "completed" ? [appStyles.refTabButton, appStyles.refTabButtonActive] : appStyles.refTabButton} text="Completed" />
                </View>
                <View style={appStyles.customerList}>
                    {
                        filteredItems.length > 0 
                        ?
                        filteredItems.map((item, index) => {
                            return <View style={appStyles.customerCard} key={index}>
                                <Text className="icon_col">
                                    <MaterialCommunityIcons name={item.status == "DISPOSAL" ? "check-circle" : "progress-clock"} color={item.status == "DISPOSAL" ? "green" : "#6783f7"} size={55} />
                                </Text>
                                <View style={appStyles.customerInfo}>
                                    <Text style={appStyles.customerData}>{(item.firstName || "")+" "+(item.lastName || "")}</Text>
                                    <Text style={[appStyles.customerData, appStyles.customerEmail]}>{item.email}</Text>

                                    <View style={appStyles.loanInfo}>
                                        <View style={appStyles.bankInfo}>
                                            <Text style={appStyles.bankNameLabel}>Bank</Text>
                                            <Text style={appStyles.bankNameValue}>{item.bankName || "-"}</Text>
                                        </View>
                                        <View style={appStyles.amountInfo}>
                                            <Text style={appStyles.amountNameLabel}>Loan Amount</Text>
                                            <Text style={appStyles.amountNameValue}>₹{getFormattedAmount(item.loanAmount)}</Text>
                                        </View>
                                    </View>                    
                                </View>
                            </View>
                        })
                        :
                        loading == false 
                        ?
                        <Text>No data found</Text>
                        :
                        null
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default Referrals;