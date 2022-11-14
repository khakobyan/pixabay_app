import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

export const Tag = (props) => (
  <Svg
    height={props.height}
    width={props.width}
    fill={props.fill}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="none" d="M0 0h50v50H0z" />
    <Circle
      cx={39}
      cy={11}
      fill="none"
      r={3}
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <Path
      d="M47 5.5A2.5 2.5 0 0 0 44.5 3l-14.876.002c-1.33 0-2.603-.07-3.341.668L3.554 26.398a1.89 1.89 0 0 0 0 2.674l17.374 17.374a1.892 1.892 0 0 0 2.674 0L46.33 23.717c.738-.737.668-1.98.668-3.34L47 5.5z"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </Svg>
)

Tag.defaultProps = {
  width: 50,
  height: 50,
  color: '#B9C1D9',
};
