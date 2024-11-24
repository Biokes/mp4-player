import {View} from "react-native";
import Navbar from "../components/navbar";
import Login from "../components/auths/login";

export default function Auth(){
    return (
        <View>
            <Navbar/>
            <Login/>
        </View>
    )
}