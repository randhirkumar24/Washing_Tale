import React from 'react';
import PricingPlans from '../components/PricingPlans';

export const metadata = {
  title: 'Pricing - Washing Tale',
  description: 'View our competitive laundry service pricing plans and individual item rates.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PricingPlans />
    </main>
  );
} 