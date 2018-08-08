import React, { Component } from "react";

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  
} from "react-native";

import data from "../test.json";

export default class Additives extends Component {
  static navigationOptions = {
    title: "E-Numbers",
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
        data: data.eNumbers
      },
      function() {
        this.arrayholder = data.eNumbers;
      }
    );
  }

  SearchFilterFunction = text => {
    const newData = this.state.data.filter((eNumber) => {
      const itemName = eNumber.number.toUpperCase(); 
      const descrip = eNumber.description.toUpperCase();
      const statusCheck = eNumber.status.toUpperCase();
      const textData = text.toUpperCase();
      
      return itemName.indexOf(textData) > -1 || descrip.indexOf(textData) > -1 || statusCheck.indexOf(textData) > -1;;
    });


    this.setState({
      filteredData: newData,
      text: text
    });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "green",
          opacity: 0.3
        }}
      />
    );
  };

  color = data => {

    if(data.status === 'Сомнительное') {
      return { color: 'blue'};
    }
    else if(data.status === 'Halal' || data.status === 'Халяль') {
      return { color: 'green'};
    }
    else {
    return { color:'red' };}
  };
  

  
  render() {
    const { isLoading, filteredData, data, text } = this.state;
    const target = (text === '') ? data : filteredData;
   
    if (isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <TextInput
          style={styles.TextInputStyleClass}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={text}
          underlineColorAndroid="transparent"
          placeholder="Search"
        />

        <FlatList
          data={target}
          renderItem={({ item }) => (
            <View style={styles.main} >
              <Text style={styles.numStyle}>
                <Text style={this.color(item)}>{item.number} - {item.status}</Text>
              </Text>

              <Text style={styles.content}> {item.description} </Text>
            </View>



// <View style={styles.main}>
//             <Image source={imageUri} style={styles.image} />

//             <View style={{ flex: 1, flexDirection: "column" }}>
//               <Text style={styles.title}> {name} </Text>
//               <View style={{ flexDirection: "column" }}>
//                 <Text style={styles.adressStyle}>Адрес: {item.adress} </Text>
//               </View>
//             </View>
//             <View style={{ flexDirection: "column" }}>
//               <Image style={styles.imgCertif} source={this.certifImage(item)} />
//               <Text style={styles.content}>{item.contact}</Text>
//             </View>
//           </View>
          )}

          keyExtractor={item => item.number}
         
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 7,
    marginTop: 10
  },

  rowViewContainer: {
    fontSize: 20,
    padding: 10
    //flexDirection: 'column'
  },

  card: {
    padding: 10,
    flexDirection: "column"
  },
  main: {
    flex: 1,
    flexDirection: "column",
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

  TextInputStyleClass: {
    marginTop: 5,
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
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
  numStyle: {
    fontSize: 25,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,

    //margin: 10,
  }
});