'use client';

import Image from 'next/image';
import Framed from '@/assets/images/framed.png';
import { Carousel } from "flowbite-react";
import ys1 from '@/assets/images/portfolio/ys/music-mockuuups-transparent-iphone-16-pro-mockup-titanium-black@2x.png';
import ys2 from '@/assets/images/portfolio/ys/sas-mockuuups-transparent-iphone-16-pro-mockup-titanium-black@2x.png';
import ys3 from '@/assets/images/portfolio/ys/united-mockuuups-transparent-iphone-16-pro-mockup-titanium-black@2x.png';
import ys4 from '@/assets/images/portfolio/ys/visitor-mockuuups-transparent-iphone-16-pro-mockup-titanium-black@2x.png';
import Link from 'next/link';
import Portfolio from '@/components/sections/portfolio';
import signature from '@/assets/images/signature.png';

export default function Home() {
  return (
      <div>
        <div className="ps-8 lg:ps-16 bg-blue-700 pb-16 text-blue-100">
          <Image src={Framed} alt="Framed" className="w-full h-auto md:max-w-[60%] md:float-end" />
          <h2 className="text-3xl lg:text-6xl leading-none font-medium text-balance max-w-4xl pt-16 lg:pt-64">
            <span className="text-5xl lg:text-8xl mb-4 block">Hi 👋 <br/>Basecamp, <br/></span> I'm Randy — a designer, builder, and lifelong maker.
          </h2>

          <main className="mt-16 prose lg:prose-lg prose-headings:font-semibold prose-invert prose-p:text-white pb-16 lg:sticky lg:top-16 self-start max-w-4xl">
            <p className='lead first-line:uppercase first-line:font-bold'>I've been making things since I was a teenager in the '90s, drawing comic books and selling them to my classmates. I was sure I was going to work in the comics industry. But while studying cartooning at art school, I discovered Photoshop (version four!), and something just clicked. I fell in love with graphic design and shifted gears. Suddenly, I was working with specialty inks, embossing techniques, and interesting folds in print — basically, finding every creative edge I could in physical media.</p> 
            <p className='lead font-semibold'>But not long after, the web caught my eye.</p>
          </main>
        </div>

        <div className='px-8 lg:px-16 py-32 bg-white'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto'>
            <div className="prose lg:prose-lg prose-headings:font-semibold max-w-3xl">
              <p className='first-line:uppercase first-line:font-bold'>The early 2000s were wild. Flash was still everywhere, CSS was getting exciting, and I realized this was the next big medium for creativity. So I jumped in with design and learning to code — HTML, CSS, and enough JavaScript to make things move. I've always believed you must understand the complete system to design well. I didn't want to hand off ideas in a vacuum — I wanted to bring them to life.
              </p>
              <p><strong>That drive to learn and make better things has stayed with me throughout my career.</strong> I've built websites for universities, helped grow design teams from the ground up, created design systems used by thousands of sites, and led projects that won Webby Awards. I even host a design podcast and speak at conferences. But underneath it all, I'm still just a maker who wants to take a complex mess and turn it into something beautiful, useful, and human.</p>
              <p>37signals/Basecamp is on the short list of companies I've always admired. </p>
              <p>A decade ago, I landed a job at another one of the companies I admired: Four Kitchens. <strong>I've had an incredible run there — I rebuilt the creative team, led major design system initiatives, and helped institutions like NYU and Yale make major digital leaps. But after a long and successful chapter, I'm ready for something new.</strong> I want to go deep into product work. I want to focus, iterate, and ship alongside people who care deeply about doing the work right. </p>
              <p>That's why this role at 37signals is the perfect next step.</p>
              <p>I'd bring a strong mix of visual design chops, systems thinking, UX strategy, and front-end know-how to the team. I'm comfortable writing production-quality HTML and CSS. I obsess over writing UI copy that makes sense. I run design critiques and ship components. I also love exploring ways to make tools more accessible, inclusive, and adaptable. I'd fit right in at 37signals, where the work starts with design and runs deep into how the product functions.</p>
            </div>
            <div className='h-full max-w-xl flex flex-col items-start justify-start pb-8'>
              <div className='bg-ash-200 pb-16 sticky top-4'>
                <div className='p-16 pb-8 space-y-4'>
                  <h2 className='text-3xl font-semibold'>Yale design system</h2>
                  <p className='text-base text-ash-900 font-medium'>Yale has more than a thousand websites, and now, with its first digital design system, it can keep them all on brand.</p>
                  <p className='text-sm text-ash-900 font-medium'><Link href='#work' className='underline text-blue-800'>Skip to the work</Link></p>
                </div>
                
                <Carousel className='max-h-[650px] min-h-[650px]' slide={false}>
                  <Image src={ys1} alt="..." className='w-1/2 h-auto' />
                  <Image src={ys2} alt="..." className='w-1/2 h-auto' />
                  <Image src={ys3} alt="..." className='w-1/2 h-auto' />
                  <Image src={ys4} alt="..." className='w-1/2 h-auto' />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className='px-8 lg:px-16 py-32 bg-blue-800'>
          <div className='max-w-6xl mx-auto'>
            <div className="prose lg:prose-lg prose-headings:font-semibold prose-invert prose-p:text-white max-w-3xl mx-auto font-medium">
              <h2 className=''>So, why am I a designer?</h2>

              <p className=' first-line:uppercase first-line:font-semibold'>Because I want to make the world a little easier for people. I notice friction — clunky forms, unclear flows, frustrating messages — and I want to fix them. I believe digital experiences should be as natural and reliable as the physical world. Gravity always works. Your interface should, too.</p>

              <p>Design is one of the most powerful tools we have to improve lives at scale.</p>

              <div className="space-y-2 my-16">
                <div className="aspect-w-16 aspect-h-9 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/vUGi-sQBjI4"
                    title="Video title here"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-sm text-blue-200 italic">
                  My work on the web design for the Wu Tsai Institute is a <a href="https://winners.webbyawards.com/2023/websites-and-mobile-sites/general-websites-and-mobile-sites/schooluniversity/248626/wu-tsai-institute-yale-university">Webby Award Nominee</a>.
                </figcaption>
              </div>
              
              <p> I've used my skills to help universities clarify their missions, nonprofits raise more funds, and even tabletop gaming companies improve their digital experiences. (I'm a giant RPG nerd — I've contributed to sites and games that have won ENNIE awards, the Webby-equivalents of the roleplaying world.) Whether I'm helping a friend launch their Kickstarter or working with a university to tell its story online, I bring the same care and curiosity to every project.</p>

              <p><strong>As for why I love the web?</strong></p>
              
              <p>It's alive.</p>
              
              <p>It responds.</p>
              
              <p>It changes based on your preferences, your actions, your device.</p>
              
              <p>That level of interactivity is like nothing else. I love designing for that — for the little animations that make something feel delightful, the responsive moments that surprise and delight, and the thoughtful structures that allow everyone on any device to access the same tools and info. There's something almost magical about how a few lines of code can turn into something millions use daily.</p>

              <p>Working on the web is also inherently inclusive. Anyone with a phone and a connection can access the same world of ideas. That's powerful. And I want to be part of the team making that experience better, faster, and more humane.</p>
            </div>
          </div>
        </div>

        <div className='px-8 lg:px-16 py-32 bg-white'>
          <div className='max-w-3xl mx-auto space-y-8'>
            <p className='text-3xl text-balance'>So here I am — ready to keep building, keep learning, and hopefully, join you in shaping the next generation of useful, joyful web products. I'd love to bring my maker mindset to 37signals and help move the work forward.</p>
            <Image src={signature} alt="Signature" className='w-content h-auto' />
            <p className='text-lg'>
              <a href="mailto:oest@amazingrando.com" className='text-blue-800 underline'>oest@amazingrando.com</a> • 412-853-4431
            </p>
          </div>

        </div>

        <Portfolio />
      </div>
  );
}