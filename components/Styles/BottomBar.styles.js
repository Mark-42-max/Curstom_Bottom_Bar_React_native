import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    //marginBottom: '5%',
    //paddingHorizontal: '3%',
  },

  bottomBarContainer: {
    height: 100,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    width: Dimensions.get('screen').width / 2 - 30,
    height: '100%',
    backgroundColor: '#000',
    borderTopRightRadius: 30,
  },

  right: {
    width: Dimensions.get('screen').width / 2 - 30,
    height: '100%',
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
  },

  navsContainer: {
    position: 'absolute',
    width: '90%',
    height: 100 - 30,
    backgroundColor: '#000',
    alignSelf: 'center'
  },

  navMidButton: {
    position: 'absolute',
    alignSelf: 'center',
    width: 20,
    height: 20,
    backgroundColor: 'red',
    bottom: 0,
  }
});
