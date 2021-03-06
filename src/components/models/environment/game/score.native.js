import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Text } from 'react-native-svg';
import {
  width,
  fontSize,
  margin
} from '../../../../engine/constants/engine';

class Score extends PureComponent {
  render() {
    return (
      <G>
        <Text
          fill="white"
          stroke="white"
          fontSize={fontSize}
          fontWeight="bold"
          x={width - 2 * margin}
          y={fontSize + margin}
          textAnchor="middle"
        >
          {this.props.score}
        </Text>
      </G>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired
};

Score.defaultProps = {
  score: 0
};

export default Score;
