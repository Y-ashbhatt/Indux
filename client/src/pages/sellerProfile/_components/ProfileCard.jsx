import React from "react";
import { Card } from "@/components/ui/card";

const SellerProfile = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          {/* Left Profile Card */}
          <Card className="bg-[#F8F2FF] p-6 h-fit border-none">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="/api/placeholder/128/128"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Arun Kumar's</h3>
              <p className="text-gray-600 text-sm mb-6">Seller</p>
              <div className="text-center">
                <div className="text-2xl font-bold">76</div>
                <div className="text-sm text-gray-600">Total Projects</div>
              </div>
            </div>
          </Card>

          {/* Right Info Card */}
          <Card className="bg-[#F8F2FF] p-6 border-none">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">
                DMC Developers journey is story of modest beginnings, resilient
                growth, and selfless dreams. Established in 2000, DMC has become
                an icon of innovation and excellence in real estate. Starting
                with a small team, DMC now boasts over 250 employees, mainly
                engineers, each contributing unique vision that fuel our
                success. With over 100 projects completed and 2,500+ dream
                homes, DMC has made a significant mark in Ahmedabad's skyline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-600 block text-sm">Email</label>
                    <p className="font-medium">arunkumar@example.com</p>
                  </div>
                  <div>
                    <label className="text-gray-600 block text-sm">Phone</label>
                    <p className="font-medium">+91 9876543210</p>
                  </div>
                  <div>
                    <label className="text-gray-600 block text-sm">
                      Location
                    </label>
                    <p className="font-medium">Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Statistics</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-600 block text-sm">
                      Projects Completed
                    </label>
                    <p className="font-medium">76</p>
                  </div>
                  <div>
                    <label className="text-gray-600 block text-sm">
                      Years of Experience
                    </label>
                    <p className="font-medium">23+ years</p>
                  </div>
                  <div>
                    <label className="text-gray-600 block text-sm">
                      Client Rating
                    </label>
                    <p className="font-medium">4.8/5</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                Edit Profile
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
