import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 30
  },

  logo: {
    alignSelf: 'center'
  },

  input: {
    backgroundColor: '#fff',
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 30
  },

  button: {
    backgroundColor: '#7159c1',
    height: 48,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  }
});

export default styles;
