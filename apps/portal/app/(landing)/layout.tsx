'use client';

import { LandingLayout } from '@ghased-portal/layouts';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <LandingLayout>{children}</LandingLayout>;
}
