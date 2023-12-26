import {Text, TouchableOpacity} from 'react-native';
interface Props {
  style: {
    backgroundColor: string;
    color: string;
    title: string;
    marginTop: number;
    width: number;
  };
  onPress?: () => void;
}
const CustomeButton = (props: Props) => {
  const {style, onPress} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: style.backgroundColor,
        padding: 10,
        borderRadius: 15,
        marginTop: style.marginTop,
        height: 50,
        width: style.width,
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <Text style={{color: style.color, fontSize: 20}}>{style.title}</Text>
    </TouchableOpacity>
  );
};
export default CustomeButton;
