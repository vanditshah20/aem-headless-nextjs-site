import Image from 'next/image';

const TeamSection = () => {
  return (
    <section className="py-12 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4 mb-16">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-6">Join our team</h1>
            <p className="text-lg text-gray-700">Our philosophy is simple – make the world a greener place.</p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image className="block" src="/images/team-members-photos.png" alt="" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;