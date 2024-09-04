import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Space = () => <View style={styles.space} />

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [fontsLoaded, fontError] = useFonts({
        'MadimiOne': require('../fonts/MadimiOne-Regular.ttf')
    })
    const navigation = useNavigation()

    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.reset({
                index: 0, 
                routes: [{name: 'Home'}]
            });
        } catch(error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }   
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite seu email" style={styles.input} value={email} autoCapitalize="none" onChangeText={(text) => setEmail(text)}/>
                <Space />
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite sua senha" style={styles.input} secureTextEntry={true} value={password} autoCapitalize="none" onChangeText={(text) => setPassword(text)}/>
                <Space />
                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 50,
        width: 270,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: 5,
    },
    space: {
        marginVertical: 20
    },
    title: {
        fontFamily: 'MadimiOne',
        fontSize: 20,

    },
    buttonText: {
        fontFamily: 'MadimiOne',
        color: "#fff"
    },
    input: {
        borderWidth: 1,
        height: 40,
        padding: 10
    }
})