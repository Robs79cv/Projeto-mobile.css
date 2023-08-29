import { View } from 'react-native';

// componente
const Box = (props) => {
  // estilo inline
  const boxStyle = {
    height: props.size,
    width: props.size,
    // fex: props.flex
    backgroundColor: props.color,
  };

  return (
    //codigo JSX
    <View style={boxStyle}></View>
  );
};

export default Box;
