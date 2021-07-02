import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";



class ButtonView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycles

  // Component Functions

  render() {
    const { text, onPress } = this.props;

    return (
			<TouchableOpacity onPress={() => onPress()} style={{ backgroundColor: "tomato"}}>
				<Text>{text}</Text>
			</TouchableOpacity>
    );
  }
}

export default ButtonView;
