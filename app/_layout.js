import { Stack } from 'expo-router'
import { View, ActivityIndicator } from 'react-native';
import { Logo } from '../components/Logo';
import { CircleInfoIcon } from '../components/Icons';
import { Link, useRouter, Slot } from 'expo-router';
import { Pressable } from 'react-native';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import { useEffect, useContext } from 'react';
import '../global.css';

export default function Layout() {
    return (
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    );
  }
  
  function MainLayout() {
    const { user, isLoading } = useContext(AuthContext);
    const router = useRouter();
  
    useEffect(() => {
      if (!isLoading && !user) {
        router.replace('/LoginScreen');
      }
    }, [user, isLoading]);
  
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  
    return user ? <View className="flex-1">
                    <Stack
                        screenOptions={{
                            headerStyle: { backgroundColor: 'black', headerStyle: 'white' },
                            headerTitle: '',
                            headerLeft: () => <Logo />,
                            headerRight: () => (
                                <Link asChild href="/about">
                                    <Pressable>
                                        <CircleInfoIcon />
                                    </Pressable>
                                </Link>
                            ),
                        }}
                    />
                </View> : <Slot />;
  }


// export default function Layout() {
//     return(
//         <View className="flex-1">
//             <Stack
//                 screenOptions={{
//                     headerStyle: { backgroundColor: 'black', headerStyle: 'white' },
//                     headerTitle: '',
//                     headerLeft: () => <Logo />,
//                     headerRight: () => (
//                         <Link asChild href="/about">
//                             <Pressable>
//                                 <CircleInfoIcon />
//                             </Pressable>
//                         </Link>
//                     ),
//                 }}
//             />
//         </View>
//     );
// }