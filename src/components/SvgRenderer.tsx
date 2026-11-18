import React from "react";

interface SvgRendererProps {
  svg: string;
  variant?: "question" | "option";
  className?: string;
}

export function SvgRenderer({
  svg,
  variant = "question",
  className = "",
}: SvgRendererProps) {
  const sizeClass =
    variant === "option"
      ? "[&>svg]:w-20 [&>svg]:h-20"
      : "w-full max-w-[480px] [&>svg]:w-full [&>svg]:h-auto";

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white p-2.5 text-slate-900 shadow-xs ${sizeClass} ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
