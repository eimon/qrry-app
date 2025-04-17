import { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, Animated, Pressable } from 'react-native';
import { Fecha } from './Fecha'
import { Link } from 'expo-router';

export function EventoCard({ evento }) {
  return (
    <Link asChild href={`/${evento.id}`}>
      <Pressable className='border border-black mb-2 bg-gray-500/10 rounded-xl p-4'>
        <View className="mb-10 gap-4 justify-center" key={evento.id}>
          <Image
            source={{ uri: `http://192.168.0.26:8000/static/${evento.banner}` }}
            style={styles.image}
          />
          <View className='flex-shrink'>
            <Text style={styles.titulo}>{evento.nombre}</Text>
            <Text style={styles.lugar}>{evento.lugar}</Text>
            <Fecha fecha_hora={evento.fecha_hora} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedEventoCard({ evento, index}) {
    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index*50,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <EventoCard evento={evento} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 50,
    justifyContent: 'center',
    paddingLeft: 35,
  },
  text: {
    fontSize: 45,
    color: "#fff",
  },
  titulo: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
  },
  lugar: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    width: 400,
    height: 150,
    resizeMode: "cover",
    borderRadius: 50,
    position:'absolute',
  },
});
