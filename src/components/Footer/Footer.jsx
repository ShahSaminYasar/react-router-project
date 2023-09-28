import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="pt-8 pb-3 px-2 border-t-[1px] border-t-neutral-200 mt-8">
      <div className="px-3 grid grid-cols-1 md:grid-cols-6 gap-5 text-base text-neutral-500 font-semibold max-w-6xl mx-auto pb-8 border-b-[1px] border-b-neutral-200">
        <div className="md:col-span-3">
          <Link to="/">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt=""
              className="w-52 -ml-5"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-neutral-900 uppercase">Resources</h4>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-neutral-900 uppercase">Follow Us</h4>
          <Link to="/github">Github</Link>
          <Link to="#">Discord</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-neutral-900 uppercase">Legal</h4>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row flex-wrap justify-between items-center max-w-6xl mx-auto py-5 text-neutral-500">
        <p className="order-2 md:order-1 text-center md:text-left">&copy; 2023 | <a href="http://shahsaminyasar.github.io/portfolio">SHAH SAMIN YASAR</a> | All Rights Reserved</p>
        <div className="flex flex-wrap gap-3 order-1 md:order-2">
          <Link to="#">Facebook</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">Github</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
