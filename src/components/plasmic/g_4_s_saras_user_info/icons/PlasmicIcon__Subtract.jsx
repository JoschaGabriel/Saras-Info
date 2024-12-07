// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SubtractIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 91 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.503 4.877l12.934 27.194c.044.092.078.19.113.289.066.188.132.376.263.52.275.305.906.613 2.185.613 1.627 0 2.372-.665 2.621-1.139.037-.07.068-.142.098-.215.03-.069.058-.137.092-.203L31.555 7.114V28.42c.113 1.691 1.623 5.073 6.764 5.073 4.438 0 7.01-5.21 8.066-8.882.265-.921 1.08-1.602 2.039-1.602h9.37a2 2 0 011.732 1.001l4.495 7.792c.339.564 1.353 1.691 2.706 1.691H83.49c.099 0 .194-.006.291-.024 2.297-.419 6.618-2.897 6.618-9.783 0-6.796-4.208-9.72-6.527-10.419a1.668 1.668 0 00-.483-.065h-9.223c-.902-.113-2.705-.947-2.705-3.382s1.803-3.27 2.705-3.382h13.528c.902 0 2.705-.609 2.705-3.044S88.597.35 87.695.35H73.153c-2.593.113-7.779 2.165-7.779 9.47 0 7.305 5.186 9.808 7.779 10.146h8.454c.79 0 2.368.811 2.368 4.058s-1.578 4.058-2.368 4.058H69.308a2 2 0 01-1.784-1.096L55.228 2.718c-.45-.79-1.623-2.368-2.705-2.368s-2.255 1.579-2.706 2.368l-10.42 24.201c-.036.084-.065.17-.094.257l-.016.047c-.16.475-.58 1.198-1.306 1.198-.68 0-1.092-.634-1.273-1.104a1.353 1.353 0 01-.076-.511l.334-21.72c0-1.58-.947-4.736-4.735-4.736-3.119 0-4.312 1.07-4.636 1.89-.047.119-.084.243-.122.366a3.083 3.083 0 01-.205.548L18.177 20.51c-.762 1.454-2.855 1.422-3.571-.056l-9-18.561a1.644 1.644 0 00-.224-.352C4.52.529 2.657-.85 1.118.689-.416 2.222-.058 3.876.366 4.624l.022.04c.04.07.08.14.115.213zm51.874 13.059h1.575c1.579 0 2.535-1.742 1.688-3.074l-.883-1.386c-.834-1.312-2.78-1.212-3.476.179l-.693 1.386a2 2 0 001.789 2.895z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */