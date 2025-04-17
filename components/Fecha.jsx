import { View, Text } from 'react-native'

export function Fecha({fecha_hora}) {
    return(
        <View>
            <Text className='text-white font-bold text-3xl'>
                    {new Date(fecha_hora).getUTCDate()}
            </Text>
            <Text className='text-white font-bold text-2xl'>
                    {new Date(fecha_hora).toLocaleDateString(navigator.language, {
                    month: "short",
                    })}
            </Text>
        </View>
    )
}