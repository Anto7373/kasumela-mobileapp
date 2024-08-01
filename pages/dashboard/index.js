import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getFormattedAmount } from '../../utils';
import { appStyles } from '../../components/appStyles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getDashboardDetails } from '../../api';
import Loader from '../../components/loader';

function Dashboard() {
    
    const getFontSizeForDashboardAmount = (amount) => {
        let fontClass = appStyles.font40;
        if(amount)
        {
            if(amount < 10000)
                fontClass = appStyles.font40;
            else if(amount > 10000 && amount < 100000)
                fontClass = appStyles.font40;
            else if(amount > 100000 && amount < 1000000)
                fontClass = appStyles.font30;
            else if(amount > 1000000 && amount < 10000000)
                fontClass = appStyles.font30;
            else 
                fontClass = appStyles.font40;
        }
        return fontClass;
    }

    const [ongoingLoans, setOngoingLoans] = React.useState([]);
    const [dashboardAmount, setDashboardAmount] = React.useState(0);
    const [totalReferrals, setTotalReferrals] = React.useState(0);

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
            getDashboardData(userProfileData.email);
    }, [userProfileData]);

    const getDashboardData = async (email) => {
        try {
            setLoading(true);
            const response = await fetch(getDashboardDetails+"/"+email);
            const json = await response.json();
            setDashboardAmount(json.totalEarnings);
            setOngoingLoans(json.ongoingLoans);
            setTotalReferrals(json.totalReferrals);
        } catch (error) {
            setError("Unable to process your request. Please try after sometimes!")
            setTimeout(() => {
                setError(null);
            }, 5000);
        } finally {
            setLoading(false);
        }
    }

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
                        <Text style={appStyles.profileInfoText}>Hello, {userProfileData ? userProfileData.firstName : ""}</Text>
                    </View>
                </View>
                <View style={appStyles.dashboardMain}>
                    <View style={[appStyles.summaryCardHero]}>
                        <Text style={appStyles.summaryCardInnerTitle}>Total</Text> 
                        <Text style={appStyles.summaryCardInnerTitle}>Earnings</Text>
                        <Text style={[appStyles.summaryCardHeroText, getFontSizeForDashboardAmount(dashboardAmount)]}>₹{getFormattedAmount(dashboardAmount)}</Text>
                    </View>
                    <View style={[appStyles.summaryCardSub]}>
                        <View style={[appStyles.summaryCardInner]}>
                            <Text style={appStyles.summaryCardInnerText}>{totalReferrals}</Text>
                            <Text style={appStyles.summaryCardSubText}>Total Refferals</Text>
                        </View>
                        <View style={[appStyles.summaryCardInner]}>
                            <Text style={appStyles.summaryCardInnerText}>{ongoingLoans.length}</Text>
                            <Text style={appStyles.summaryCardSubText}>Under Processing</Text>
                        </View>
                    </View>
                </View>
                <View style={[appStyles.onGoingRef]}>
                    <Text style={appStyles.ongoingRefTitle}>Ongoing Loan Process</Text>
                    {
                        ongoingLoans.map((loan, index) => {
                            return <View style={[appStyles.refCard]} key={index}>
                            <View style={[appStyles.refDetail]}>
                                <Text style={[appStyles.circleIcon]}>$</Text>
                                <Text style={appStyles.refDetailTitle}>{loan.firstName || ""+" "+loan.lastName || ""}</Text>
                                <Text style={appStyles.refDetailTitleSub}>{loan.email}</Text>
                            </View>
                            <View style={[appStyles.refLoanAmount]}>
                                <Text style={appStyles.refLoanAmountValueText}>₹{getFormattedAmount(loan.loanAmount)}</Text>
                                {
                                    loan.bankName
                                    ?
                                    <Text style={appStyles.refLoanAmountLabel}>From <Text style={appStyles.refLoanAmountBank}>{loan.bankName}</Text></Text>
                                    :
                                    <Text style={appStyles.refLoanAmountLabel}><Text style={appStyles.refLoanAmountBank}>-- Bank name unavailable -- </Text></Text>
                                }
                            </View>
                        </View>
                        })
                    }
                    {
                        loading == false && ongoingLoans.length == 0 && <Text>No ongoing loans found</Text>
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default Dashboard;