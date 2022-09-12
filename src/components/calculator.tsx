import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from './button';
import { Styles } from '../styles/commonStyles';
import { calculator, initialState } from '../utils/calculatorUtils';

const Calculator = () => {
  const [state, setState] = useState(initialState);

  // handle tap method
  const handleTap = (type, value = '') => {
    setState(calculator(type, value, state));
  };

  console.log('test',state);

  return (
    <View style={Styles.viewBottom}>
      <View
        style={Styles.wrapper}
      >
        {state.previousValue ? (
          <Text style={Styles.screenFirstNumber}>
            {parseFloat(state?.previousValue).toLocaleString()}
            {state?.operator}
          </Text>
        ) : null}
        <Text style={Styles.screenSecondNumber}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>
      </View>
      <View style={Styles.row}>
        <Button title="AC" type={'misc'} onPress={() => handleTap('clear')} />
        <Button title="+/-" type={'misc'} onPress={() => handleTap('posneg')} />
        <Button title="％" type={'misc'} onPress={() => handleTap('percentage')} />
        <Button
          title="÷"
          type={'misc'}
          onPress={() => handleTap('operator', '/')}
        />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleTap('number', '7')} />
        <Button title="8" onPress={() => handleTap('number', '8')} />
        <Button title="9" onPress={() => handleTap('number', '9')} />
        <Button
          title="×"
          type={'operator'}
          onPress={() => handleTap('operator', '*')}
        />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleTap('number', '4')} />
        <Button title="5" onPress={() => handleTap('number', '5')} />
        <Button title="6" onPress={() => handleTap('number', '6')} />
        <Button
          title="-"
          type={'operator'}
          onPress={() => handleTap('operator', '-')}
        />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleTap('number', '1')} />
        <Button title="2" onPress={() => handleTap('number', '2')} />
        <Button title="3" onPress={() => handleTap('number', '3')} />
        <Button
          title="+"
          type={'operator'}
          onPress={() => handleTap('operator', '+')}
        />
      </View>
      <View style={Styles.row}>
        <Button
          title="0"
          longButton={true}
          onPress={() => handleTap('number', '0')}
        />
        <Button title="." onPress={() => handleTap('number', '.')} />
        <Button
          title="="
          type={'operator'}
          onPress={() => handleTap('equal', '=')}
        />
      </View>
    </View>
  );
};

export default Calculator;
