import React, { useState } from "react";
import { View, Text, ActivityIndicator, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { showMessage } from "react-native-flash-message";
import RadioInput from "../components/radio-input";
import Input from "../components/input";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";

const OPTIONS = ["Male", "Female"];

export default function Signup({ navigation }) {
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    setLoading(true);
    // const {} = signupData

    console.log("SignUp", name, password, email, gender, age);

    try {
      setLoading(false);
    } catch (error) {
      console.log("error ---> ", error);
      showMessage({
        message: "ERROR!",
        type: "danger",
      });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={{
        alignItems: "center",
        marginTop: 30
      }}>
        <Text style={{ fontSize: 20 }}>Let,s Signup</Text>

      </View>
      <View style={{ margin: 25 }}>
        <Input
          placeholder="Email"
          autoCapitalize={"none"}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Input
          placeholder="Full name"
          autoCapitalize={"words"}
          onChangeText={(text) => setName(text)}
        />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />

        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 15 }}>Select your gender</Text>
          {OPTIONS.map((option, index) => (
            <RadioInput
              key={index}
              label={option}
              value={gender}
              setValue={setGender}
            />
          ))}
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Submit"
            customStyles={{ marginTop: 25, alignSelf: "center" }}
            onPress={signup}
          />
        )}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ marginTop: spacing[2] }}>
        <Text style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Text
            style={{ color: colors.Blue, fontWeight: "bold" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
