import * as React from "react";

import { Checkbox } from "@snowcoders/react-checkbox";
import "@snowcoders/react-checkbox/styles.css";

import { ExamplePageBase } from "../example-page-base";

import * as classnames from "classnames";

export type AvailableClassNames =
  | "google-checkbox"
  | "google-switch"
  | "office-checkbox"
  | "office-switch";

export interface IExamplePageCheckboxProps { }

export interface IExamplePageCheckboxState {
  classNameToApply: AvailableClassNames;
}

export class ExamplePageCheckbox extends React.Component<
  IExamplePageCheckboxProps,
  IExamplePageCheckboxState
  > {
  constructor(props: IExamplePageCheckboxProps) {
    super(props);

    this.state = {
      classNameToApply: "google-checkbox"
    };
  }

  render() {
    let classNameToName: { className: AvailableClassNames; name: string }[] = [
      {
        className: "google-checkbox",
        name: "Checkbox - Google's Material UI"
      },
      {
        className: "office-checkbox",
        name: "Checkbox - Office's Fabric UI"
      },
      {
        className: "google-switch",
        name: "Switch - Google's Material UI"
      },
      {
        className: "office-switch",
        name: "Switch - Office's Fabric UI"
      }
    ];

    return (
      <ExamplePageBase
        componentDescription="The checkbox is a wrapper around a <input type='checkbox' /> that allows for customization of the checkbox. The uncontrolled version of this component has two states, checked and unchecked"
        componentName="Checkbox"
        examples={[
          {
            description: "An Checkbox with the exported styles disabled",
            example: (
              <div className="sci-react-ui-base-example-page-checkbox">
                <div className="styleSelector">
                  {classNameToName.map(value => {
                    return (
                      <label key={value.className}>
                        <input
                          type="radio"
                          name="style"
                          onChange={this.getOnClick(value.className)}
                          defaultChecked={
                            this.state.classNameToApply === value.className
                          }
                        />
                        {value.name}
                      </label>
                    );
                  })}
                </div>
                <Checkbox
                  className={classnames(this.state.classNameToApply)}
                  defaultChecked={true}
                  checkboxContent={
                    <span className="switch">
                      <span className="glider" />
                      <span className="slider" />
                      <svg className="checkmark">
                        <line x1="5" y1="10" x2="9" y2="15" />
                        <line x1="9" y1="15" x2="16" y2="6" />
                      </svg>
                    </span>
                  }
                  labelText={"Checkbox text"}
                />
              </div>
            )
          }
        ]}
        exampleSrcUrl="https://github.com/snowcoders/react-ui-base/tree/master/src/components/example-page-checkbox"
        githubUrl="https://github.com/snowcoders/react-checkbox"
        npmPackageName="@snowcoders/react-checkbox"
        npmUrl="https://www.npmjs.com/package/@snowcoders/react-checkbox"
      />
    );
  }

  getOnClick(className: AvailableClassNames) {
    return () => {
      this.setState({
        classNameToApply: className
      });
    };
  }
}
