import * as React from 'react';
import { View, Text ,Image,Linking} from 'react-native';
import MyText from '../../components/MyText';
import MyInput from '../../components/MyInput';
import MyLink from '../../components/MyLink';
import MyButton from '../../components/MyButton';
import { appStyles } from '../../components/appStyles';
import { register } from '../../api';
import Loader from '../../components/loader';

function Register(props) {
    const {navigation} = props;
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const [loading, setLoading] = React.useState("");
    const [errorMessage, setError] = React.useState(null);
  
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(register, {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password: password,
                role: "MEMBER",
                status: "ACTIVE"
              })
            });
            const json = await response.json();
            if(json.status && json.status == 2)
            {
                setError("Error creating account. Please check your details!")
                setTimeout(() => {
                    setError(null);
                }, 5000);
            }
            else 
                navigation.navigate('Login', {accountCreated: "YES"});
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
            <View style={appStyles.logoContainer}>
                    <Image  style={appStyles.headerLogo}  source={require('../../assets/header_logo.png')}></Image>
                </View>
            <View>
                <Text style={[appStyles.mainTitle]}>
                    <MyText>Create an account!</MyText>
                </Text>
            </View>
            <MyInput onChangeText={(e) => setEmail(e)} inputMode={"email"} value={email} placeholder="Enter Email"></MyInput>
            <MyInput onChangeText={(e) => setFirstName(e)} value={firstName} placeholder="Enter Firstname"></MyInput>
            <MyInput onChangeText={(e) => setLastName(e)} value={lastName} placeholder="Enter Lastname"></MyInput>
            <MyInput onChangeText={(e) => setPhone(e)} inputMode={"tel"} value={phone} placeholder="Enter Phone number"></MyInput>
            <MyInput onChangeText={(e) => setPassword(e)} value={password} placeholder="Enter Password" secureTextEntry={true}></MyInput>
            
            <View style={appStyles.signUpContainer}>
                <MyButton isDisabled={firstName == "" || password == "" || email == ""} onPress={(e) => handleRegister(e)} text={"Register"} />
                <MyText style={appStyles.signUpText}>
                    Already have an account? 
                </MyText>
                <MyLink onPress={() => navigation.navigate('Login')} text={"Login"} style={appStyles.secondaryLink} />
            </View>
            <View style={appStyles.privacyPolicy} >
                <Text style={appStyles.privacyPolicyText} onPress={() => Linking.openURL('http://kasumela.com/privacy-policy')}>
                Privacy Policy
                </Text>
            </View>
        </View>
    );
}

export default Register