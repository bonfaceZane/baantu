import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="bg-white"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="mt-8 px-8">
          <Text className="text-black text-3xl font-bold">Hello there,</Text>
          <Text
            className="text-black text-5xl font-bold mt-4"
            testID="heading"
            role="heading"
          >
            Welcome to The Black Pearl! ⚓️
          </Text>

          <View className="mt-8">
            <Text className="text-black text-xl mb-4">
              Your next great adventure awaits...
            </Text>

            <TouchableOpacity className="bg-blue-500 rounded-lg p-4 items-center">
              <Text className="text-white font-bold text-lg">Set Sail!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
