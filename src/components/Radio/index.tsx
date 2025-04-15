import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type RadioButtonProps = {
  onPress: () => void;
  selected: boolean;
  title: string;
};

const RadioButton = React.memo(
  ({onPress, selected, title}: RadioButtonProps) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.borderRadio}>
          {selected && <View style={styles.activeRadio} />}
        </View>
        <Text style={styles.radioTitle}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

export default RadioButton;
