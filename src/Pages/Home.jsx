import { FaApple, FaGooglePlay } from "react-icons/fa";
import crypto from "../assets/img/crypto.png";

const Home = () => {
  return (
    <div className="pt-[100px] ">
      <section className="py-5 px-10 bg-theme md:flex justify-between items-center">
        <div className="flex flex-col gap-6">
          <p
            className="text-dark text-4xl md:text-8xl font-extrabold"
            data-aos="fade-right"
          >
            Buy and sell giftcards and crypto at the best rates.
          </p>

          <div  data-aos="zoom-in">

          <p className="text-base font-bold mb-5">
            SUAP takes pride in being Nigeria's most trusted platform for
            trading cryptocurrencies and digital assets.
          </p>

          <div className="flex justify-start gap-5 items-center" data-aos="">
            <button className="bg-dark gap-3 px-5 py-2 text-light hover:bg-light hover:text-dark rounded-md flex justify-between items-center">
              <FaGooglePlay className=" text-4xl" />
              <span className="flex flex-col gap-0">
                <p className="text-sm">Download on </p>
                <p className="text-base font-bold">Playstore</p>
              </span>
            </button>

            <button className="border border-dark gap-3 px-5 py-2 text-dark hover:bg-dark hover:text-light rounded-md flex justify-between items-center">
              <FaApple className=" text-4xl" />
              <span className="flex flex-col gap-0">
                <p className="text-sm">Download on </p>
                <p className="text-base font-bold">Apple Store</p>
              </span>
            </button>
          </div>
          </div>
        </div>
        <img
          src={crypto}
          alt="crypto Image"
          className="md:w-1/2"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </section>

      <section className="py-5 px-10 bg-light flex flex-col justify-center items-center">
      <p className="text-4xl text-dark font-bold">
      Why should you use us as a trading platform?
      </p>
      <p className="text-4xl text-gray-500">
      Why should you use us as a trading platform?
      </p>
      
      </section>

    </div>
  );
};

export default Home;
