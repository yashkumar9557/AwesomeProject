import {Image, Text, TextInput, View} from 'react-native';
import Header from '../../component/Header';
import CustomeButton from '../../component/CustomeButton';

const Signup = () => {
  return (
    <View
      style={{
        margin: '3%',
        height: '97%',
        alignItems: 'center',
      }}>
      <Header style={{title: 'So you want to be a Topper? Register here'}} />
      <View
        style={{
          height: '68%',
          //   backgroundColor: 'yellow',
          width: '100%',
          borderWidth: 1,
          padding: 20,
          borderRadius: 30,
        }}>
        <View style={{ height: '100%'}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              <Text>FirstName</Text>
              <TextInput style={{borderBottomWidth: 1, borderRadius: 5, }} />
            </View>
            <View style={{width: '50%',}}>
              <Text>LastName</Text>
              <TextInput style={{borderBottomWidth: 1, borderRadius: 5, }} />
            </View>
          </View>

        </View>
      </View>
      <View>
        <CustomeButton
          style={{
            title: 'Sign Up',
            backgroundColor: '#708090',
            color: '#FFFFFF',
            marginTop: 10,
            width: 320,
          }}
        /
                                                                                                                                        >
      </View>

      <View style={{marginTop: 5}}>
        <Text style={{color: '#000000', fontSize: 15}}>
          Existing Topper?
          <Text
            style={{
              color: '#708090',
              fontSize: 15,
              textDecorationLine: 'underline',
            }}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Signup;
