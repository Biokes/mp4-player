import {Text,View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Navbar(){
    return (
        <View>
            <Icon name="video-library" size={50} color="green" />
            <Text tw={'text-xl font-bold text-blue-600'}>Spedia Tube</Text>
        </View>
    )
}