"use client";

export function TermsNotice() {
  return (
    <div className="text-center text-sm text-muted-foreground dark:text-gray-400 mt-6">
      By continuing, you agree to our{" "}
      <a
        href="#"
        className="underline hover:text-cu-secondary dark:hover:text-cu-primary"
      >
        Terms of Service
      </a>{" "}
      and{" "}
      <a
        href="#"
        className="underline hover:text-cu-secondary dark:hover:text-cu-primary"
      >
        Privacy Policy
      </a>
    </div>
  );
}
