import {TouchableOpacity, Text} from 'react-native';
import {Styles} from '../styles/commonStyles';
import {colors} from '../styles/color';

interface ButtonProps {
  onPress: () => void;
  title: string;
  type?: 'number' | 'operator' | 'misc';
  longButton?: boolean;
}

const colorMapping = {
  number: {
    bgColor: colors.btnBgNumber,
    textColor: colors.white,
  },
  operator: {
    bgColor: colors.btnBgOperator,
    textColor: colors.white,
  },
  misc: {
    bgColor: colors.btnBgMisc,
    textColor: colors.textColorMisc,
  },
};

const Button = ({
  title,
  onPress,
  type = 'number',
  longButton = false,
}: ButtonProps) => {
  const colorConfig = colorMapping[type];
  return (
    <TouchableOpacity
      style={{
        ...Styles.buttonStyle,
        backgroundColor: colorConfig.bgColor,
        width: longButton ? 160 : 72,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...Styles.textStyle,
          color: colorConfig.textColor,
          textAlign: longButton ? 'left' : 'center',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
