import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Container, Header, Body, CheckBox, Title, Card, CardItem, Left, Right, Icon, Content } from 'native-base';
import { Button, Image } from 'react-native-elements';
import AdvButton from './button';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state={
    one:false,
    two:false,
    three:false,
    four:false,
    five:false,
  }

  whichPressed(x){
    if (this.state[x] == false){
      this.setState({[x]: true});
    } else {
      this.setState({[x]: false});
    } 
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
            placeholder= 'Other: enter another activity!'/>
          </CardItem>

          <View style={{marginVertical:5}}></View>

        </Card>
        
        <View style={{marginVertical:20}}></View>

        <AdvButton text="Advance!" onPress={() => navigate('Profile')}/>

      </View>
    );
  } 
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigate('Home')}>Return To Home Screen</Text>
      </View>
    );
    }
}

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
});

export default createAppContainer(AppNavigator);