export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null
};

export const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    let val = value;
    if (value === '.') {
      val = `0.`;
    }
    return {
      currentValue: `${val}`,
      operator: state.operator,
      previousValue: state.previousValue
    };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
    operator: state.operator,
    previousValue: state.previousValue
  };
};

const handleEqual = state => {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case '+':
      return {
        currentValue: `${previous + current}`,
        ...resetState
      };
    case '-':
      return {
        currentValue: `${previous - current}`,
        ...resetState
      };
    case '*':
      return {
        currentValue: `${previous * current}`,
        ...resetState
      };
    case '%':
      return {
        currentValue: `${previous * current}`,
        ...resetState
      };
    case '/':
      return {
        currentValue: `${previous / current}`,
        ...resetState
      };

    default:
      return state;
  }
};

const handleSequential = state => {
  if (state.operator) {
    const result = handleEqual(state);
    return result.currentValue;
  } else return state.currentValue;
};

// calculator function
export const calculator = (type, value, state) => {
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'clear':
      return initialState;
    case 'posneg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
        operator: state.operator,
        previousValue: state.previousValue
      };
    case 'percentage':
      return {
        currentValue: '0',
        operator: '%',
        previousValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    case 'operator':
      return {
        operator: value,
        previousValue: handleSequential(state),
        currentValue: '0'
      };
    case 'equal':
      return handleEqual(state);
    default:
      return state;
  }
};
