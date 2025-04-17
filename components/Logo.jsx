import * as React from "react"
import Svg, { Path, Circle, Text } from "react-native-svg"
export const Logo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={200} height={120} {...props}>
    <Path fill="#000" d="M0 0h200v200H0z" />
    <Circle cx={60} cy={70} r={20} fill="#D32F2F" />
    <Circle cx={100} cy={70} r={20} fill="#D32F2F" />
    <Path
      fill="none"
      stroke="#fff"
      strokeWidth={4}
      d="M60 50q-10-20-20 0M100 50q-10-20-20 0"
    />
    <Path 
        fill="#fff"
        stroke="#fff"
        d="M130 50h20v20h-20zM150 50h20v20h-20zM130 70h20v20h-20zM150 70h20v20h-20zM130 90h20v20h-20z"
    />
  </Svg>
)
