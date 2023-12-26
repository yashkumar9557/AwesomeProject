/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {
  getToken,
  notificationListener,
  requestUserPermission,
} from './src/utils/comman';
import CustomeButton from './src/component/CustomeButton';
import firestore from '@react-native-firebase/firestore';
import {PermissionsAndroid} from 'react-native';
function App(): JSX.Element {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        `${remoteMessage.notification?.body}`,
        remoteMessage.notification?.title,
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    requestUserPermission();
  }, []);

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async () => {
    if (name === '') {
      setError('Please enter your name');
      return;
    }
    const deviceToken = await messaging().getToken();
    console.log('deviceToken', deviceToken);
    
    const data = {
      name: name,
      token: deviceToken,
    };
    //check if token is already exist
    const snapshot = await firestore()
      .collection('users')
      .where('token', '==', deviceToken)
      .get();
    if (!snapshot.empty) {
      Alert.alert('Error', 'You have already registered');
      return;
    }
    await firestore().collection('users').add(data);
    Alert.alert('Success', 'You have registered successfully');
    setName('');
  };
  const handleOnChange = (text: string) => {
    setError('');
    setName(text);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'red',
          }}>
          Register for notification
        </Text>

        <TextInput
          onChangeText={text => {
            handleOnChange(text);
          }}
          placeholder="enter your name"
          value={name}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 10,
            width: 200,
            paddingStart: 10,
          }}
        />
        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        <CustomeButton
          style={{
            marginTop: 20,
            title: 'Register',
            color: 'white',
            width: 200,
            backgroundColor: 'red',
          }}
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
    </>
  );
}

export default App;
