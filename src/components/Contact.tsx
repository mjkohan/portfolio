'use client';

import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <SectionContainer className="!p-0">
      <div id={'contact'}
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundRepeat: 'repeat',
        }}
        className="grid bg-cover grid-cols-1 gap-8 px-10 md:px-12 py-4 md:py-10 lg:py-12"
      >
        <div className="mb-6">
          <h3 className="text-primary text-lg font-medium">• Contact</h3>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">{"Let's Connect"}</h2>
        </div>
        <div className="grid grid-cols-1  gap-8">

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <FiPhone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-500 dark:text-gray-400 mb-1">Phone Number</h3>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">+98-912-343-3644</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <FiMail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-500 dark:text-gray-400 mb-1">Email</h3>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Kohankan.mj@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <FiMapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-500 dark:text-gray-400 mb-1">Address</h3>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Tehran, Iran</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;