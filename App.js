import React, {Component, useState} from 'react';
import { Platform, View, Text, StyleSheet, ActivityIndicator, TextInput, Picker, Alert, YellowBox} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Container, Header, Body, CheckBox, Title, Card, CardItem, Left, Right, Content, Drawer } from 'native-base';
import { Button, Image } from 'react-native-elements';
import AdvButton from './button';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import { AntDesign } from 'react-native-vector-icons';
import { WebView } from 'react-native-webview';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

//nothing is global!!!! so make variables
//same "principles" often apply...


//change AntDesign size



var usersChoice;
var wantCoding;
var wantCooking;
var wantInstrument;
var wantLanguage;
var wantOther;
var whichMotivationalMessage;

let customFonts = {
  'best-font': require('./assets/fonts/Manrope-Light.ttf'),
};


class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      one:false,
      two:false,
      three:false,
      four:false,
      five:false,
      TextInputValue: '',
      fontsLoaded: false
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  static navigationOptions = {
    title: 'Home',
  };

  whichPressed(x){
    if (this.state[x] == false){
      this.setState({[x]: true});
    } else {
      this.setState({[x]: false});
    }
  }

  gettingWhatUserTyped(){
    usersChoice = this.state.TextInputValue
  }

  gettingStatesOfCheckboxes(){
    wantCoding=this.state.one;
    wantCooking=this.state.two;
    wantInstrument=this.state.three;
    wantLanguage=this.state.four;
    wantOther=this.state.five;
  }

  render() {
    const {navigate} = this.props.navigation;
    const gradientHeight = 600;
    const gradientBackground = '#95d65e';
    const gradientHeight2 = 300;
    const data = Array.from({ length: gradientHeight })
    const data2 = Array.from({ length: gradientHeight2 })

    if (this.state.fontsLoaded) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradientBackground,
              height: 1,
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradientHeight) * (i + 1),
              bottom: (gradientHeight - i - 1)
            }}
          />
          ))}

          <Image source={require('./assets/cover.png')} style={{ width: 400, height: 100 }}/>
      
        <Card style={{backgroundColor: '#eff9e7'}}>

          <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
            <Text style={{fontSize: 15., fontFamily: 'best-font',}}>Welcome! Productivize is designed to help you make the best use
               of your time during these unprecedented circumstances. Select some 
               skills you would like to learn to get started!</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.one}
            onPress={() => this.whichPressed("one")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Coding</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.two}
            onPress={() => this.whichPressed("two")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Cooking</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.three}
            onPress={() => this.whichPressed("three")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Playing an Instrument</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.four}
            onPress={() => this.whichPressed("four")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Learning a Language</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.five}
            onPress={() => this.whichPressed("five")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize: 15., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue=>this.setState({TextInputValue})}/>
          </CardItem>

          <View style={{marginVertical:5}}></View>

        </Card>

        <View style={{marginVertical:20}}></View>

        <AdvButton text="Advance!" onPress={() => {
          this.gettingWhatUserTyped();
          if (this.state["five"]==true && usersChoice==""){
            return;
          }
          if ((this.state["one"]==true || this.state["two"]==true || this.state["three"]==true || this.state["four"]==true || this.state["five"]==true)&&((usersChoice!=="Coding" && usersChoice!=="Cooking" && usersChoice!=="Playing an Instrument" && usersChoice!=="Learning a Language"))){
            navigate('Next');
            this.gettingStatesOfCheckboxes();
            alert('Congratulations on selecting your first activities! Using the navigation sidebar, you can choose whether you want to view your achievements, view your statistics, start an existing activity, or add a completely new activity. Once you click "OK" here, you will be taken to the screen in which you can start one of the activities that you just selected using the dropdown menu. Once you do that, you will be able to start learning that activity, record time doing that activity, or journal about what you are doing. Happy achieving!')
            whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
          }
        }}/>
        </View>
    );
    } else {
      return (
        <AppLoading/>
      )
    }
  } 
}

//implement side nav

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Next',
  };

  render() {
    const {navigate} = this.props.navigation;
    const gradientHeight = 675;
    const gradientBackground = '#95d65e';
    const gradientHeight2 = 300;
    const data = Array.from({ length: gradientHeight })
    const data2 = Array.from({ length: gradientHeight2 })
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradientBackground,
              height: 1,
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradientHeight) * (i + 1),
              bottom: (gradientHeight - i - 1)
            }}
          />
          ))}
        <MenuProvider style={{ padding: 30 }}>

        <Menu onSelect={value => {
          if (value=='Coding'){
            navigate('Coding')
          }

          if (value=='Cooking'){
            navigate('Cooking')
          }

          if (value=='Playing an Instrument'){
            navigate('Instrument')
          }

          if (value=='Learning a Language'){
            navigate('Language')
          }

          if (value==usersChoice){
            navigate('Coding')
          }

        }}>
    
          <MenuTrigger>
            <View style={{alignItems: 'center'}}>
            <Card
              style={{
              width: 200,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#eff9e7'
              }}>

                <Text style={styles.headerText}>Select an Activity!</Text>
                <AntDesign name='downcircleo' size={16} />

            </Card>
            </View>
          </MenuTrigger>

          {whichMotivationalMessage==1?
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{paddingVertical:75, fontSize: 75, fontFamily: 'best-font', width: 300}} onPress={() => navigate('Home')}>What will you achieve today?</Text>
          </View>: null }

          {whichMotivationalMessage==2?
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{paddingVertical:75, fontSize: 75 , fontFamily: 'best-font', width: 300}} onPress={() => navigate('Home')}>You got it!</Text>
          </View>: null }

          {whichMotivationalMessage==3?
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{paddingVertical:75, fontSize: 75, fontFamily: 'best-font',width: 300}} onPress={() => navigate('Home')}>Trust the process.</Text>
          </View>: null }



          <MenuOptions>
            {wantCoding == true?
            <MenuOption value={"Coding"}>
              <Text style={styles.menuContent}>Coding</Text>
            </MenuOption>: null}

            {wantCooking == true?
            <MenuOption value={"Cooking"}>
              <Text style={styles.menuContent}>Cooking</Text>
            </MenuOption>: null}

            {wantInstrument == true?
            <MenuOption value={"Playing an Instrument"}>
              <Text style={styles.menuContent}>Playing an Instrument</Text>
            </MenuOption>: null}

            {wantLanguage == true?
            <MenuOption value={"Learning a Language"}>
              <Text style={styles.menuContent}>Learning a Language</Text>
            </MenuOption>: null}

            {wantOther == true?
            <MenuOption value={"Other"}>
              <Text style={styles.menuContent}>{usersChoice}</Text>
            </MenuOption>: null}

          </MenuOptions>

        </Menu>
      </MenuProvider>

      </View>
    );
    }
}

class CodingScreen extends React.Component{
  static navigationOptions  = {
    title:'Coding'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <WebView
        style={{height: "22.5%", width: 225, marginVertical: "70%", bottom:"12%" }}
        javaScriptEnabled={true}
        startInLoadingState={true}

        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/cKhVupvyhKk' }}

      />
      </View>
    );
    }

}

class CookingScreen extends React.Component{
  static navigationOptions  = {
    title:'Cooking'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigate('Home')}>This is cooking...Return To Home Screen</Text>

      </View>
    );
    }

}

class InstrumentScreen extends React.Component{
  static navigationOptions  = {
    title:'Instrument'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigate('Home')}>This is instrument...Return To Home Screen</Text>

      </View>
    );
    }

}

class LanguageScreen extends React.Component{
  static navigationOptions  = {
    title:'Language'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigate('Home')}>This is learning a language screen...Return To Home Screen</Text>

      </View>
    );
    }

}

class OtherScreen extends React.Component{
  static navigationOptions  = {
    title:'Other'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigate('Home')}>This is other screen...Return To Home Screen</Text>

      </View>
    );
    }

}

class AchievementScreen extends React.Component{
  static navigationOptions  = {
    title:'Achievement'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigate('Home')}>This is cooking...Return To Home Screen</Text>

      </View>
    );
  }}

const styles = StyleSheet.create({
  headerText: {
  fontSize: 18, fontFamily: 'best-font',  margin: 10,
},
  menuContent: {
  color: "#000",
  padding: 2,
  fontSize: 15, fontFamily: 'best-font'
}
});

const DrawerNavigator = createDrawerNavigator({
  Next: {
    screen: SecondScreen
  }
})

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Next: {
    screen: DrawerNavigator
},
  Coding:{
    screen:CodingScreen
  },
  Cooking:{
    screen:CookingScreen
  },
  Instrument:{
    screen:InstrumentScreen
  },
  Language:{
    screen:LanguageScreen
  },
  Other: {
    screen: OtherScreen
  },
  Achievement:{
    screen:AchievementScreen
  }



});

export default createAppContainer(AppNavigator);



/*
if (this.state["one"]==true){
  desiredItems.push("Coding");
} else {
  desiredItems.push("");
}

if (this.state["two"]==true){
  desiredItems.push("Cooking");
} else {
  desiredItems.push("");
}

if (this.state["three"]==true){
  desiredItems.push("Playing an Instrument");
} else {
  desiredItems.push("");
}

if (this.state["four"]==true){
  desiredItems.push("Learning a Language");
} else {
  desiredItems.push("");
}

if (this.state["five"]==true){
  desiredItems.push(this.state.TextInputValue);
}
else {
  desiredItems.push("");
}

{data2.map((_, i) => (
  <View
    key={i}
    style={{
      position: 'absolute',
      backgroundColor: gradientBackground,
      height: 1,
      right: 0,
      left: 0,
      zIndex: 2,
      opacity: (1 / (gradientHeight2*3)) * (i + 1),
      bottom: (gradientHeight2 - i-1),
    }}
  />
  ))}

  */
