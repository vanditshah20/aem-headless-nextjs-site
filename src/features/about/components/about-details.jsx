const AboutDetails = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div>
              <h1 className="font-heading text-6xl">About us</h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:max-w-lg md:ml-auto">
              <p className="text-xl font-medium mb-10">
                At Flora&Fauna, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
              </p>
              <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-lime-500 border border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-teal-900 rounded-full transition duration-300" href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;