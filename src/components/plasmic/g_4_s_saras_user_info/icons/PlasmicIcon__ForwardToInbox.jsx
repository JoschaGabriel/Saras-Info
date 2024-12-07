// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ForwardToInboxIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.19 18l-1.333-1.326 1.5-1.516h-3.976v-1.895h3.976l-1.524-1.516 1.357-1.326 3.81 3.79L16.19 18zM1.905 15.158c-.524 0-.972-.186-1.345-.557A1.82 1.82 0 010 13.263V1.895C0 1.374.187.928.56.557A1.839 1.839 0 011.905 0h15.238c.524 0 .972.186 1.345.557.373.37.56.817.56 1.338v7.39a5.336 5.336 0 00-1.37-.57 5.87 5.87 0 00-1.488-.189c-1.587 0-2.936.553-4.047 1.658-1.111 1.106-1.667 2.448-1.667 4.027v.947H1.905zm7.619-6.632l7.619-4.737V1.895l-7.62 4.737-7.618-4.737v1.894l7.619 4.737z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ForwardToInboxIcon;
/* prettier-ignore-end */
