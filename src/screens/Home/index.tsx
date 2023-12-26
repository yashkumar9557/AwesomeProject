import React from 'react';
import {Image, SafeAreaView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomeButton from '../../component/CustomeButton';
import Statusbar from '../../component/statusBar';

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Statusbar />
      <View
        style={{
          height: '100%',
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/Images/signup.png')}
          style={{height: 300, width: 260}}
        />
        <View style={{position: 'absolute', bottom: 30}}>
          <CustomeButton
            style={{
              backgroundColor: '#708090',
              color: '#FFFFFF',
              marginTop: 20,
              width: 320,
              title: 'Sign Up',
            }}
            onPress={() => console.log('signup')}
          />
          <CustomeButton
            style={{
              backgroundColor: '#30A0E0',
              marginTop: 20,
              color: '#FFFFFF',
              title: 'Login',
              width: 320,
            }}
            onPress={() => console.log('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
