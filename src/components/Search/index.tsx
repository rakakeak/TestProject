import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type SearchProps = {
  placeholder: string;
  value: string;
  onPress: () => void;
  onChangeText: (text: string) => void;
  label: string;
};

const Search: React.FC<SearchProps> = ({
  placeholder,
  value,
  onPress,
  onChangeText,
  label,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onPress} style={styles.containerSort}>
        <Text style={styles.textSort}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
