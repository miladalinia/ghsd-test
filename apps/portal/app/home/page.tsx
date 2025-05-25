import { DashboardLayout } from '@ghased-portal/layouts';
import React from 'react';
import App from './components/app';

function home() {
  return (
    <DashboardLayout>
      <App />
    </DashboardLayout>
  );
}

export default home;
