import { useState } from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import PatientDetail from "../components/PatientDetail";
import ChatInterface from "../components/ChatInterface";

const IntroContent = () => {
  return <div>Introduction</div>;
};

const steps = [
  {
    label: "Patient Information",
    content: "This is the introduction step.",
    component: <PatientDetail />,
  },
  {
    label: "Interview",
    content: "Chat basedInterview with the patient.",
    component: <ChatInterface />,
  },
  {
    label: "Tests",
    content: "Conducting necessary medical tests.",
    component: <IntroContent />,
  },
  {
    label: "Diagnoses",
    content: "Reviewing the patient's diagnoses.",
    component: <IntroContent />,
  },
  // { label: "Orders", content: "Prescribing medication or treatment." },
  {
    label: "Decision Review",
    content: "Finalizing treatment decisions.",
    component: <IntroContent />,
  },
  {
    label: "Case Review",
    content: "Reviewing the overall case.",
    component: <IntroContent />,
  },
];

export default function StepNavigator() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const activeComponent = steps[currentStep].component;

  const dynamicHeight = `calc(100vh - 60px - 108px)`;

  return (
    <div
      className="w-full mx-auto p-6 border rounded-lg shadow-md overflow-y-auto relative"
      style={{ maxHeight: dynamicHeight }}
      // style={{ maxHeight: "400px" }}
    >
      {/* Step Title */}
      <div className="text-center text-xl font-semibold mb-4">
        {steps[currentStep].label}
      </div>

      {/* Step Content */}
      {/* <div className="p-6 border-dashed border-2 rounded-lg text-gray-500 text-center"> */}
      {/* {steps[currentStep].content} */}
      {activeComponent}
      {/* </div> */}

      {/* Stepper */}
      <div className="flex justify-between items-center gap-10 fixed bottom-0 left-0 w-full p-4 bg-white">
        <Button
          onClick={handleBack}
          disabled={currentStep === 0}
          variant="outline"
        >
          Previous
        </Button>
        <div className="flex items-center justify-between flex-grow self-center">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex items-center">
              <div
                className={clsx(
                  "rounded-full border-2 text-sm p-4",
                  index < currentStep
                    ? "bg-primary text-primary-foreground"
                    : index === currentStep &&
                        "bg-primary text-primary-foreground"
                )}
              >
                {steps[index].label}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    "h-1 flex-1",
                    index < currentStep ? "bg-primary" : "bg-secondary"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
