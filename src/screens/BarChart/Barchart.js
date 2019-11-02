import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AnimatedBar from "react-native-animated-bar";
class Barchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Barchart </Text>
        <View>
                <AnimatedBar
          progress={this.state.progress}
          height={25}
          borderColor="#DDD"
          fillColor="tomato"
          barColor="red"
          borderRadius={25}
        />
      </View>
      </View>
    );
  }
}

export default Barchart;
