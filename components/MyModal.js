import React, {useEffect, useState} from 'react';
import {Alert, Modal, Text, Pressable, View, ScrollView} from 'react-native';
import { appStyles } from './appStyles';
import MyText from './MyText';
import MyInput from './MyInput';
import MyButton from './MyButton';
import Loader from './loader';
import { addReferral } from '../api';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';
import { loanTypes } from '../utils';

const MyModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [phone, setPhone] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [loanAmuont, setLoanAmount] = React.useState("");
    const [loanType, setLoanType] = React.useState("PERSONAL");

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
    
    useEffect(() => {
        setModalVisible(props.showModal);
    }, [props])

    const handleClose = () => {
        props.onClose();
        setModalVisible(!modalVisible)
    }

    const handleAdd = async (e) => {
        try {
            setLoading(true);
            const response = await fetch(addReferral, {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                loanAmount: loanAmuont,
                loanType: loanType,
                role: "LOANSEEKER",
                status: "PROCESSING",
                referrerId: userProfileData.email,
                createDate: new Date()
              })
            });
            const json = await response.json();
            if(json.status && json.status == 2)
            {
                alert("Referral Saved Successfully!");
            }
            else 
            {
                props.onClose();
                setTimeout(() => {
                    alert("Referral Saved Successfully!")
                }, 1000);
            }
        } catch (error) {
            alert("Unable to process your request. Please try after sometimes!")
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            style={appStyles.centeredView}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                handleClose()
            }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[appStyles.centeredView, appStyles.modalBackground]}>
                    {
                        loading
                        ?
                        <Loader />
                        :
                        null
                    }
                    <View style={appStyles.modalView}>
                        <MyText style={appStyles.headerTextStyle}>Add New Referral</MyText>
                        <MyInput onChangeText={(e) => setFirstName(e)} inputMode={"email"} value={firstName} placeholder="Enter First Name"></MyInput>
                        <MyInput onChangeText={(e) => setLastName(e)} value={lastName} placeholder="Enter Last Name"></MyInput>
                        <MyInput onChangeText={(e) => setPhone(e)} inputMode={"tel"} value={phone} placeholder="Enter Phone"></MyInput>
                        <MyInput onChangeText={(e) => setLoanAmount(e)} inputMode={"numeric"} value={loanAmuont} placeholder="Enter Loan Amount"></MyInput>
                        <View style={appStyles.radioGroup}>
                            <MyText>Choose Loan Type:</MyText>
                            <RadioButton.Group onValueChange={value => setLoanType(value)} value={loanType}>
                                {
                                    loanTypes.map((l, index) => {
                                        return <View key={index}  style={appStyles.radioGroupView}>
                                            <RadioButton color='#2196F3' value={l.value} />
                                            <MyText>{l.label}</MyText>
                                        </View> 
                                    })
                                }
                            </RadioButton.Group>
                        </View>
                        <View style={appStyles.signUpContainer}>
                            <MyButton style={appStyles.addReferralButton} isDisabled={firstName == "" || lastName == "" || phone == "" || loanAmuont == ""} onPress={(e) => handleAdd(e)} text={"Add Referral"} />
                            <Pressable
                                style={[appStyles.buttonClose]}
                                onPress={() => handleClose()}
                            >
                                <Text style={appStyles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
};

export default MyModal;