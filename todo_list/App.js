import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { ImageBackground } from "react-native";

import Task from "./Components/Task";

export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/*Today's tasks*/}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            Today's <Text style={styles.Tasks}>Tasks</Text>
          </Text>

          <View style={styles.items}>
            {/*This is where the tasks will go!*/}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/* <ImageBackground
          style={{ flex: 1 }}
          source={{
            uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c5WT60bcaQ975ACQGWPzzAHaF4%26pid%3DApi&f=1",
          }}
        ></ImageBackground> */}
        {/*Write a task*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addwrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6F00",
    textAlign: "center",
  },
  Tasks: {
    color: "white",
  },
  items: {
    margin: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#ff6f00",
    borderWidth: 1,
    width: 250,
  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ff6f00",
    borderWidth: 1,
  },
  addText: {},
});
