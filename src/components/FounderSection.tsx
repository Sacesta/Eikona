import Image from 'next/image';

const founderImage = '/For Meet the Founder SectionHomePage.png';

export default function FounderSection() {
  return (
    <div className={`min-h-screen bg-[#FDF8F3]`}>
      {/* Page Title */}
      <div className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800">Meet Our Founder</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-1 md:gap-10 items-center">
          {/* Left Column - Founder Photo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-[70%] max-w-[320px] aspect-square">
              <Image
                src={founderImage}
                alt="Saloni Parikh"
                fill
                className="object-cover rounded-3xl shadow-lg"
                priority
              />
            </div>
            <div className="mt-6 text-center md:text-left md:pl-[15%]">
              <h2 className="text-2xl font-semibold text-stone-800">Saloni Parikh</h2>
             
            </div>
          </div>

          {/* Right Column - Founder Message */}
          <div className="flex flex-col justify-center space-y-6 md:pl-8">
            
            <div className="space-y-4 text-stone-700 leading-relaxed text-xs md:text-lg">
              <p>Hi, I'm Saloni. I'm so happy you're here.</p>
              
              <p>
                Eikona was born from a simple belief — that when we discover who we truly are, 
                everything else begins to align.
              </p>
              
              <p>
                Over the decade, I've met so many young people and professionals searching for 
                clarity, confidence, and a way to express themselves — not just to impress, but 
                to connect and create impact. Through Eikona, I hope to make that journey a 
                little more guided, a little more joyful.
              </p>
              
              <p>
                Here, we work on what's within as much as what's seen on the outside — helping 
                you grow in style and substance, presence and purpose.
              </p>
              
              <p>
                If you're ready to explore that journey, start with any of our programs, join 
                our growing community, or simply take a moment to reflect with us.
              </p>
              
              <p>
                Wherever you are today, know that this is a space for you to evolve — at your 
                own pace, in your own way.
              </p>
              
              <p className="italic">With warmth and gratitude,</p>
            </div>

            <div className="pt-4 border-t border-stone-200">
              <p className="font-serif italic text-amber-800 text-lg">
                Saloni Parikh
              </p>
              <p className="text-stone-600 text-sm mt-1">
                Founder & Chief Experience Curator, Eikona
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Padding */}
      <div className="pb-16"></div>
    </div>
  );
}