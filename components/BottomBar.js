import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';
import {styles} from './Styles/BottomBar.styles';

const BottomBar = () => {
  const [state, setState] = useState({
    pathX: '357',
    pathY: '675',
    pathA: '689',
    pathB: '706',
  });
  return (
    <View style={styles.container}>
      {/*<View style={styles.bottomBarContainer}>*/}
      {/*  <View style={styles.left} />*/}
      {/*  <View style={styles.right} />*/}
      {/*</View>*/}

      {/*<View style={styles.navsContainer} ></View>*/}
      {/*<View style={styles.navMidButton} ></View>*/}

      <Svg
        version="1.1"
        id="bottom-bar"
        x="0px"
        y="0px"
        width="100%"
        height="100"
        viewBox="0 0 1092 220"
        space="preserve">
        <Path
          fill={'#373A50'}
          stroke={'#373A50'}
          d={`M30,60h${state.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${state.pathY}.7,74.5,${state.pathA}.5,60,${state.pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
        />
      </Svg>
    </View>
  );
};

export default BottomBar;
