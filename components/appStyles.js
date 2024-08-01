import {
    StyleSheet
} from "react-native";

export const appStyles = StyleSheet.create({
    // Common styles
    body: {
        fontFamily: "Jost",
        width: "100%",
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    tabBarContainer: {
        backgroundColor: "#2c3e50"
    },
    topIcon: {
        position: 'absolute',
        bottom: 60,
        right: 20,
        backgroundColor: '#6682f7',
        borderRadius: 50,
        padding: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pageContainer : {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
    },
    appHeader: {
        color: "#ecf0f1",
        textAlign: "left",
        padding: "1.5em",
        width: "100%",
        marginTop: 80,
        marginLeft: 5
    },
    loadingContainer: {
        position: 'absolute',
        left: -10,
        right: -10,
        top: -10,
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        backgroundColor: 'black',
        zIndex: 10
    },
    errorMessage: {
        color: "white",
        backgroundColor: "#FF6969",
        fontWeight: "bold",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20
    },
    successMessage: {
        color: "white",
        backgroundColor: "green",
        fontWeight: "bold",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20
    },
    // Common styles ends
    // Modal styles
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        maxWidth: 500
    },
    addReferralButton: {
        width: "100%",
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        color: "black",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        width: "100%",
        borderRadius: 12,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 15,
        paddingLeft: 15,
        elevation: 2,
        maxWidth: 310
    },
    headerTextStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 26,
        width: "100%",
        marginBottom: 25,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    radioGroup: {
        width: "100%",
        justifyContent:'center',
        alignContent:'center'
    },
    radioGroupView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    // Modal styles ends

    // Button styles
    parent: {
        zIndex: 3
    },
    buttonContainer: {
        fontFamily: "Jost",
        fontSize: 14,
        backgroundColor: "black",
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 15,
        paddingLeft: 15,
        textAlign: "center",
        margin: 10,
        borderRadius: 12,
        zIndex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    buttonDisabled: {
        fontFamily: "Jost",
        fontSize: 14,
        backgroundColor: "#ccc",
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 15,
        paddingLeft: 15,
        textAlign: "center",
        margin: 10,
        borderRadius: 12,
        zIndex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    textStyle: {
        fontSize: 14,
        color: "white",
        textAlign: 'center'
    },
    // Button style ends
    //Link style
    linkContainer: {
        fontFamily: "Jost",
        fontSize: 14,
    },
    linkTextStyle: {
        fontSize: 14,
        color: "black",
        fontWeight: 'bold',
        zIndex: 2
    },
    //Link style ends

    //Text style
    textFieldcontainer: {
        fontFamily: "Jost",
        zIndex: 2,
    },
    textFieldContainer: {
        fontFamily: "Jost",
        width: "100%",
        zIndex: 2,
        width: "100%",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 25,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#fce6d7",
        fontSize: 14
    },
    //Text style ends
    // Tab style
    tabParent: {
        minWidth: 150,
        zIndex: 3
    },
    tabContainer: {
        fontFamily: "Jost",
        fontSize: 14,
    },
    tabTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center'
    },
    // Tab style ends
    // Dashbaord style
    profileInfo: {
        marginBottom: 20
    },
    profileInfoText: {
        margin: 0,
        fontSize: 22,
        color: "#101010"
    },
    dashboardMain: {
        display: "flex",
        gridGap: 10,
        flexDirection: 'row',
        width: "100%"
    },
    summaryCardHero: {
        backgroundColor: "#6682f7",
        padding: 15,
        margin: 5,
        borderRadius: 8,
        textAlign: "left",
        flex: 0.6
    },
    summaryCardHeroText: {
        paddingTop: 20,
        color: "white",
        fontWeight: '500'
    },
    font40: {
        fontSize: 40,
    },
    font30: {
        fontSize: 30,
    },
    font20: {
        fontSize: 20,
    },
    summaryCardSub: {
        flex: 0.6,
    },
    summaryCardInner: {
        display: "flex",
        alignItems: "center",
        gridGap: 10,
        backgroundColor: "#f3f6fd",
        borderRadius: 8,
        padding: 12,
        marginTop: 5,
        marginBottom: 10,
        flexDirection: "row"
    },
    summaryCardInnerText: {
        backgroundColor: "#6682f7",
        padding: 12,
        fontSize: 22,
        color: "white",
        borderRadius: 8,
        marginBottom: 0
    },
    summaryCardInnerTitle: {
        fontSize: 26,
        marginBottom: 0,
        color: "white"
    },
    summaryCardSubText: {
        marginBottom: 10,
        padding: 5,
        width: "70%"
    },
    onGoingRef: {
        paddingTop: 20,
        marginTop: 10,
        width: "100%"
    },
    ongoingRefTitle: {
        marginBottom: 20,
        fontSize: 22
    },
    refCard: {
        borderWidth: 1,
        borderColor: "#c6cace",
        padding: 15,
        borderRadius: 5,
        marginBottom: 15
    },
    refDetail: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    refDetailTitle: {
        paddingLeft: 60,
        fontSize: 20,
        marginBottom: 5
    },
    refDetailTitleSub: {
        paddingLeft: 60,
        fontSize: 15,
        marginBottom: 5
    },
    refDetailSubTitle: {
        fontSize: 16
    },
    circleIcon: {
        backgroundColor: "#6783f7",
        height: 45,
        width: 45,
        textAlign: "center",
        fontSize: 20,
        lineHeight: 45,
        color: "white",
        borderRadius: 40,
        fontWeight: "700",
        position: "absolute",
        left: "auto",
        top: "auto"
    },
    refLoanAmount: {
        backgroundColor: "#f3f6fd",
        padding: 20,
        marginTop: 20,
        borderRadius: 10
    },
    refLoanAmountValueText: {
        fontSize: 23,
        color: "#6783f7"
    },
    refLoanAmountLabel: {
        fontSize: 14,
        color: "#9c9c9c"
    },
    refLoanAmountBank: {
        fontSize: 16,
        color: "#000"
    },
    // Dashboard style ends
    // Login style
    mainTitleLogin: {
        fontSize: 26,
        fontWeight: 500,
        marginBottom: "1rem",
        paddingBottom: 15
    },
    subTitleLogin: {
        fontSize: 20,
        color: "#9c9c9c",
        marginBottom: "0.5rem",
        paddingBottom: 15,
        fontWeight: 400
    },
    secondaryLink: {
        fontWeight: "bold",
        width: "100%",
        alignItems: "center"
    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        right: 10,
    },
    headerLogo: {
      width: 100,
      height: 60,
    },
    // Login style ends
    // Profile style
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        margin: 10,
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 500,
        marginBottom: 30,
        paddingBottom: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    fontAlignLeft: {
        textAlign: "left",
        width: "100%"
    },
    subTitle: {
        fontSize: 20,
        color: "#9c9c9c",
        marginBottom: "0.5rem",
        fontWeight: 400
    },
    passwordContainer: {
        marginTop: 8
    },
    passwordLink: {
        textAlign: "right"
    },
    signUpContainer: {
        marginTop: 40,
        textAlign: "center",
        color: "#6e6e6e",
        fontSize: 12,
        width: "100%"
    },
    signUpText: {
        textAlign: "center",
    },
    profileLabel: {
        fontSize: 15,
        color: '#666',
        width: "100%"
    },
    profileValue: {
        fontSize: 20,
        color: '#000',
        marginBottom: 20,
        width: "100%"
    },
    // Profile style ends
    // Referrals style
    refTabs: {
        backgroundColor: "#3498db52",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        gridGap: 10,
        display: "flex",
        flexDirection: "row"
    },
    refTabButton: {
        color: "#000",
        fontSize: "1.2em",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        borderRadius: 30,
        textAlign: "center",
        fontSize: 20
    },
    refTabButtonActive: {
        backgroundColor: "white"
    },
    customerList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    customerCard: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        shadowColor: '#666',
        padding: 5,
        elevation: 20
    },
    customerInfo: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: "#f3f3f3"
    },
    customerData: {
        fontSize: 18,
        marginBottom: 5
    },
    customerEmail: {
        fontSize: 15
    },
    loanInfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 10
    },
    bankInfo: {

    },
    bankNameLabel: {
        fontSize: 14,
        color: "#6a6a6a"
    },
    bankNameValue: {
        fontSize: 18,
        color: "#000"
    },
    amountInfo: {

    },
    amountNameLabel: {
        fontSize: 14,
        color: "#6a6a6a"
    },
    amountNameValue: {
        fontSize: 18,
        color: "#000"
    },
    // Referrals style ends
    // privacy policy
    privacyPolicy: {
        position: 'absolute',
        bottom:10
    },
    privacyPolicyText: {
    color:'#9e5323',
    fontWeight:600
    }
});