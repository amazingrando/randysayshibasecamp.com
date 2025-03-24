import Image from 'next/image';
import Framed from '@/assets/images/framed.png';

export default function Skills() {
  return (
    <div className="ps-8 lg:ps-16 bg-blue-700 min-h-[700px] text-blue-100 min-h-screen">
      <Image src={Framed} alt="Framed" className="w-full h-auto md:max-w-[60%] md:float-end" />
      <h2 className="text-3xl lg:text-6xl leading-none font-medium text-balance max-w-4xl pt-16 lg:pt-64">
        <span className="text-5xl lg:text-8xl mb-4 block">Hi 👋 <br/>Basecamp, <br/></span> I’m Randy — a designer, builder, and lifelong maker.
      </h2>

      <main className="mt-16 prose lg:prose-lg prose-headings:font-semibold prose-invert prose-p:text-white pb-16 lg:sticky lg:top-16 self-start">
        <p className='lead first-line:uppercase first-line:font-bold'>I’ve been making things since I was a teenager, drawing comic books and selling them to my classmates. I was sure I was going to work in the comics industry. But while studying cartooning at art school, I discovered Photoshop (version four!), and something just clicked. I fell in love with graphic design and shifted gears. Suddenly, I was working with specialty inks, embossing techniques, and interesting folds in print — basically, finding every creative edge I could in physical media. But not long after, the web caught my eye.</p>
      </main>
    </div>
  );
} 