import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getStorageItemByKey(key)
{
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        // error reading value
    }
}

export async function saveItemByKey (key, value)
{
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        // saving error
    }
}

export async function removeValue(key){
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
        // remove error
    }
}