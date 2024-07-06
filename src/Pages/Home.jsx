import { FaApple, FaGooglePlay } from "react-icons/fa";
import crypto from "../assets/img/crypto.png";
import unsual from "../assets/img/unsual.png";
import rely from "../assets/img/rely.png";
import cash from "../assets/img/cash.png";
import incentives from "../assets/img/incentives.png";
import assets1 from "../assets/img/assets1.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
    <Header />
    <div className="pt-[60px] ">
      <section className="py-5 px-10 bg-theme md:flex justify-between items-center">
        <div className="flex flex-col gap-6">
          <p
            className="text-dark text-4xl md:text-8xl font-extrabold"
            data-aos="fade-right"
          >
            Buy and sell giftcards and crypto at the best rates.
          </p>

          <div data-aos="zoom-in">
            <p className="text-base font-bold mb-5">
              SUAP takes pride in being Nigeria's most trusted platform for
              trading cryptocurrencies and digital assets.
            </p>

            <div className="flex-col md:flex-row flex justify-start gap-5 items-center" data-aos="">
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

      <section className="py-20 px-10 bg-light flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl md:w-2/4 text-center text-dark font-bold mb-5"
          data-aos="fade-up"
        >
          Why should you use us as a trading platform?
        </p>
        <p
          className="text-base text-gray-500 text-center md:w-2/4"
          data-aos="fade-up"
        >
          With the complexity of cryptocurrency, SUAP has many advantages that
          have the potential to change your financial landscape.
        </p>

        <div className="flex flex-wrap justify-between ">
          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={unsual} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">
              We accept unusual digital assets.
            </p>
            <p className="text-base text-gray-500">
              Our expertise is in assisting customers with unusual
              circumstances, including those who have previously been turned
              down by a digital asset trader. We regularly get your digital
              asset traded for cash and vice versa where other asset traders
              have failed.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={incentives} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">
              Get fantastic rates and incentives.
            </p>
            <p className="text-base text-gray-500">
              Our expertise is in assisting customers with unusual
              circumstances, including those who have previously been turned
              down by a digital asset trader. We regularly get your digital
              asset traded for cash and vice versa where other asset traders
              have failed.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={cash} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">
              We accept unusual digital assets.
            </p>
            <p className="text-base text-gray-500">
              Our expertise is in assisting customers with unusual
              circumstances, including those who have previously been turned
              down by a digital asset trader. We regularly get your digital
              asset traded for cash and vice versa where other asset traders
              have failed.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={rely} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">You can rely on us.</p>
            <p className="text-base text-gray-500">
              It's difficult to know who to trust in a crowded market. As
              experts, we send newsletters to our customers on a regular basis
              to reaffirm our commitment to providing excellent service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-10 bg-light flex flex-col justify-center items-center">
        <img src={assets1} alt="" data-aos="zoom-out-down" />
        <p
          className="text-3xl md:text-6xl md:w-2/4 text-center text-dark font-bold mb-5"
          data-aos="fade-down"
        >
          Cryptocurrencies and digital assets made easy with facts
        </p>

        <p
          className="text-base text-gray-500 text-center md:w-2/4"
          data-aos="fade-up"
        >
          SUAP has many fascinating features, offers, and abilities, making it
          one of Nigeria's most advanced creations of the twenty-first century.
          With the complexity of cryptocurrency, SUAP has many advantages that
          have the potential to change your financial landscape.
        </p>

        <div className="flex flex-wrap justify-center gap-10 my-6">
          <div
            className="md:w-2/5 bg-blue-100 p-10 rounded-md"
            data-aos="fade-right"
          >
            <p className="text-2xl mb-2">
              {" "}
              We offer the best after-sales service.
            </p>
            <p className="text-base ">
              Our post-sale team is here to help and guide you through your
              cryptocurrency journey. We not only answer all of your
              post-purchase questions, but we also assist you in making changes,
              additions, and amendments to your cryptocurrency wallet type.
            </p>
          </div>

          <div className="md:w-2/5 bg-red-100 p-10" data-aos="zoom-out-left">
            <p className="text-2xl mb-2">
              {" "}
              We always act in your best interests.
            </p>
            <p className="text-base ">
              We specialize in assisting people who have had a disappointing
              crypto journey as well as those who have no prior crypto
              knowledge. Our company's mission is to assist people who have been
              disappointed by the Nigerian banking system.
            </p>
          </div>

          <div
            className="md:w-2/5 bg-yellow-100 p-10 rounded-md"
            data-aos="zoom-in-left"
          >
            <p className="text-2xl mb-2"> Free initial appraisals.</p>
            <p className="text-base ">
              We can give you a good idea of which banks will support your
              crypto journey, how much you can borrow, and how to open the
              appropriate account type.
            </p>
          </div>

          <div
            className="md:w-2/5 bg-gray-300 p-10 rounded-md"
            data-aos="zoom-in-right"
          >
            <p className="text-2xl mb-2">
              {" "}
              We know which banks and cryptocurrency wallets can and cannot
              assist.
            </p>
            <p className="text-base ">
              Unlike most traders, who are simply salesmen, we are experts in
              the crypto and digital asset guidelines that the majority of
              people follow and trust.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="bg-theme rounded-md px-16 py-3 hover:bg-dark hover:text-light hover:shadow-md"
        >
          {" "}
          Start Trading
        </Link>
      </section>

      {/* <section className="py-20 px-10 bg-gray-800 flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl md:w-2/4 text-center text-light font-bold mb-5"
          data-aos="fade-down"
        >
          Cryptocurrencies and digital assets made easy with facts
        </p>
      </section> */}
    </div>

    <Footer />
    </>
  );
};

export default Home;
