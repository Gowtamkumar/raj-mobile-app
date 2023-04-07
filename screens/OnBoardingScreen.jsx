import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Gaming from '../assets/gaming.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function OnboardingScreen({ navigation }) {


  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            // fontFamily: 'Inter-Bold',
            // fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
          }}>
          GAMEON
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Gaming
          width={300}
          height={300}
          style={{ transform: [{ rotate: '-15deg' }] }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            // fontFamily: 'Roboto-MediumItalic',
          }}
        >
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

