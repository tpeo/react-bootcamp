import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  let data = [{backColor: "#EDF8FF", color: "#4CB8FF", title: 'Daily Nutrition', description: 'The Importance of Protein in Recovery', image: require('../assets/images/meat.png')},
  {backColor: "#FFEDEF", color: "#FF4C61", title: 'Daily Fitness', description: 'Walking and Physical Wellness', image: require('../assets/images/walk.png')}]
  return (
    <View style={styles.container}>
      <ScrollView style={[styles.container]} contentContainerStyle={[styles.contentContainer, {alignItems: 'center'}]}>
        <Image source={require('../assets/images/sunrise.png')} />
        <Text style={{fontSize: 30, color: '#FF9900'}}>
          {"Good morning,\ntoday is Day 2"}
        </Text>
        <View style={{backgroundColor: "#FF9900", width: '95%', height: 1, marginTop: 10}}/>
        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 20}}>
          Your Daily Lessons
        </Text>
        <FlatList
          style={{width: '100%', marginTop: 20}}
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={{marginLeft: 10, marginBottom: 10, color: "#8492A6"}}>{item.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{backgroundColor: item.backColor, width: '90%', height: 100, marginBottom: 20, marginLeft: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{margin: 15, width: 50, height: 50}} source={item.image} />
                    <Text style={{marginLeft: 10, marginBottom: 10, color: item.color}}>{item.description}</Text>
                  </View>
                  <Image style={{marginBottom: 15, width: 30, height: 30}} source={require('../assets/images/arrow.png')} />
                </View>
              </View>
            );
        }}
        />
        <View/>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
