import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden">
      <Image className="absolute bottom-0 left-0" src="/images/about-lines.svg" alt="" width={400} height={300} style={{ objectFit: 'contain' }} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-6xl mb-8">About us</h1>
          <p className="text-2xl text-black font-medium mb-10">
            At Flora&Fauna, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
          </p>
          <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="#">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;