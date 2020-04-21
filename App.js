import React, {Component} from 'react';
import { Platform, View, Text, StyleSheet, ActivityIndicator, TextInput, Picker, Alert, YellowBox} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Container, Header, Body, CheckBox, Title, Card, CardItem, Left, Right, Content } from 'native-base';
import { Button, Image } from 'react-native-elements';
import AdvButton from './button';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import { AntDesign } from 'react-native-vector-icons';

//nothing is global!!!! so make variables
//same "principles" often apply...

var usersChoice;
var wantCoding;
var wantCooking;
var wantInstrument;
var wantLanguage;
var wantOther;

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      one:false,
      two:false,
      three:false,
      four:false,
      five:false,
      TextInputValue: ''
    }
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

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Image source={require('./assets/cover.png')} style={{ width: 400, height: 100 }}/>
      
        <Card>

          <CardItem header style={{width: 300}}>
            <Text>Welcome! Productivize is designed to help you make the best use
               of your time in the weird current world we're living in. Select some 
               skills you would like to learn to get started!</Text>
          </CardItem>

          <CardItem body>
            <CheckBox color='#74b53d' checked={this.state.one}
            onPress={() => this.whichPressed("one")}
            style={{marginRight:20}}
            />
            <Text>Coding</Text>
          </CardItem>

          <CardItem body>
            <CheckBox color='#74b53d' checked={this.state.two}
            onPress={() => this.whichPressed("two")}
            style={{marginRight:20}}
            />
            <Text>Cooking</Text>
          </CardItem>

          <CardItem body>
            <CheckBox color='#74b53d' checked={this.state.three}
            onPress={() => this.whichPressed("three")}
            style={{marginRight:20}}
            />
            <Text>Playing an Instrument</Text>
          </CardItem>

          <CardItem body>
            <CheckBox color='#74b53d' checked={this.state.four}
            onPress={() => this.whichPressed("four")}
            style={{marginRight:20}}
            />
            <Text>Learning a Language</Text>
          </CardItem>

          <CardItem body>
            <CheckBox color='#74b53d' checked={this.state.five}
            onPress={() => this.whichPressed("five")}
            style={{marginRight:20}}
            />
            <TextInput style={{borderWidth: 1, borderColor: '#777', paddingHorizontal: 8 , width:200}}
            placeholder= 'Other: enter another activity!' onChangeText={TextInputValue=>this.setState({TextInputValue})}/>
          </CardItem>

          <View style={{marginVertical:5}}></View>

        </Card>
        
        <View style={{marginVertical:20}}></View>

        <AdvButton text="Advance!" onPress={() => {

          if (this.state["one"]==true || this.state["two"]==true || this.state["three"]==true || this.state["four"]==true || this.state["five"]==true){
            navigate('Next');
          }

          this.gettingWhatUserTyped();

          this.gettingStatesOfCheckboxes();

        }}/>

      </View>
    );
  } 
}

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Next',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <MenuProvider style={{ padding: 30 }}>

        <Menu onSelect={value => alert(`You clicked: ${value}`)}>
    
          <MenuTrigger>
            <Card
              style={{
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              }}>

                <Text style={styles.headerText}>Select an Activity!</Text>
                <AntDesign name='downcircleo'/>

            </Card>
          </MenuTrigger >
              
          <View style={{alignItems: 'center'}}>
            <Text style={{paddingVertical: 50}} onPress={() => navigate('Home')}>Return</Text>
          </View>

        

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

const styles = StyleSheet.create({
  headerText: {
  fontSize: 15,
  margin: 10,
},
  menuContent: {
  color: "#000",
  padding: 2,
  fontSize: 15
}
});

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Next: {
    screen: SecondScreen
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
*/