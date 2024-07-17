import * as React from 'react';
import { View, Text } from 'react-native';
import MyText from '../../components/MyText';
import MyInput from '../../components/MyInput';
import MyLink from '../../components/MyLink';
import MyButton from '../../components/MyButton';
import { appStyles } from '../../components/appStyles';
import { login } from '../../api';
import Loader from '../../components/loader';

function Login(props) {
    const {navigation, route} = props;

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState("");
    const [errorMessage, setError] = React.useState(null);
    const [showMessage, setMessage] = React.useState(null);
        
    

    React.useEffect(() => {
        if(route.params && route.params.accountCreated && route.params.accountCreated == "YES")
        {
            setMessage("Your account has been created successfully. Please login!")
            setTimeout(() => {
                setMessage(null);
            }, 5000);
        }
        if(route.params && route.params.passwordReset && route.params.passwordReset == "YES")
        {
            setMessage("Your password has been updated successfully. Please login!")
            setTimeout(() => {
                setMessage(null);
            }, 5000);
        }
    }, [route.params]);
  
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(login, {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                userName: userName,
                password: password
              })
            });
            const json = await response.json();
            if(json.status && json.status == 2)
            {
                setError("Error logging you in. Please check your credetials!")
                setTimeout(() => {
                    setError(null);
                }, 5000);
            }
            else 
                props.onLogin(JSON.stringify(json));
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

    const handleRegister = () => {
        navigation.navigate('Register')
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
            <View>
                <Text style={[appStyles.mainTitleLogin]}>
                    <MyText>Let's Sign you in.</MyText>
                </Text>
            </View>
            <View>
                <Text style={[appStyles.subTitleLogin]}>
                    <MyText>Welcome Back</MyText>
                </Text>
            </View>
            <View>
                <Text style={[appStyles.subTitleLogin]}>
                    <MyText>You've been missed!</MyText>
                </Text>
            </View>
            
            <MyInput onChangeText={e => setUserName(e)} inputMode={"email"} value={userName} placeholder="Enter Email"></MyInput>
            <MyInput onChangeText={e => setPassword(e)} value={password} placeholder="Enter Password" secureTextEntry={true}></MyInput>
            <View style={appStyles.passwordContainer}>
                <MyLink text={"Forgot Password?"} textStyle={appStyles.passwordLink} onPress={() => {navigation.navigate('ForgotPassword')}} />    
            </View>
            <View style={appStyles.signUpContainer}>
                <MyButton isDisabled={userName == "" || password == ""} onPress={(e) => handleLogin(e)} text={"Login"} />
                <MyText style={appStyles.signUpText}>
                    Don't have an account? 
                </MyText>
                <MyLink onPress={() => handleRegister()} text={" Sign Up"} style={appStyles.secondaryLink} />
            </View>
        </View>
    );
}

export default Login