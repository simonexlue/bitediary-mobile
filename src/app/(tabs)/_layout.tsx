import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="home" options={{title:"Home"}} />
            <Tabs.Screen name="diary" options={{title:"Diary"}} />
            <Tabs.Screen name="add" options={{title:"Add"}} />
            <Tabs.Screen name="friends" options={{title:"Friends"}} />
            <Tabs.Screen name="profile" options={{title:"Profile"}} />
        </Tabs>
    )
}