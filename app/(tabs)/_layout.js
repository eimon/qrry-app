import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { HomeIcon, CircleInfoIcon } from '../../components/Icons'

export default function TabsLayout() {
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopColor: '#000'
                },
                tabBarActiveTintColor: '#ff0000',
                tabBarInactiveTintColor: '#666',
                tabBarLabelStyle: {
                    fontSize: 16
                },
            }}>
            <Tabs.Screen 
                name="index" 
                options={{
                    tabBarIcon: HomeIcon,
                    title: 'Inicio'
                }}
            />
            <Tabs.Screen 
                name="about" 
                options={{
                    tabBarIcon: CircleInfoIcon,
                    title: 'Acerca de'
                }}
            />
        </Tabs>
    )
}