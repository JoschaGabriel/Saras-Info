// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8mmkHFwQph4WbSrTdocf73
// Component: oHccKj1IoiEU
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import { useScreenVariants as useScreenVariantsgMqIqQaNt9Z9 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gMqIQQaNT9z9/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 8mmkHFwQph4WbSrTdocf73/projectcss
import sty from "./PlasmicMailform.module.css"; // plasmic-import: oHccKj1IoiEU/css

createPlasmicElementProxy;

export const PlasmicMailform__VariantProps = new Array();

export const PlasmicMailform__ArgProps = new Array();

const $$ = {};

function PlasmicMailform__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgMqIqQaNt9Z9()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__pYZa)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"figmaPaste"}
                data-plasmic-override={overrides.figmaPaste}
                hasGap={true}
                className={classNames(projectcss.all, sty.figmaPaste)}
              >
                <div
                  data-plasmic-name={"image41"}
                  data-plasmic-override={overrides.image41}
                  className={classNames(projectcss.all, sty.image41)}
                />

                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__epYri
                    )}
                  >
                    {"Welcome to"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jMxu
                    )}
                  >
                    {"G4S Indonesia"}
                  </div>
                </div>
              </Stack__>
            </div>
            <div className={classNames(projectcss.all, sty.column__e4Bz2)}>
              <Embed
                data-plasmic-name={"embedHtml"}
                data-plasmic-override={overrides.embedHtml}
                className={classNames("__wab_instance", sty.embedHtml)}
                code={
                  '<iframe class="airtable-embed" src="https://airtable.com/embed/appqu5PZzK9Xo18Dv/pagc1v1r4loLcsCUQ/form" frameborder="0" onmousewheel="" width="100%" height="950" style="background: transparent; border: 1px solid #ccc;"></iframe>'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "figmaPaste", "image41", "freeBox", "embedHtml"],
  columns: ["columns", "figmaPaste", "image41", "freeBox", "embedHtml"],
  figmaPaste: ["figmaPaste", "image41", "freeBox"],
  image41: ["image41"],
  freeBox: ["freeBox"],
  embedHtml: ["embedHtml"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMailform__ArgProps,
          internalVariantPropNames: PlasmicMailform__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMailform__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMailform";
  } else {
    func.displayName = `PlasmicMailform.${nodeName}`;
  }
  return func;
}

export const PlasmicMailform = Object.assign(
  // Top-level PlasmicMailform renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    figmaPaste: makeNodeComponent("figmaPaste"),
    image41: makeNodeComponent("image41"),
    freeBox: makeNodeComponent("freeBox"),
    embedHtml: makeNodeComponent("embedHtml"),
    // Metadata about props expected for PlasmicMailform
    internalVariantProps: PlasmicMailform__VariantProps,
    internalArgProps: PlasmicMailform__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMailform;
/* prettier-ignore-end */
