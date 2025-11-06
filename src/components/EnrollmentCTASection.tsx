'use client';

import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

export function EnrollmentCTASection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-full mx-auto space-y-12">
        {/* Enrollment Section */}
        <section className="mt-16 bg-[#F8F4ED]">
          <Card className="bg-[#F8F4ED] p-8 md:p-12 border-0">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-gray-800 text-xl font-bold mb-4">
                Enroll for Our Community. Enrol for 7-Day Confidence Sprint
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Daily micro-practices to shift how you show up.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="text-left">
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 bg-white"
                  />
                </div>

                <div className="text-left">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 bg-white"
                  />
                </div>

                <div className="text-left">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-2 bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                >
                  Take the Leap
                </Button>
              </form>
            </div>
          </Card>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 p-8">
          <Card className="bg-[#114b5f] shadow-xl p-12 md:p-16 border-0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white text-2xl md:text-3xl lg:text-2xl font-bold mb-8">
                Ready to CONFIDENTLY OWN the next room you enter?
              </h2>

              {!showForm ? (
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-semibold"
                >
                  Begin Your Journey
                </Button>
              ) : (
                <div className="mt-8 bg-white rounded-lg shadow-2xl p-8 md:p-12 text-left">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-800 text-xl font-bold mb-2">Talk To Us</h3>
                    <p className="text-gray-600 mb-8">Tell us what Eikona can do for you?</p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <Label htmlFor="form-name" className="text-gray-700 font-medium">Name</Label>
                        <Input
                          id="form-name"
                          type="text"
                          placeholder="Enter your name"
                          className="mt-2 bg-white border border-gray-200"
                        />
                      </div>

                      <div>
                        <Label htmlFor="form-email" className="text-gray-700 font-medium">Email</Label>
                        <Input
                          id="form-email"
                          type="email"
                          placeholder="Enter your email"
                          className="mt-2 bg-white border border-gray-200"
                        />
                      </div>

                      <div>
                        <Label htmlFor="form-phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input
                          id="form-phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="mt-2 bg-white border border-gray-200"
                        />
                      </div>

                      <div>
                        <Label htmlFor="form-message" className="text-gray-700 font-medium">Message</Label>
                        <Input
                          id="form-message"
                          type="text"
                          placeholder="Type your message here"
                          className="mt-2 bg-white border border-gray-200"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
