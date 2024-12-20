// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UnionIcon(props) {
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
          "M4.536 6.283c.146-.607.696-1.33 1.117-1.468.057-.02.279-.027.497-.02.27.011.356.014.416.055a.44.44 0 01.085.084c.158.184.892 1.96.892 2.154 0 .165-.102.334-.512.843-.132.165-.203.288-.203.356 0 .206.598 1.026 1.121 1.54.173.168.47.415.659.55.395.285 1.355.772 1.513.772.124 0 .308-.176.7-.678.38-.491.388-.498.583-.469.162.023 1.908.825 2.09.963.082.06.09.094.086.36-.008.34-.095.715-.226.936-.2.341-.82.76-1.317.892-.32.082-1.01.075-1.39-.015-.726-.176-1.825-.652-2.457-1.064-.975-.637-1.863-1.51-2.683-2.633-.904-1.237-1.197-2.2-.971-3.158z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.628 1.8C5.037.746 6.607.17 8.485.008c.346-.03 1.407.022 1.874.09 3.813.558 6.876 3.536 7.512 7.304a8.881 8.881 0 01-.749 5.375c-.53 1.124-1.468 2.308-2.439 3.09a9.34 9.34 0 01-3.489 1.724c-1.975.49-4.177.273-5.995-.592l-.463-.221-2.36.618c-1.298.34-2.367.61-2.375.603-.011-.008.268-1.049.618-2.311l.632-2.3-.185-.341a9.18 9.18 0 01-.94-3.023C.053 9.501.06 8.235.14 7.703c.252-1.645.91-3.158 1.927-4.402.365-.446 1.117-1.172 1.561-1.502zm10.637 1.91c-1.167-1.158-2.597-1.873-4.186-2.09a7.205 7.205 0 00-3.248.262c-2.57.797-4.535 2.959-5.066 5.577-.376 1.866-.045 3.712.972 5.368l.191.31-.365 1.334c-.203.735-.357 1.341-.35 1.349.008.007.633-.146 1.39-.341l1.37-.36.334.191a7.795 7.795 0 002.593.922c.516.086 1.732.086 2.258 0 1.833-.315 3.399-1.199 4.566-2.592a7.463 7.463 0 001.57-3.233c.504-2.453-.242-4.914-2.03-6.697z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
