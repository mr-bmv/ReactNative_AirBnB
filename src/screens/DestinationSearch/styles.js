import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    backgroundColor: 'white'
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    width: 40,
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
    alignItems: "center"
  },
  locationText: {
    fontSize: 17
  }
});

export default styles;
