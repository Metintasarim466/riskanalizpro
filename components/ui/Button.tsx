import Link from "next/link";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: Props) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-2xl px-7 py-4 font-semibold transition-all duration-300",
    {
      "bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,.45)]":
        variant === "primary",

      "border border-white/15 bg-white/5 hover:bg-white/10":
        variant === "secondary",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}