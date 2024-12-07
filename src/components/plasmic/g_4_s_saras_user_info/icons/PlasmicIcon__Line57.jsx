// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Line57Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.707 8.707a1 1 0 000-1.414L14.343.929a1 1 0 10-1.414 1.414L18.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h20V7H0v2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Line57Icon;
/* prettier-ignore-end */
