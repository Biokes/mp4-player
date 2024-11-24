import {View, Text} from "react-native";
import {TextInput} from "react-native-paper";
import {useState} from "react";

export default function Login(){
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <View className={'border-[1px] rounded-[10px] flex flex-col w-full sm:w-[400px] lg:w-[500px]'} >
            <View className={'flex gap-[10px]'}>
                <Text>username</Text>
                <TextInput placeholder={'username'} value={username} onChangeText={(e)=>setUsername(e)}/>
            </View>
            <View className={'flex gap-[10px]'}>
                <Text>Password</Text>
                <TextInput placeholder={'password'} value={password} onChangeText={(e)=>setPassword(e)}/>
            </View>
        </View>
    )
}