import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance Tracker | CSWN Officers",
  description: "Internal CSWN officer tool for tracking event attendance.",
};

export default function AttendanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
