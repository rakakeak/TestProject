import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    borderColor: 'white',
  },
  colorSuccess: {
    width: 8,
    backgroundColor: 'green',
    height: 90,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  colorPending: {
    width: 8,
    backgroundColor: '#FF5000',
    height: 90,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  contentData: {
    flex: 1,
    paddingHorizontal: 10,
  },
  senderText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameText: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
  },
  contentDatePrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  statusPending: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'orange',
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  textPending: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  statusSuccess: {
    borderRadius: 6,
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  textSuccess: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
});
