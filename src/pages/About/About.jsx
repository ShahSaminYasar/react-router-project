import AboutImg from "../../assets/svg/about.svg"

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-20 py-20 pb-5 max-w-6xl mx-auto px-3">
      <img src={AboutImg} alt="" className="w-full max-w-xs lg:max-w-md" />
      <div>
        <h2 className="text-neutral-900 font-bold text-4xl mb-7">
          React development is carried out by passionate developers
        </h2>
        <p className="text-lg text-neutral-700 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nemo
          dolorum eaque rem laudantium rerum voluptas sit aperiam voluptatibus
          illum? Ut quaerat ab, assumenda perferendis deleniti ipsam quidem
          molestias sint eum quo, consequuntur sunt exercitationem dolores
          minima odit.
        </p>
        <p className="text-lg text-neutral-700 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit voluptatem expedita excepturi nobis ducimus tempore? Esse animi illum porro rem, voluptatum alias veritatis error!</p>
      </div>
    </div>
  );
}

export default About