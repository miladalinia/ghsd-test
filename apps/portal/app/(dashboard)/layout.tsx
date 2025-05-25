'use client';

import { DashboardLayout } from '@ghased-portal/layouts';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
