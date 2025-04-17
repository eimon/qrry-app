import { Link, Stack } from "expo-router"
import { ActivityIndicator, Text, View, ScrollView } from "react-native"
import { HomeIcon } from "../components/Icons"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { getEventoDetalle } from "../lib/eventos"
import { Screen } from "../components/Screen"
import { Fecha } from "../components/Fecha"

export default function Detail() {
    const { id } = useLocalSearchParams();
    const [evento, setEvento] = useState([]);

    useEffect(() => {
        if (evento) {
            getEventoDetalle(id).then(setEvento);
        }
      }, [id]);

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerTitle: 'Evento',
                    headerTintColor: 'white',
                    headerLeft: () => {},
                    headerRight: () => {},
                }}/>
            <View>
                { evento.length === 0 ? (
                    <>
                        <ActivityIndicator
                            size="large"
                            color="#fff" />
                    </>
                    ) : (
                        <ScrollView>
                            <Text className="text-white font-bold mb-8 text-2xl">{evento.nombre} - {evento.id} </Text>
                            <Fecha fecha_hora={evento.fecha_hora} />
                            {evento.tickets.length === 0 ? (
                                <Text className="text-white">No hay tickets disponibles</Text>
                            ) : (
                                evento.tickets.map(ticket => {
                                    return <>
                                        <View key={ticket.id}>
                                            <Text className="text-white">{ticket.tipo}({ticket.cantidad_disponible})</Text>
                                        </View>
                                    </>
                                })
                            )}
                        </ScrollView>
                    )
                    }
            </View>
        </Screen>
    )
}