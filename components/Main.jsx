import { useEffect, useState } from "react";
import { Link } from 'expo-router';
import { FlatList, StyleSheet , View, ActivityIndicator, Pressable } from "react-native";
import { getEventos } from "../lib/eventos.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedEventoCard } from "./EventoCard";
import { Logo } from "./Logo"
import { CircleInfoIcon } from "./Icons.jsx";
import { Screen } from "./Screen.jsx";


export function Main() {
  const [eventos, setEventos] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getEventos().then((data) => {
      setEventos(data);
    });
  }, []);

  return (
    <>
      <Screen>
        {eventos.length === 0 ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={eventos}
            keyExtractor={evento=>evento.id}
            renderItem={({ item, index }) => (
              <AnimatedEventoCard evento={item} index={index} /> 
            )}
          />
        )}
      </Screen>
    </>
  );
}