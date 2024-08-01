import * as React from 'react';
import { View, Text,Image,Linking } from 'react-native';
import MyText from '../../components/MyText';
import MyInput from '../../components/MyInput';
import MyLink from '../../components/MyLink';
import MyButton from '../../components/MyButton';
import { appStyles } from '../../components/appStyles';
import { resetPassword, sendPasswordResetCode } from '../../api';
import Loader from '../../components/loader';

function ForgotPassword(props) {
    const {navigation, route} = props;

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    const [resetCode, setResetCode] = React.useState("");
    const [loading, setLoading] = React.useState("");
    const [errorMessage, setError] = React.useState(null);
    const [showMessage, setMessage] = React.useState(null);
    const [passwordPageStep, setStep] = React.useState(1);
  
    const handleSendCode = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(sendPasswordResetCode, {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                userName: userName
              })
            });
            const json = await response.json();
            if(json.status && json.status == 2)
            {
                setError(json.message || "Error sending password reset code. Please check your email id!")
                setTimeout(() => {
                    setError(null);
                }, 5000);
            }
            else 
            {
                setStep(2);
                setMessage("Code sent successfully");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
        } catch (error) {
            setError("Unable to process your request. Please try after sometimes!")
            setTimeout(() => {
                setError(null);
            }, 5000);
        } finally {
            setLoading(false);
        }
        return false;
    }

    const handleReset = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(resetPassword, {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                userName: userName,
                password: password,
                resetCode: resetCode
              })
            });
            const json = await response.json();
            if(json.status && json.status == 2)
            {
                setError(json.message || "Error sending password reset code. Please check your email id!")
                setTimeout(() => {
                    setError(null);
                }, 5000);
            }
            else 
            {
                setStep(1);
                navigation.navigate('Login', {passwordReset: "YES"});
            }
        } catch (error) {
            setError("Unable to process your request. Please try after sometimes!")
            setTimeout(() => {
                setError(null);
            }, 5000);
        } finally {
            setLoading(false);
        }
        return false;
    }

    const backToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={appStyles.container} className="main">
            {
                loading
                ?
                <Loader />
                :
                null
            }
            {errorMessage && <Text style={appStyles.errorMessage}>{errorMessage}</Text>}
            {showMessage && <Text style={appStyles.successMessage}>{showMessage}</Text>}
            {
                passwordPageStep == 1 ?
                <>
                <View style={appStyles.logoContainer}>
                    <Image  style={appStyles.headerLogo}  source={require('../../assets/header_logo.png')}></Image>
                </View>
                    <View>
                        <Text style={[appStyles.mainTitleLogin]}>
                            <MyText>Let's get your password reset</MyText>
                        </Text>
                    </View>
                    
                    <MyInput onChangeText={(e) => setUserName(e)} inputMode={"email"} value={userName} placeholder="Enter Email"></MyInput>
                    <View style={appStyles.signUpContainer}>
                        <MyButton isDisabled={userName == ""} onPress={(e) => handleSendCode(e)} text={"Send Password Reset Code"} />
                        <MyLink onPress={() => backToLogin()} text={"Back to Login"} style={appStyles.secondaryLink} />
                    </View>
                </>
                :
                <>
                    <View>
                        <Text style={[appStyles.mainTitleLogin]}>
                            <MyText>Let's get your password reset</MyText>
                        </Text>
                    </View>
                    
                    <MyInput onChangeText={(e) => setPassword(e)} value={password} placeholder="Enter Password" secureTextEntry={true}></MyInput>
                    <MyInput onChangeText={(e) => setPasswordConfirm(e)} value={passwordConfirm} placeholder="Re-Enter Password" secureTextEntry={true}></MyInput>
                    <MyInput onChangeText={(e) => setResetCode(e)} value={resetCode} inputMode={"numeric"} placeholder="Enter Password Reset Code" secureTextEntry={true}></MyInput>
                    <View style={appStyles.signUpContainer}>
                        <MyButton isDisabled={password == "" || passwordConfirm == ""} onPress={(e) => handleReset(e)} text={"Reset Password"} />
                        <MyLink onPress={() => backToLogin()} text={"Back to Login"} style={appStyles.secondaryLink} />
                    </View>
                </>
            }
               <View style={appStyles.privacyPolicy} >
                    <Text style={appStyles.privacyPolicyText} onPress={() => Linking.openURL('http://kasumela.com/privacy-policy')}>
                        Privacy Policy
                    </Text>
                </View>
        </View>
    );
}

export default ForgotPassword