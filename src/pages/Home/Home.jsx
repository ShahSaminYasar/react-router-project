import { Link } from "react-router-dom";
import HeroImg from "../../assets/svg/hero.svg";
import HomeImg from "../../assets/svg/home.svg"

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-20 px-3">
        <img src={HeroImg} alt="" className="max-w-md" />
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right">
          <h3 className="text-4xl font-fold text-neutral-900">Download Now</h3>
          <h1 className="text-5xl font-bold text-neutral-900 mb-7">
            Lorem Ipsum
          </h1>
          <Link className="py-2 px-3 bg-orange-700 rounded-lg text-white">
            Download Now
          </Link>
        </div>
      </div>

      <div className="flex flex-col place-items-center py-12">
        <img src={HomeImg} alt="" className="max-w-md" />
        <h3 className="text-5xl font-bold text-neutral-900">Lorem Ipsum Yojo</h3>
      </div>
    </div>
  );
}

export default Home;
