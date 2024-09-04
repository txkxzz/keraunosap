import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Space = () => <View style={styles.space} />

export default function Inicial() {

    const navigation = useNavigation()

  const [fontsLoaded, fontError] = useFonts({
    'MadimiOne': require('../fonts/MadimiOne-Regular.ttf')
  })

  return (
    <View style={styles.container}>

      <Image source={require('../../assets/logo.png')} />

      <TouchableOpacity style= {styles.button} onPress={()=> {
        navigation.navigate('Login')
      }}>
        <Text style= {{fontFamily: 'MadimiOne', color: '#fff'}}>Login</Text>
      </TouchableOpacity>

      <Space/>

      <TouchableOpacity style= {styles.button} onPress={()=> {
        navigation.navigate('Cadastro')
      }}>
        <Text style= {{fontFamily: "MadimiOne", color: '#fff'}}>Cadastro</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50, 
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: '#fff',
    borderRadius: 5,

  },
  space: {
    marginVertical: 20
  },
});