import { Fragment } from "react";
import {
  Button as MuiButton,
  Stepper as MuiStepper,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  StepContent as MuiStepContent,
  StepConnector as MuiStepConnector,
  StepIcon as MuiStepIcon,
} from "@mui/material";

export default function WorkExperience() {
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 w-full"}>
        <h1 className={"text-[20px] font-medium"}>{"Work Experience"}</h1>
      </div>
      <div className={"mt-4"}>
        <MuiStepper activeStep={-1} orientation={"vertical"}>
          {[
            {
              company: "JxtGotFunded",
              startDate: "November, 2023",
              role: "Full-Stack Engineer",
            },
            {
              company: "Shecluded",
              startDate: "February, 2023",
              role: "Head of Engineering",
            },
            {
              company: "Zendwallet",
              startDate: "October, 2022",
              role: "Lead Back-End Engineer, Cloud & Devops",
            },
          ].map((item, index) => {
            return (
              <MuiStep key={index}>
                <MuiStepLabel
                  optional={
                    <Fragment>
                      <p className={"text-black"}>{item.role}</p>
                      <p className={"text-sm"}>{item.startDate}</p>
                    </Fragment>
                  }
                >
                  {item.company}
                </MuiStepLabel>
              </MuiStep>
            );
          })}
        </MuiStepper>
      </div>
    </div>
  );
}
