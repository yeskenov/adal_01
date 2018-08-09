import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator
} from "react-native";

//import { SearchBar } from "react-native-elements";

import data from "../bird.js";

export default class Additives extends Component {
  static navigationOptions = {
    title: "Курица",
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 5
    },
    headerStyle: {
      height: 50,
      backgroundColor: "white",
      shadowColor: "black",
      shadowRadius: 5,
      shadowOpacity: 0.2,
      shadowOffset: {
        height: 3,
        width: 0
      }
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
      filteredData: [],
      text: ""
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.setState(
      {
        isLoading: false,
        data: data.restaurants
      },
      function() {
        this.arrayholder = data.restaurants;
      }
    );
  }

  SearchFilterFunction = text => {
    const newData = this.state.data.filter(restaurants => {
      const itemName = restaurants.name.toUpperCase();
      // const descrip = restaurants.contact.toUpperCase();
      // const statusCheck = eNumber.status.toUpperCase();
      const textData = text.toUpperCase();

      return itemName.indexOf(textData) > -1; //|| descrip.indexOf(textData) > -1 || statusCheck.indexOf(textData) > -1;;
    });

    this.setState({
      filteredData: newData,
      text: text
    });
  };

  certifImage = data => {
    if (data.certif === "kmdb") {
      return require("../images/kmdb.png");
    } else {
      return require("../images/halal.png");
    }
  };

  render() {
    const { isLoading, filteredData, data, text } = this.state;
    const target = text === "" ? data : filteredData;

    if (isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        {/* <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          //onClear={someMethod}
          placeholder="Type Here..."
        /> */}

        <TextInput
          style={styles.TextInputStyleClass}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={text}
          underlineColorAndroid="transparent"
          placeholder="Поиск"
        />

        <FlatList
          data={target}
          renderItem={({ item }) => (
            <View style={styles.main}>
              <Image source={item.imageUri} style={styles.image} />
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={styles.title}> {item.name} </Text>
                <Text style={styles.adressStyle}>Адрес: {item.adress} </Text>
                <Text style={styles.content}>{item.cuisine}</Text>
              </View>
              <Image style={styles.imgCertif} source={this.certifImage(item)} />
            </View>
          )}
          keyExtractor={item => item.contact}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,

    backgroundColor: "#f4f9ff"
  },

  TextInputStyleClass: {
    marginTop: 8,
    margin: 5,
    textAlign: "center",
    height: 40,
    
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2
  },

  content: {
    //textAlign: "center",
    fontSize: 12,
    marginLeft: 10,
    
  },

  adressStyle: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 10,

  },

  main: {
    flex: 1,
    flexDirection: "row",
    //borderWidth: 1,
    margin: 5,
    borderRadius: 4,
    borderColor: "grey",
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: "white"
  },
  image: {
    height: 100,
    width: 100,
    margin: 3
  },
  title: {
    padding: 5,
    fontSize: 15,
    fontWeight: "bold"
  },
  imgCertif: {
    height: 60,
    width: 60,
    margin: 5
  }
});
