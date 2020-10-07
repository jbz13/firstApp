import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FacultyList from "./src/screens/FacultyList";
import Profile from "./src/screens/Profile";
import SemesterScreen from "./src/screens/SemesterScreen";
import FirstSem from "./src/screens/FirstSem";
import SecondSem from "./src/screens/SecondSem";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="Faculty" component={FacultyList} />
            <stack.Screen name="Profile" component={Profile} />
            <stack.Screen name="Semesters" component={SemesterScreen} />
            <stack.Screen name="FirstSem" component={FirstSem} />
            <stack.Screen name="SecondSem" component={SecondSem} />
        </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
