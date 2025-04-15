import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  containerSort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSort: {
    textTransform: 'uppercase',
    color: '#FF5000',
    fontWeight: 'bold',
  },
});
