import { colors } from './color';

export const Styles = {
  // Button
  buttonStyle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  textStyle: {
    fontSize: 36,
    fontWeight: '500'
  },

  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: 'row'
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50
  },
  wrapper: {
    height: 120,
    width: '90%',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  },
  screenFirstNumber: {
    fontSize: 40,
    color: colors.gray,
    fontWeight: '400',
    alignSelf: 'flex-end'
  },
  screenSecondNumber: {
    fontSize: 56,
    color: colors.white,
    fontWeight: '500',
    alignSelf: 'flex-end'
  }
};
