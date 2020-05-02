import React, {Component, useState} from 'react';
import { Platform, View, Text, StyleSheet,TouchableOpacity, ActivityIndicator,  Picker, Alert, YellowBox, SafeAreaView, ScrollView, Dimensions,TextInput } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Container, Header, Body, CheckBox, Title, Card, CardItem, Left, Right, Content, Drawer } from 'native-base';
import { Button, Image } from 'react-native-elements';
import AdvButton from './button';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { AntDesign, Feather } from 'react-native-vector-icons';
import { WebView } from 'react-native-webview';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

//nothing is global!!!! so make variables
//same "principles" often apply...


//change AntDesign size



var usersChoice;
var passedStart=false;

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
<LinearGradient
colors = {['#fff','#95d65e']}
style={{
           position: 'absolute',
           left: 0,
           right: 0,
           top: 0,
           height: "100%",
         }}
/>

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
            this.gettingStatesOfCheckboxes();
            navigate('Next');
            alert('Congratulations on selecting your first activities! Using the navigation sidebar, you can choose whether you want to view your achievements, view your statistics, start an existing activity, or add a completely new activity. Once you click "OK" here, you will be taken to the screen in which you can start one of the activities that you just selected using the dropdown menu. Once you do that, you will be able to start learning that activity, record time doing that activity, or journal about what you are doing. Happy achieving!')
            whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
            passedStart=true;
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

class MoreActivitiesThanInitiallyScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      one:wantCoding,
      two:wantCooking,
      three:wantInstrument,
      four:wantLanguage,
      five:wantOther,
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
    title: 'MoreActivities',
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


          <Image source={require('./assets/cover.png')} style={{ width: 400, height: 100 }}/>

        <Card style={{backgroundColor: '#eff9e7'}}>

          <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
            <Text style={{fontSize: 15., fontFamily: 'best-font',}}>Here you can select more skills or uncheck ones you have already selected. You can add custom activities as well (up to 3).</Text>
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
            this.gettingStatesOfCheckboxes();
            navigate('Next');
            //alert('Congratulations on selecting your first activities! Using the navigation sidebar, you can choose whether you want to view your achievements, view your statistics, start an existing activity, or add a completely new activity. Once you click "OK" here, you will be taken to the screen in which you can start one of the activities that you just selected using the dropdown menu. Once you do that, you will be able to start learning that activity, record time doing that activity, or journal about what you are doing. Happy achieving!')
            whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
            console.log(wantCoding);
            passedStart=true;
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
            navigate('Other')
          }

        }}>

          <MenuTrigger>
            <View style={{alignItems: 'center', flexDirection:'row',}}>

            <Feather name='menu' size={25} onPress={()=> this.props.navigation.openDrawer()} style={{marginRight: '8%',}}/>

            <View style={{alignItems:'center'}}>
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
            </View>
          </MenuTrigger>



          {whichMotivationalMessage===1 &&
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{paddingVertical:75, fontSize: 75, fontFamily: 'best-font', width: 300}} onPress={() => navigate('Home')}>What will you achieve today?</Text>
          </View>}

          {whichMotivationalMessage===2 &&
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{paddingVertical:75, fontSize: 75 , fontFamily: 'best-font', width: 300}} onPress={() => navigate('Home')}>You got it!</Text>
          </View>}

          {whichMotivationalMessage===3 &&
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{paddingVertical:75, fontSize: 75, fontFamily: 'best-font',width: 300}} onPress={() => navigate('Home')}>Trust the process.</Text>
          </View>}



          <MenuOptions>
            {wantCoding === true &&
            <MenuOption value={"Coding"}>
              <Text style={styles.menuContent}>Coding</Text>
            </MenuOption>}

            {wantCooking === true &&
            <MenuOption value={"Cooking"}>
              <Text style={styles.menuContent}>Cooking</Text>
            </MenuOption>}

            {wantInstrument === true &&
            <MenuOption value={"Playing an Instrument"}>
              <Text style={styles.menuContent}>Playing an Instrument</Text>
            </MenuOption>}

            {wantLanguage === true &&
            <MenuOption value={"Learning a Language"}>
              <Text style={styles.menuContent}>Learning a Language</Text>
            </MenuOption>}

            {wantOther === true &&
            <MenuOption value={usersChoice}>
              <Text style={styles.menuContent}>{usersChoice}</Text>
            </MenuOption>}

          </MenuOptions>

        </Menu>
      </MenuProvider>

      </View>
    );
    }
}


class CodingScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
             min: 0,
             sec: 0,
             msec: 0
         }
  }
  static navigationOptions  = {
    title:'Coding'
  }
  handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };


    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 100) {
                    this.setState({
                        msec: this.state.msec + 2
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
      if(this.state.sec >0){
        alert('you have been practicing for ' + this.state.sec + 'seconds')
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });
        clearInterval(this.interval);
}
    };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
      <WebView
        style={{height: "22.5%", width: 225, marginVertical: "70%", bottom:"12%" }}
        javaScriptEnabled={true}
        startInLoadingState={true}

        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/cKhVupvyhKk' }}

      />
      <Button
      style = {{top:"-180%"}}
      title = {!this.state.start? 'Start time': 'Pause Activity'}
      onPress = {this.handleToggle
      }
      />
      <Button
      style = {{top:"-100%",bottom:"15%"}}
      title = {'Stop and Log'}
      onPress = {this.handleReset
      }
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
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
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
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
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
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
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
      <LinearGradient
      colors = {['#fff','#95d65e']}
      style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: "100%",
               }}
      />
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
      <Text onPress={() => navigate('Home')}>This is achievements...Return To Home Screen</Text>

      </View>
    );
  }}
  class Logbook extends React.Component{
    static navigationOptions  = {
      title:'Journal/Log'
    }
    render() {
      const {navigate} = this.props.navigation;
      this.state = {
        writer:''
      }

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
        colors = {['#fff','#95d65e']}
        style={{
                   position: 'absolute',
                   left: 0,
                   right: 0,
                   top: 0,
                   height: "100%",
                 }}
        />
        <View style = {{width:"90%",
   backgroundColor:"#fff",
   borderRadius:25,
   height:"85%",
   marginBottom:"10%",
   justifyContent:"center",
   padding:20,
   top:"1%"}}>

        <TextInput
            style={{ height:50,
   color:"black",
 top:"-49%"}}
            placeholder = " Begin writing about your experiences here..."
            placeholderTextColor="silver"
            onChangeText={writer => this.setState({writer })}

       />
        </View>
        </View>
      );
    }
  }

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

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#eff9e7'}}>
    <View style={{height:150, backgroundColor: '#eff9e7', alignItems:'center', justifyContent: 'center'}}>
      <Image source={require('./assets/splash.png')} style={{height: 120, width: 120}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const DrawerNavigator = createDrawerNavigator({
  Next: {
    screen: SecondScreen
  },
  Achievement: {
    screen: AchievementScreen
  },
  MoreActivities: {
    screen: MoreActivitiesThanInitiallyScreen
  },
  Logbook:{
    screen:Logbook
  }

}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    labelStyle: {
      fontFamily: 'best-font',
      fontWeight: 'normal',
      fontSize: 15,
    },
  },
}
)

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Next: {
    screen: DrawerNavigator
},
Coding:
  {
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
    screen:DrawerNavigator
  },
  MoreActivities: {
    screen: DrawerNavigator
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

  class MoreActivitiesThanInitiallyScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      one:wantCoding,
      two:wantCooking,
      three:wantInstrument,
      four:wantLanguage,
      five:wantOther,
      TextInputValue: usersChoice,
      six:wantOther2,
      TextInputValue2: usersChoice2,
      seven:wantOther3,
      TextInputValue3: usersChoice3
    }
  }

  whichPressed(x){
    if (this.state[x] == false){
      this.setState({[x]: true});
    } else {
      this.setState({[x]: false});
    }
  }

  gettingWhatUserTyped(){
    usersChoice = this.state.TextInputValue
    usersChoice2 = this.state.TextInputValue2
    usersChoice3 = this.state.TextInputValue3
  }

  settingVarsToStatesOfCheckboxes(){
    wantCoding=this.state.one;
    wantCooking=this.state.two;
    wantInstrument=this.state.three;
    wantLanguage=this.state.four;
    wantOther=this.state.five;
    wantOther2=this.state.six
    wantOther3=this.state.seven
  }

  static navigationOptions  = {
    title:'MoreActivities'
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>

        <Card style={{backgroundColor: '#eff9e7'}}>

          <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
            <Text style={{fontSize: 15., fontFamily: 'best-font',}}>Here you can choose more activities
             that you would like to take up that
            you may not have chosen initially. You can also add up to three custom activities.</Text>
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

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.six}
            onPress={() => this.whichPressed("six")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize: 15., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue2=>this.setState({TextInputValue2})}/>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.seven}
            onPress={() => this.whichPressed("seven")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize: 15., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue3=>this.setState({TextInputValue3})}/>
          </CardItem>

          <View style={{marginVertical:5}}></View>

        </Card>

        <View style={{marginVertical:20}}></View>

        <AdvButton text="Save" onPress={() => {
          this.gettingWhatUserTyped();
          if ((this.state["five"]==true && usersChoice=="")||(this.state["six"]==true && usersChoice2=="")||((this.state["seven"]==true && usersChoice3==""))){
            return;
          }
          if ((this.state["one"]==true || this.state["two"]==true || this.state["three"]==true || this.state["four"]==true || this.state["five"]==true || this.state["six"]==true || this.state["seven"]==true)&&(usersChoice!=="Coding" && usersChoice!=="Cooking" && usersChoice!=="Playing an Instrument" && usersChoice!=="Learning a Language")||(usersChoice2!=="Coding" && usersChoice2!=="Cooking" && usersChoice2!=="Playing an Instrument" && usersChoice2!=="Learning a Language")||(usersChoice3!=="Coding" && usersChoice3!=="Cooking" && usersChoice3!=="Playing an Instrument" && usersChoice3!=="Learning a Language")){
            this.settingVarsToStatesOfCheckboxes();
            navigate('Next');
            whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
          }
        }}/>
        </View>
    );
    }
}

class MoreActivitiesThanInitiallyScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      one2:wantCoding,
      two2:wantCooking,
      three2:wantInstrument,
      four2:wantLanguage,
      five2:wantOther,
      TextInputValue1: usersChoice,
      six:wantOther2,
      TextInputValue2: usersChoice2,
      seven:wantOther3,
      TextInputValue3: usersChoice3
    }
  }

  whichPressed(x){
    if (this.state[x] == false){
      this.setState({[x]: true});
    } else {
      this.setState({[x]: false});
    }
  }

  gettingWhatUserTypedAgain(){
    usersChoiceAgain = this.state.TextInputValue1
    usersChoice2 = this.state.TextInputValue2
    usersChoice3 = this.state.TextInputValue3
  }

  settingVarsToStatesOfCheckboxes(){
    wantCodingAgain=this.state.one2;
    wantCookingAgain=this.state.two2;
    wantInstrumentAgain=this.state.three2;
    wantLanguageAgain=this.state.four2;
    wantOtherAgain=this.state.five2;
    wantOther2=this.state.six2;
    wantOther3=this.state.seven2;
  }

  static navigationOptions  = {
    title:'MoreActivities'
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>

        <Card style={{backgroundColor: '#eff9e7'}}>

          <CardItem header style={{width: 300, backgroundColor: '#eff9e7'}}>
            <Text style={{fontSize: 15., fontFamily: 'best-font',}}>Here you can choose more activities
             that you would like to take up that
            you may not have chosen initially. You can also add up to three custom activities.</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.one2}
            onPress={() => this.whichPressed("one2")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Coding</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.two2}
            onPress={() => this.whichPressed("two2")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Cooking</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.three2}
            onPress={() => this.whichPressed("three2")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Playing an Instrument</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.four2}
            onPress={() => this.whichPressed("four2")}
            style={{marginRight:20}}
            />
            <Text style={{fontSize: 15., fontFamily: 'best-font'}}>Learning a Language</Text>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.five2}
            onPress={() => this.whichPressed("five2")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize: 15., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue1=>this.setState({TextInputValue1})}/>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.six2}
            onPress={() => this.whichPressed("six2")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize: 15., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue2=>this.setState({TextInputValue2})}/>
          </CardItem>

          <CardItem body style={{backgroundColor: '#eff9e7'}}>
            <CheckBox color='#74b53d' checked={this.state.seven2}
            onPress={() => this.whichPressed("seven2")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:210, fontSize: 15., fontFamily: 'best-font'}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue3=>this.setState({TextInputValue3})}/>
          </CardItem>

          <View style={{marginVertical:5}}></View>

        </Card>

        <View style={{marginVertical:20}}></View>

        <AdvButton text="Save" onPress={() => {
          this.gettingWhatUserTypedAgain();
          if ((this.state["five2"]==true && usersChoiceAgain=="")||(this.state["six2"]==true && usersChoice2=="")||((this.state["seven2"]==true && usersChoice3==""))){
            return;
          }
          if ((this.state["one2"]==true || this.state["two2"]==true || this.state["three2"]==true || this.state["four2"]==true || this.state["five2"]==true || this.state["six2"]==true || this.state["seven2"]==true)&&(usersChoiceAgain!=="Coding" && usersChoiceAgain!=="Cooking" && usersChoiceAgain!=="Playing an Instrument" && usersChoiceAgain!=="Learning a Language")||(usersChoice2!=="Coding" && usersChoice2!=="Cooking" && usersChoice2!=="Playing an Instrument" && usersChoice2!=="Learning a Language")||(usersChoice3!=="Coding" && usersChoice3!=="Cooking" && usersChoice3!=="Playing an Instrument" && usersChoice3!=="Learning a Language")){
            this.settingVarsToStatesOfCheckboxes();
            navigate('Next');
            whichMotivationalMessage= (Math.floor(Math.random()*3)+1);
          }
        }}/>
        </View>
    );
    }
}

  */
