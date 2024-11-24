import {Button, TextInput} from "react-native-paper";
import {View} from "react-native";
import {useState} from "react";
import {Pressable} from "react-native-gesture-handler";

export default function Register(){
    const [username, setUsername] = useState<string>('');
    const [mail, setMail] = useState<string>('');

    return (
        <View>
            <TextInput value={username} placeholder={'Enter your username'} onChangeText={(value) => setUsername(value)}/>
            <TextInput value={mail} placeholder={'Enter your mail'} onChangeText={(value) => setMail(value)}/>
            <View className='flex items-center justify-center'>
                <Button> Register </Button>
                <Pressable>Sign in</Pressable>
            </View>
        </View>
    )
}