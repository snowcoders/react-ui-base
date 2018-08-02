import * as React from "react";

import { Popover, PopperType, TargetType } from "@snowcoders/react-popover";
import "@snowcoders/react-popover/styles.css";

import { ExamplePageBase } from "../example-page-base";

type PopperPositionOptions = "bottom" | "left" | "right" | "top";

export interface IExamplePagePopoverProps { }

export interface IExamplePagePopoverState {
  popperType: PopperType;
  position: PopperPositionOptions;
  targetType: TargetType;
}

export class ExamplePagePopover extends React.Component<
  IExamplePagePopoverProps,
  IExamplePagePopoverState
  > {
  constructor(props: IExamplePagePopoverProps) {
    super(props);

    this.state = {
      popperType: "hover",
      position: "bottom",
      targetType: "hover"
    };
  }

  render() {
    let popperTypeToName: { popperType: PopperType; name: string }[] = [
      {
        name: "Hover",
        popperType: "hover"
      },
      {
        name: "Blur",
        popperType: "blur"
      },
      {
        name: "Click",
        popperType: "click"
      },
      {
        name: "None",
        popperType: "none"
      }
    ];
    let targetTypeToName: { targetType: TargetType; name: string }[] = [
      {
        name: "Hover",
        targetType: "hover"
      },
      {
        name: "Click",
        targetType: "click"
      }
    ];
    let positionToName: { position: PopperPositionOptions; name: string }[] = [
      {
        name: "Bottom",
        position: "bottom"
      },
      {
        name: "Top",
        position: "top"
      },
      {
        name: "Left",
        position: "left"
      },
      {
        name: "Right",
        position: "right"
      }
    ];

    return (
      <ExamplePageBase
        componentDescription="The popover some element that expands more content from a parent element. Tooltips, dropdowns, selects, menus and more fit into this category. Instead of writing code for each of these individually, we instead wrote a few base helper classes which should allow a developer to customize them into any specific subtype."
        componentName="Popover"
        exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-popover"
        githubUrl="https://github.com/snowcoders/react-popover"
        npmPackageName="@snowcoders/react-popover"
        npmUrl="https://www.npmjs.com/package/@snowcoders/react-popover"
        examples={[
          {
            description: "Popover example showing off target and popper types",
            source: `import "@snowcoders/react-popover/styles.css";
import { Popover, PopperType, TargetType } from '@snowcoders/react-popover';

// Note that wrapperElementType and wrapperElementProps are only needed for React 15
<Popover
    wrapperElementType={"span"}
    wrapperElementProps={{ className: "react-15" }}
    popperContent={"Popper text"}
    popperOptions={{
        placement: "bottom"
    }}
    popperType={"hover"}
    targetContent={"Target text"}
    targetType={"hover"}
/>`,
            example: (
              <div className="sci-react-ui-base-example-page-popover">
                <div className="left-pane">
                  <div className="options">
                    <div className="style-selector">
                      Target Type
                      {targetTypeToName.map(value => {
                        return (
                          <label key={value.targetType}>
                            <input
                              type="radio"
                              name="target"
                              onChange={this.getOnTargetTypeClick(
                                value.targetType
                              )}
                              defaultChecked={
                                this.state.targetType === value.targetType
                              }
                            />
                            {value.name}
                          </label>
                        );
                      })}
                    </div>
                    <div className="style-selector">
                      Popper Type
                      {popperTypeToName.map(value => {
                        return (
                          <label key={value.popperType}>
                            <input
                              type="radio"
                              name="popper"
                              onChange={this.getOnPopperTypeClick(
                                value.popperType
                              )}
                              defaultChecked={
                                this.state.popperType === value.popperType
                              }
                            />
                            {value.name}
                          </label>
                        );
                      })}
                    </div>
                    <div className="style-selector">
                      Placement
                      {positionToName.map(value => {
                        return (
                          <label key={value.position}>
                            <input
                              type="radio"
                              name="position"
                              onChange={this.getOnPositionClick(value.position)}
                              defaultChecked={
                                this.state.position === value.position
                              }
                            />
                            {value.name}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="examples">
                    <p>Real world examples:</p>
                    <ul>
                      <li>
                        Hover + Hover -{" "}
                        <a
                          href="https://material-ui-next.com/demos/tooltips/"
                          target="_blank"
                        >
                          Material UI's Tooltip
                        </a>
                      </li>
                      <li>
                        Click + Click -{" "}
                        <a
                          href="https://material-ui-next.com/demos/menus/"
                          target="_blank"
                        >
                          Material UI's Menus
                        </a>
                      </li>
                      <li>
                        Click + Blur -{" "}
                        <a
                          href="https://jqueryui.com/selectmenu/"
                          target="_blank"
                        >
                          jQuery UI's Select menu
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="popover-example">
                  <div className="example">
                    <Popover
                      wrapperElementType={"span"}
                      wrapperElementProps={{ className: "react-15" }}
                      popperContent={"Popper type - " + this.state.popperType}
                      popperOptions={{
                        placement: this.state.position
                      }}
                      popperType={this.state.popperType}
                      targetContent={"Target type - " + this.state.targetType}
                      targetType={this.state.targetType}
                    />
                  </div>
                </div>
              </div>
            )
          }
        ]}
      />
    );
  }

  getOnTargetTypeClick(targetType: TargetType) {
    return () => {
      this.setState({
        targetType: targetType
      });
    };
  }

  getOnPopperTypeClick(popperType: PopperType) {
    return () => {
      this.setState({
        popperType: popperType
      });
    };
  }

  getOnPositionClick(position: PopperPositionOptions) {
    return () => {
      this.setState({
        position: position
      });
    };
  }
}
