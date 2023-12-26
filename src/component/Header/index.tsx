import {Image, Text, View} from 'react-native';
interface Props {
  style: {title: string};
}
const Header = (props: Props) => {
  const style = props.style;
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View style={{marginTop: 20}}>
        <Image style={{height:70}} source={require('../../../assets/Images/logo.png')} />
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 22, textAlign: 'center', color: '#1F126B'}}>
          {style.title}
        </Text>
      </View>
    </View>
  );
};
export default Header;
