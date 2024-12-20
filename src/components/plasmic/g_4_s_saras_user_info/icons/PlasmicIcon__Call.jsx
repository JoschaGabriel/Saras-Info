// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CallIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.95 18c-2.083 0-4.142-.454-6.175-1.363-2.033-.908-3.883-2.195-5.55-3.862-1.667-1.667-2.954-3.517-3.862-5.55C.453 5.192 0 3.133 0 1.05 0 .75.1.5.3.3.5.1.75 0 1.05 0H5.1a.93.93 0 01.625.237A.914.914 0 016.05.8l.65 3.5a1.77 1.77 0 01-.025.675c-.05.183-.142.342-.275.475L3.975 7.9c.333.617.73 1.213 1.187 1.787.459.575.963 1.13 1.513 1.663.517.517 1.058.996 1.625 1.438.567.441 1.167.845 1.8 1.212l2.35-2.35a1.4 1.4 0 01.588-.338 1.61 1.61 0 01.712-.062l3.45.7c.233.067.425.188.575.363A.88.88 0 0118 12.9v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CallIcon;
/* prettier-ignore-end */
