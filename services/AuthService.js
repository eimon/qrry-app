import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.0.26:8000'; // Reemplázalo con la URL de tu backend

// Autenticar y guardar el token
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/token`, {
      username,
      password,
    });

    const { access_token } = response.data;

    // Guarda el token en AsyncStorage
    await AsyncStorage.setItem('access_token', access_token);
    return access_token;
  } catch (error) {
    console.error('Error al autenticar:', error.response?.data || error);
    throw error;
  }
};

// Obtener el token almacenado
export const getToken = async () => {
  return await AsyncStorage.getItem('access_token');
};

// Cerrar sesión
export const logout = async () => {
  await AsyncStorage.removeItem('access_token');
};

// Verificar si el usuario está autenticado
export const isAuthenticated = async () => {
  const token = await getToken();
  return !!token; // Devuelve true si hay un token
};
