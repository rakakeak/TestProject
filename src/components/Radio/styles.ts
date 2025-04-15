import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioTitle: {
    marginHorizontal: 10,
    fontSize: 12,
  },
  borderRadio: {
    height: 20,
    width: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF5000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeRadio: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#FF5000',
  },
});
