'use client';

import { Button } from '@/components/ui/button';

import { BookOpen, GraduationCap, type LucideIcon, Users } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: GraduationCap,
    title: "Building a Powerful Resume",
    description: "Harness the power of AI, LaTeX code, and our ATS-friendly templates to create resumes that stand out to top employers. Tailored for each student's unique strengths and experiences, ensuring they make a lasting impression."
  },
  {
    icon: BookOpen,
    title: "Mastering Interview Prep",
    description: "We prepare students not just for what to say in an interview, but how to say it. Our interview prep goes beyond typical advice, coaching students on confident communication and framing responses to highlight their strengths."
  },
  {
    icon: Users,
    title: "Personalized Mock Interviews",
    description: "Experience realistic mock interviews tailored to each student's field and role, followed by detailed feedback on performance. We guide them on how to refine their responses, improve presentation, and tackle challenging interview scenarios."
  }
];

const Step = ({ icon: Icon, title, description }: { icon: LucideIcon,title: string; description: string }) => {
  return (
    <div className="bg-white p-8  shadow-sm border border-border group">
      <div className="bg-black/5 w-12 h-12 flex items-center justify-center rounded-full mb-6 shadow-inner border border-black/10">
        <Icon className="w-6 h-6 text-black/30 group-hover:text-black  transition-all duration-300 ease-in-out" />
      </div>
      <h3 className="text-xl font-medium text-black/90 mb-4">{title}</h3>
      <p className="text-black/70 leading-relaxed text-sm ">{description}</p>
    </div>
  );
};

export default function CollegesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col ">
      <main className="">  
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">   
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/college.jpg" 
              width={1920}
              height={1080}
              alt="Students in career development session" 
              className="w-full h-full object-cover brightness-[0.5]" 
            />  
          </div>
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-medium  text-white/90 mb-6">
                Fast placements, personalized strategies
              </h1>
              
              <p className=" text-white/80 mb-8 leading-relaxed">
                At KonnectUp, we understand the dedication institutions put into preparing students for placements. 
                However, we believe that Career Development should be holistic and hyper-personalized. 
                It’s not just about telling students what to do; it’s about guiding them through a clear, 
                step-by-step process to land their ideal role.
              </p>
              <Button className="px-8 py-3 text-lg">
                Tell me more
              </Button>
            </div>
          </div>
        </section>

        {/* 3-Step Journey */}
        <section className="py-20  max-w-7xl mx-auto">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-2xl font-medium text-black/90 mb-6">
                Our 3-Step Approach
              </h2>
              <p className=" text-black/70">
                A comprehensive journey to help students navigate their career path from preparation to success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
              {steps.map((step) => (
                <Step key={step.title} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/90  max-w-7xl mx-auto mb-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Transform Your Institution&apos;s Career Development Program
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Partner with KonnectUp to provide your students with industry-leading career guidance and support. 
              Schedule a consultation with our team today.
            </p>
            <Button className="px-8 py-3 text-lg">
              Book a Consultation
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}