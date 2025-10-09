import Navigation from '@/components/Navigation';
import Button from '@/components/Button';
import Testimonials from '@/components/Testimonials';
import LogoGrid from '@/components/LogoGrid';
import WhatWeDo from '@/components/WhatWeDo';
import WhoWeHelp from '@/components/WhoWeHelp';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBQhcR7e-JiMZEO1wtBcN_3BMdJJgD7uoOTBL5wgG0hBQs2JE-INqQFg_g-yfJL0JQwAYA-opzZSDIHHhtIi_VkPDRLa0Mh0Ue0j7k2SVCaTTuiBRKdGL77ynOjN4zTY4y06jRK7ry8IXZCs4MIO8QsmL539v4KFUWYFC4DjscYD6GoN8kg82L3eOPwErYSbc3z5D3bIMWWUTW0FBsJjO15afU6vz8FhZiP35OQ4oCvrVCpAAyzYDZywFSoz5pb4bHp-KmoHi_xcJw)'
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
            Confidence you can wear.<br />
            Communication you can feel.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">
            Helping professionals and teams look the part, speak with clarity, and lead with presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="text-lg px-8 py-4">
              Book a Call
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              Take the Confidence Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <WhoWeHelp />

      {/* Service Cards Section
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<MdImage className="w-8 h-8" />} 
              title="Executive Image" 
              description="Transform your professional image with personalized coaching."
            />
            <ServiceCard 
              icon={<MdRecordVoiceOver className="w-8 h-8" />} 
              title="Confident Communication" 
              description="Speak with clarity and impact in any situation."
            />
            <ServiceCard 
              icon={<MdWork className="w-8 h-8" />} 
              title="Interview Mastery" 
              description="Ace your interviews with targeted preparation."
            />
          </div>
        </div>
      </section> */}

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Trusted By Section */}
      <LogoGrid 
        title="Trusted By"
        logos={[
          { name: "NITUAL", bgColor: "bg-gray-200" },
          { name: "ANTHEA", bgColor: "bg-emerald-900" },
          { name: "ILUMINATY", bgColor: "bg-emerald-900" },
          { name: "COMPANY BRAND", bgColor: "bg-emerald-800" },
          { name: "COMPANY", bgColor: "bg-emerald-800" },
          { name: "COMPANY", bgColor: "bg-emerald-700" },
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials 
        testimonials={[
          {
            name: "Anya Sharma",
            timeAgo: "2 months ago",
            rating: 5,
            text: "Saloni's coaching transformed my approach to leadership. Her insights and guidance helped me develop a stronger, more authentic presence.",
            likes: 2
          },
          {
            name: "Rajesh Kapoor",
            timeAgo: "3 months ago",
            rating: 5,
            text: "The corporate training session led by Saloni was incredibly impactful. Our team's communication skills have significantly improved.",
            likes: 3
          },
          {
            name: "Priya Mehta",
            timeAgo: "1 month ago",
            rating: 5,
            text: "Working with Saloni has been transformative. Her personalized approach helped me build confidence and communicate more effectively in high-stakes situations.",
            likes: 5
          }
        ]}
      />

      {/* Featured In Section */}
      <LogoGrid 
        title="Featured In"
        logos={[
          { name: "MEDIA", bgColor: "bg-teal-900" },
          { name: "MEDIA", bgColor: "bg-slate-800" },
          { name: "MEDIA", bgColor: "bg-emerald-600" },
          { name: "MEDIA", bgColor: "bg-teal-900" },
          { name: "MEDIA", bgColor: "bg-teal-800" },
          { name: "MEDIA", bgColor: "bg-teal-900" },
        ]}
      />

      {/* Email Signup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Join the 7-Day Confidence Sprint</h2>
            <p className="text-xl text-gray-600">Boost your confidence with our free email course.</p>
          </div>
          
          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name"
                required
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                required
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input 
              type="tel" 
              placeholder="Phone Number (Optional)"
              className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="text-center">
              <Button variant="primary" className="px-12 py-3 text-lg">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Confidently Own the  next  <br /> room you enter?
          </h2>
          <Button variant="primary" className="text-lg px-8 py-4">
            Book a Call
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 EIKONA Experiential Living. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
