type StepperProps = {
  currentStep: number;
};

const steps = [
  "Kişisel Bilgiler",
  "Finansal Bilgiler",
  "Onay",
];

export default function Stepper({
  currentStep,
}: StepperProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      {steps.map((step, index) => {
        const active = currentStep >= index + 1;

        return (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition ${
                active
                  ? "border-cyan-400 bg-cyan-400 text-slate-950"
                  : "border-gray-600 text-gray-400"
              }`}
            >
              {index + 1}
            </div>

            <div className="ml-3">
              <p
                className={`text-sm font-medium ${
                  active
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {step}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-4 h-[2px] flex-1 ${
                  active
                    ? "bg-cyan-400"
                    : "bg-gray-700"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}