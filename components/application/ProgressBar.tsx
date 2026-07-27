"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
        <span>
          Adım {currentStep} / {totalSteps}
        </span>

        <span>%{Math.round(progress)}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-cyan-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}