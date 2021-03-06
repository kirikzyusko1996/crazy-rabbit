import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { blockScalability, heightOfOneBlock } from '../../../../../engine/constants/engine';

const Block = () => (
  <Svg width={heightOfOneBlock} height={heightOfOneBlock}>
    <G transform={{ scale: blockScalability }}>
      <Path d="m1.25,1.25h256v256h-256z" fill="#cd9945" stroke="#6e441b" strokeWidth="2.5" />
      <Path d="m33.25,33.25h192v192h-192z" fill="#9a6926" />
      <Path
        d="m-225.25,33.25h6v192h-6z" fill="#976825" stroke="#6e441b" strokeWidth="2.5"
        transform="matrix(0,-1,1,0,0,0)"
      />
      <Path
        d="m-136.4201,203.8853h271.53v6h-271.53z" fill="#6e441b" opacity=".75"
        transform="matrix(.70711,-.70711,.70711,.70711,0,0)"
      />
      <Path d="m33.4823,71.65h191.2738" fill="none" stroke="#6e441b" strokeWidth="2.5" />
      <Path d="m33.25,110.05h191.2738" fill="none" stroke="#70461c" strokeWidth="2.5" />
      <Path d="m33.25,148.45h191.2738" fill="none" stroke="#6e441b" strokeWidth="2.5" />
      <Path d="m33.25,186.85h191.2738" fill="none" stroke="#6e441b" strokeWidth="2.5" />
      <Path
        d="m18.2938,47.0229h6v271.53h-6z" fill="#976825" stroke="#6e441b" strokeWidth="2.5"
        transform="matrix(.70711,-.70711,.70711,.70711,0,0)"
      />
      <Path d="m32,34h192v6h-192z" fill="#6e441b" opacity=".75" />
      <Path d="m33.25,33.25h6v192h-6z" fill="#976825" stroke="#70461c" strokeWidth="2.5" />
      <Path d="m45.7324,22.9842h271.53v6h-271.53z" fill="#6e441b" opacity=".75" transform="rotate(45)" />
      <Path d="m40.5,34.5h6v192h-6z" fill="#6f451b" opacity=".75" />
      <Path
        d="m-21.7784,47.0221h40v271.53h-40z" fill="#cd9945" stroke="#6e441b" strokeWidth="2.5"
        transform="matrix(.70711,-.70711,.70711,.70711,0,0)"
      />
      <Path
        d="m162.7871-134.6081h40v273h-40z" fill="#cd9945" stroke="#6e441b" strokeWidth="2.5"
        transform="rotate(45)"
      />
      <Path d="m11.9691,3.2876h240.1544v29.3436h-240.1544z" fill="#cd9945" />
      <Path d="m14.9158,225.6797h240.1544v29.3436h-240.1544z" fill="#cd9945" />
      <Path d="m6.7625-32.4324h240.1544v29.3436h-240.1544z" fill="#cd9945" transform="matrix(0,1,-1,0,0,0)" />
      <Path
        d="m12.4013-254.6841h240.1544v29.3436h-240.1544z" fill="#cd9945"
        transform="matrix(0,1,-1,0,0,0)"
      />
      <Path d="m33.25,33.25h192v192h-192z" fill="none" stroke="#6e441b" strokeWidth="2.5" />
    </G>
  </Svg>
);

export default Block;
