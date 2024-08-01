import * as React from 'react';
import { View, ImageBackground, Pressable,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Referrals from './pages/referrals';
import Register from './pages/register';
import Profile from './pages/profile';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MyModal from './components/MyModal';
import { appStyles } from './components/appStyles';
import ForgotPassword from './pages/forgotPassword';

function Routes(props) {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const [isUserLoggedIn, setUserStatus] = React.useState(null);
  const { getItem, setItem, removeItem } = useAsyncStorage('isUser');

  const [showModal, setShowModal] = React.useState(false);

  const loginUser = (userData) => {
    writeItemToStorage(userData);
  };

  const readItemFromStorage = async () => {
    const item = await getItem();
    setUserStatus(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setUserStatus(newValue);
  };

  const removeItemFromStorage = async newValue => {
    await removeItem(newValue);
    setUserStatus(newValue);
  };

  const showAddReferral = () => {
    setShowModal(true);
  }

  const hideAddReferral = () => {
    setShowModal(false);
  }

  React.useEffect(() => {
    readItemFromStorage();
  }, []);

  const image = require('./assets/background.png');

  const [loaded] = useFonts({
    Jost: require('./assets/fonts/Jost-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const InitialNavigation = <Stack.Navigator initialRouteName="Login">
    <Stack.Screen 
        name="Login" 
        options={{ 
            title: 'Login', 
            headerShown: false 
        }}
    >
      {props => <View style={appStyles.body} className="bodyContainer">
          <ImageBackground source={image} resizeMode="cover" style={appStyles.image}>
            <Login {...props} onLogin={(userData) => loginUser(userData)} />
          </ImageBackground>
        </View>
      }
    </Stack.Screen>
    <Stack.Screen 
        name="Register" 
        options={{ 
            title: 'Register', 
            headerShown: false 
        }}
    >
      {props => <View style={appStyles.body} className="bodyContainer">
          <ImageBackground source={image} resizeMode="cover" style={appStyles.image}>
            <Register {...props} />
          </ImageBackground>
        </View>
      }
    </Stack.Screen>  
    <Stack.Screen 
        name="ForgotPassword" 
        options={{ 
            title: 'Forgot Password', 
            headerShown: false 
        }}
    >
      {props => <View style={appStyles.body} className="bodyContainer">
          <ImageBackground source={image} resizeMode="cover" style={appStyles.image}>
            <ForgotPassword {...props} />
          </ImageBackground>
        </View>
      }
    </Stack.Screen>      
  </Stack.Navigator>;

  const UserNavigation = <Tab.Navigator initialRouteName="Home"
    screenOptions={() => ({
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: appStyles.tabBarContainer
    })} 
  >
    <Tab.Screen 
        name="Home" 
        options={{ 
          unmountOnBlur: true,
          title: 'Dashboard', 
          headerShown: false,
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} 
    >
      {props => <View style={appStyles.body} className="bodyContainer">
          <ImageBackground source={image} resizeMode="cover" style={appStyles.image}>
            <Dashboard {...props} />
          </ImageBackground>
        </View>
      }
    </Tab.Screen>
    <Tab.Screen 
        name="Referrals" 
        options={{ 
          unmountOnBlur: true,
          title: 'Referrals', 
          headerShown: false,
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-multiple-check" color={color} size={26} />
          ),
        }}
    >
      {props => <View style={appStyles.body} className="bodyContainer">
          <ImageBackground source={image} resizeMode="cover" style={appStyles.image}>
            <Referrals {...props} />
          </ImageBackground>
        </View>
      }
    </Tab.Screen>
    <Tab.Screen 
        name="Profile" 
        options={{ 
            title: 'Profile', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        }} 
    >
      {props => <View style={appStyles.body} className="bodyContainer">
          <ImageBackground source={image} resizeMode="cover" style={appStyles.image}>
            <Profile {...props} onLogout={() => removeItemFromStorage(null)} />
          </ImageBackground>
        </View>
      }
    </Tab.Screen>
  </Tab.Navigator>;

  return (
    <NavigationContainer>
      {
        isUserLoggedIn != null ? 
        <>
        {
          UserNavigation
        }
        <View style={appStyles.topIcon}>
          <Pressable onPress={() => showAddReferral()}>
            <Text>Refer your Friend $ Earn !</Text>
            {/* <MaterialCommunityIcons name="account-plus" color={"white"} size={26} /> */}
          </Pressable>
        </View>
        <MyModal showModal={showModal} onClose={hideAddReferral} />
        </>
        :
        InitialNavigation
      }
    </NavigationContainer>
  );
}

export default Routes