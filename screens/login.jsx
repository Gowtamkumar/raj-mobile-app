import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Button,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/input";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { AuthContext } from "../context/AuthContext";

export default function Login({ navigation }) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [formData, setFormData] = useState("");
  const [error, setError] = useState(null);
  const [rightIcon, setRightIcon] = useState("eye-off");

  const { loading, login, logout, authToken } = useContext(AuthContext)

  const handleSubmit = () => {
    // console.log(login);
  };

  console.log("login token", authToken);

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../assets/login-image.png")}
          style={{ alignSelf: "center", height: 200 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Never forget your notes
        </Text>
      </View>

      <View style={{ margin: 25 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(e) => setFormData({ ...formData, email: e })}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            name="password"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            enablesReturnKeyAutomatically
            onChangeText={(e) => setFormData({ ...formData, password: e })}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={20}
              color="#232323"
            />
          </Pressable>
        </View>
        {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}
        <>
          <Button
            title="Login"
            customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
            onPress={() => login()}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.Grey }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: colors.Grey }} />
          </View>


          <TouchableHighlight onPress={() => { }} style={{ backgroundColor: colors.Blue }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, padding: 7 }}>
              <MaterialCommunityIcons
                name={'google'}
                size={20}
                color="white"
              />
              <Text style={{ color: 'white' }} >Login With Google</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { }} style={{ backgroundColor: colors.Blue, marginTop: spacing[2] }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, padding: 7 }}>
              <MaterialCommunityIcons
                name={'facebook'}
                size={20}
                color="white"
              />
              <Text style={{ color: 'white' }} >Login With Facebook</Text>
            </View>
          </TouchableHighlight>

        </>
        {/* {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Button
              title="Login"
              customStyles={{ marginTop: spacing[2], alignSelf: "center" }}
              onPress={() => login()}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: colors.Grey }} />
              <View>
                <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: colors.Grey }} />
            </View>


            <TouchableHighlight onPress={() => { }} style={{ backgroundColor: colors.Blue }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, padding: 7 }}>
                <MaterialCommunityIcons
                  name={'google'}
                  size={20}
                  color="white"
                />
                <Text style={{ color: 'white' }} >Login With Google</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { }} style={{ backgroundColor: colors.Blue, marginTop: spacing[2] }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, padding: 7 }}>
                <MaterialCommunityIcons
                  name={'facebook'}
                  size={20}
                  color="white"
                />
                <Text style={{ color: 'white' }} >Login With Facebook</Text>
              </View>
            </TouchableHighlight>

          </>
        )} */}
      </View>

      <TouchableOpacity onPress={navigateToSignUp} style={{ marginTop: spacing[2] }}>
        <Text style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Text
            style={{ color: colors.Blue, fontWeight: "bold" }}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 16,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 16,

    // backgroundColor: 'white',
    // width: "100%",
    // borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    // borderWidth: 4,
    borderColor: "#d7d7d7",
  },
  googleFacebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    backgroundColor: 'yellow'
  }
});
