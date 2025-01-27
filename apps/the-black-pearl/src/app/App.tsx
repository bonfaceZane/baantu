/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView
          ref={scrollViewRef}
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
              Welcome TheBlackPearl 👋
            </Text>
          </View>
          <View className="mt-8 px-8">
            <View className="bg-[#143055] rounded-3xl p-12 mb-8">
              <View className="flex flex-row">
                <Svg
                  width={32}
                  height={32}
                  stroke="hsla(162, 47%, 50%, 1)"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </Svg>
                <Text className="text-white text-2xl ml-4">
                  You're up and running
                </Text>
              </View>
              <TouchableOpacity
                className="bg-white p-6 rounded-2xl mt-8 w-1/2"
                onPress={() => {
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: whatsNextYCoord,
                  });
                }}
              >
                <Text className="text-black text-lg text-center">
                  What's next?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-8 px-8">
            <View className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
              <Text className="text-black text-2xl mb-4">
                Learning materials
              </Text>
              <TouchableOpacity
                className="flex flex-row items-center mb-8"
                onPress={() =>
                  Linking.openURL(
                    'https://nx.dev/getting-started/intro?utm_source=nx-project'
                  )
                }
              >
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-lg">Documentation</Text>
                  <Text className="text-gray-500 text-xs">
                    Everything is in there
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-auto"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row items-center mb-8"
                onPress={() =>
                  Linking.openURL('https://nx.dev/blog/?utm_source=nx-project')
                }
              >
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-lg">Blog</Text>
                  <Text className="text-gray-500 text-xs">
                    Changelog, features & events
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-auto"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row items-center mb-8"
                onPress={() =>
                  Linking.openURL(
                    'https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project'
                  )
                }
              >
                <Svg width={24} height={24} fill="#000000" viewBox="0 0 24 24">
                  <Path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-lg">Youtube channel</Text>
                  <Text className="text-gray-500 text-xs">
                    Nx Show, talks & tutorials
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-auto"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row items-center mb-8"
                onPress={() =>
                  Linking.openURL(
                    'https://nx.dev/nx-api/expo/documents/overview'
                  )
                }
              >
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-lg">
                    Interactive tutorials
                  </Text>
                  <Text className="text-gray-500 text-xs">
                    Create an app, step by step
                  </Text>
                </View>
                <Svg
                  width={18}
                  height={18}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-auto"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-8 px-8">
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://nx.dev/nx-cloud?utm_source=nx-project')
              }
            >
              <View className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
                <Svg width={48} height={48} fill="#000000" viewBox="0 0 24 24">
                  <Path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-lg font-bold mb-2">
                    Nx is open source
                  </Text>
                  <Text className="text-gray-500 text-xs">
                    Love Nx? Give us a star!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-8 px-8">
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project'
                )
              }
            >
              <View className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
                <Svg
                  width={48}
                  height={48}
                  fill="rgba(0, 122, 204, 1)"
                  viewBox="0 0 24 24"
                >
                  <Path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-lg font-bold mb-2">
                    Install Nx Console for VSCode
                  </Text>
                  <Text className="text-gray-500 text-xs">
                    The official VSCode extension for Nx.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-8 px-8">
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://plugins.jetbrains.com/plugin/21060-nx-console'
                )
              }
            >
              <View className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
                <Svg width={48} height={48} viewBox="20 20 60 60">
                  <Path d="m22.5 22.5h60v60h-60z" />
                  <G fill="#fff">
                    <Path d="m29.03 71.25h22.5v3.75h-22.5z" />
                    <Path d="m28.09 38 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.44 1.06-1.31v-5.98h2.58v6a3.48 3.48 0 0 1 -.87 2.6 3.56 3.56 0 0 1 -2.57.95 3.84 3.84 0 0 1 -3.34-1.55z" />
                    <Path d="m36 30h7.53v2.19h-5v1.44h4.49v2h-4.42v1.49h5v2.21h-7.6z" />
                    <Path d="m47.23 32.29h-2.8v-2.29h8.21v2.27h-2.81v7.1h-2.6z" />
                    <Path d="m29.13 43.08h4.42a3.53 3.53 0 0 1 2.55.83 2.09 2.09 0 0 1 .6 1.53 2.16 2.16 0 0 1 -1.44 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.61-1.31 2.59-3.55 2.59h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.24c.79 0 1.25-.26 1.25-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86 0-.5-.4-.87-1.27-.87z" />
                    <Path d="m38 43.08h4.1a4.19 4.19 0 0 1 3 1 2.93 2.93 0 0 1 .9 2.19 3 3 0 0 1 -1.93 2.89l2.24 3.27h-3l-1.88-2.84h-.87v2.84h-2.56zm4 4.5c.87 0 1.39-.43 1.39-1.11 0-.75-.54-1.12-1.4-1.12h-1.44v2.26z" />
                    <Path d="m49.59 43h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.69h-2.71zm2.27 5.73-1-2.65-1.06 2.65z" />
                    <Path d="m56.46 43.05h2.6v9.37h-2.6z" />
                    <Path d="m60.06 43.05h2.42l3.37 5v-5h2.57v9.37h-2.26l-3.53-5.14v5.14h-2.57z" />
                    <Path d="m68.86 51 1.45-1.73a4.84 4.84 0 0 0 3 1.13c.71 0 1.08-.24 1.08-.65 0-.4-.31-.6-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.37-3 3.62-3a5.89 5.89 0 0 1 3.86 1.25l-1.26 1.84a4.63 4.63 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .42.32.61 1.63.91 2.14.46 3.44 1.16 3.44 2.91 0 1.91-1.51 3-3.79 3a6.58 6.58 0 0 1 -4.35-1.5z" />
                  </G>
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-lg font-bold mb-2">
                    Install Nx Console for JetBrains
                  </Text>
                  <Text className="text-gray-500 text-xs">
                    Available for WebStorm, Intellij IDEA Ultimate and more!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-8 px-8">
            <View className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
              <Svg
                width={48}
                height={48}
                role="img"
                stroke="currentColor"
                fill="transparent"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeWidth="2"
                  d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
                />
                <Path
                  strokeWidth="2"
                  d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
                />
              </Svg>
              <View className="ml-4">
                <Text className="text-black text-lg font-bold mb-2">
                  Nx Cloud
                </Text>
                <Text className="text-gray-500 text-sm">
                  Enable faster CI & better DX
                </Text>
              </View>
              <View className="mt-4">
                <Text className="text-gray-500 text-xs">
                  Your Nx Cloud remote cache setup is almost complete.
                </Text>
              </View>
              <TouchableOpacity
                className="bg-[#143055] p-4 rounded-2xl mt-6 w-1/2"
                onPress={() => {
                  Linking.openURL('https://cloud.nx.app/connect/KtpoDFJcIk');
                }}
              >
                <Text className="text-white text-lg text-center">
                  Click here to finish
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            className="mt-8 px-8"
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              setWhatsNextYCoord(layout.y);
            }}
          >
            <View className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
              <Text className="text-black text-2xl mb-4">Next steps</Text>
              <Text className="text-gray-500 text-sm mb-4">
                Here are some things you can do with Nx:
              </Text>
              <View className="flex flex-row items-center mb-8">
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-sm">
                    Build, test and lint your app
                  </Text>
                </View>
              </View>
              <View className="bg-[#373f54] p-6 rounded-2xl mb-8">
                <Text className="text-white text-xs font-mono mb-2">
                  # Build
                </Text>
                <Text className="text-white text-xs font-mono mb-4">
                  nx build TheBlackPearl
                </Text>
                <Text className="text-white text-xs font-mono mb-2">
                  # Test
                </Text>
                <Text className="text-white text-xs font-mono mb-4">
                  nx test TheBlackPearl
                </Text>
                <Text className="text-white text-xs font-mono mb-2">
                  # Lint
                </Text>
                <Text className="text-white text-xs font-mono">
                  nx lint TheBlackPearl
                </Text>
                <Text className="text-white text-xs font-mono mt-4 mb-2">
                  # Run them together!
                </Text>
                <Text className="text-white text-xs font-mono mb-4">
                  nx run-many -p TheBlackPearl -t build test lint
                </Text>
              </View>
              <View className="flex flex-row items-center mb-8">
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-sm">
                    View project details
                  </Text>
                </View>
              </View>
              <View className="bg-[#373f54] p-6 rounded-2xl mb-8">
                <Text className="text-white text-xs font-mono">
                  nx show project TheBlackPearl
                </Text>
              </View>
              <View className="flex flex-row items-center mb-8">
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-sm">
                    View interactive project graph
                  </Text>
                </View>
              </View>
              <View className="bg-[#373f54] p-6 rounded-2xl mb-8">
                <Text className="text-white text-xs font-mono">nx graph</Text>
              </View>
              <View className="flex flex-row items-center mb-8">
                <Svg
                  width={24}
                  height={24}
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <View className="ml-4">
                  <Text className="text-black text-sm">Add UI library</Text>
                </View>
              </View>
              <View className="bg-[#373f54] p-6 rounded-2xl mb-8">
                <Text className="text-white text-xs font-mono mb-2">
                  # Generate UI lib
                </Text>
                <Text className="text-white text-xs font-mono mb-4">
                  nx g @nx/react-native:lib ui
                </Text>
                <Text className="text-white text-xs font-mono mb-2">
                  # Add a component
                </Text>
                <Text className="text-white text-xs font-mono">
                  nx g @nx/react-native:component ui/src/lib/button
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-center mt-8">
              <Text className="text-gray-500 text-xs">
                Carefully crafted with
              </Text>
              <Svg
                width={24}
                height={24}
                fill="rgba(252, 165, 165, 1)"
                stroke="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </Svg>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
