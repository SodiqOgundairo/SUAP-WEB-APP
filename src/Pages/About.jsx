
import about from "../assets/img/about.png";
import vision from "../assets/img/vision.png";
import excellence from "../assets/img/excellence.png";
import fastpayment from "../assets/img/fastpayment.png";
import intergrity from "../assets/img/intergrity.png";
import customer from "../assets/img/customer.png";
import whatWeDo from "../assets/img/what_we_do.png";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import logo from "../assets/img/logo.png";

const About = () => {
  return (
    <>
    <Header />
    <div className="pt-[60px] ">
      <section className="py-16 px-10 bg-theme md:flex justify-between items-center">
        <div className="flex flex-col gap-10">
          <p
            className="text-dark text-4xl md:text-8xl font-extrabold"
            data-aos="fade-right"
          >
           <img src={logo} className="w-[20%] inline" alt="" /> Your Digital Trading Solution
          </p>

          <div data-aos="zoom-in">
            <p className="text-base font-bold mb-5 w-2/3">
              We are a platform with extensive experience, which is the key to
              earning trust. We are partners you can rely on when it comes to
              your digital assets. We are SUAP!
            </p>
          </div>
        </div>
        <img
          src={about}
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
          About
        </p>
        <p
          className="text-lg text-gray-500 md:px-20 text-left"
          data-aos="fade-up"
        >
          At SUAP, we are aware of how every day, our activities impact people's
          lives. We adhere to the principles of morality, sincerity, and
          integrity. It permeates everything we do as a company and how we
          interact with our customers. In terms of innovation, we continuously
          research to foresee our customers' needs and use our in-depth
          understanding of the cryptocurrency market to offer cutting-edge
          products and services aimed at meeting their specific requirements.{" "}
          <br /> <br />
          We work to ensure that our clients realize their maximum potential
          because we understand that they are our most valuable asset. We treat
          each person as an individual because we recognize and admire their
          distinctive skill, style, and experience. To support the vision and
          financial goals of our clients, strengthen the organization, and
          ensure that your cryptocurrency experience is top-notch, we take
          necessary efforts to fulfill our strategic objectives.
        </p>
      </section>

      <section className="py-20 px-10 bg-light flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl md:w-2/4 text-center text-dark font-bold mb-5"
          data-aos="fade-up"
        >
          Our Mission
        </p>
        <div className="flex flex-wrap justify-center gap-5 my-6">
          <div className="md:w-1/4 bg-red-100 p-10" data-aos="zoom-out-left">
            <p className="text-base ">
              Expert crypto advice to help you make an informed decision.
            </p>
          </div>

          <div className="md:w-1/4 bg-yellow-100 p-10" data-aos="zoom-out-left">
            <p className="text-base ">
              Providing solutions even if you've been told there are no reliable
              trading platforms.
            </p>
          </div>

          <div className="md:w-1/4 bg-green-100 p-10" data-aos="zoom-out-left">
            <p className="text-base ">
              Keeping it simple so you can get cash for coins or coins for cash
              quickly.
            </p>
          </div>

          <div className="md:w-1/4 bg-orange-100 p-10" data-aos="zoom-in-right">
            <p className="text-base ">
              Assisting customers who have been let down by other trading
              platforms.
            </p>
          </div>

          <div
            className="md:w-1/4 bg-purple-100 p-10"
            data-aos="zoom-out-right"
          >
            <p className="text-base ">
              We are working hard to gain your trust so that we can be your
              trading platform for life.
            </p>
          </div>

          <div className="md:w-1/4 bg-blue-100 p-10" data-aos="zoom-in-left">
            <p className="text-base ">
              To operate in an ethical manner for the benefit of society while
              providing you with an unbeatable market price.
            </p>
          </div>

          <div className="md:w-1/4 bg-gray-100 p-10" data-aos="zoom-out-left">
            <p className="text-base ">
              Giving our employees a rewarding job with opportunities for
              advancement.
            </p>
          </div>

          <div className="md:w-1/4 bg-lime-100 p-10" data-aos="zoom-in-left">
            <p className="text-base ">
              With our monthly newsletter, we provide free information and
              resources on when to buy and sell cryptocurrencies and/or digital
              assets.
            </p>
          </div>

          <div className="md:w-1/4 bg-pink-100 p-10" data-aos="zoom-out-right">
            <p className="text-base ">
              Promoting ethical behavior and healthy competition in Nigeria's
              crypto industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-10 bg-light flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl md:w-2/4 text-center text-dark font-bold mb-5"
          data-aos="fade-up"
        >
          Our Vision
        </p>
        <div className="md:flex items-start justify-center mx-auto">
          <img src={vision} alt="" className="md:w-1/3" data-aos="fade-right" />
          <div className="flex flex-wrap justify-center gap-5 my-6">
            <div className="md:w-1/3 bg-pink-100 p-10" data-aos="zoom-in-left">
              <p className="text-base ">
                To be recognized as the leading cryptocurrency and digital asset
                trading platform in Nigeria.
              </p>
            </div>

            <div
              className="md:w-1/3 bg-purple-100 p-10"
              data-aos="zoom-out-right"
            >
              <p className="text-base ">
                A world-class trading platform staffed by the industry's most
                knowledgeable digital asset specialists.
              </p>
            </div>

            <div
              className="md:w-1/3 bg-green-100 p-10"
              data-aos="zoom-out-left"
            >
              <p className="text-base ">
                Innovating constantly to set a new standard for the rest of our
                industry.
              </p>
            </div>

            <div className="md:w-1/3 bg-blue-100 p-10" data-aos="zoom-in-right">
              <p className="text-base ">
                Operating entirely online via our desktop, mobile and app and
                utilizing technology to provide a quick and easy solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-10 bg-light flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl md:w-2/4 text-center text-dark font-bold mb-5"
          data-aos="fade-down"
        >
          Our Values
        </p>

        <div className="flex flex-wrap justify-between ">
          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={excellence} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">Excellence.</p>
          </div>

          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={intergrity} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">Integrity.</p>
          </div>

          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={fastpayment} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">Fast Payment.</p>
          </div>

          <div
            className="flex flex-col gap-4 md:w-1/5 my-5 text-center"
            data-aos="fade-up"
          >
            <img src={customer} alt="" className="rounded-lg" />
            <p className="text-2xl font-bold">Customer Experience.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-10 bg-light flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl md:w-2/4 text-center text-dark font-bold mb-5"
          data-aos="fade-up"
        >
          What we do
        </p>
        <div className="md:flex items-start justify-center mx-auto">
          <img
            src={whatWeDo}
            alt=""
            className="md:w-1/2"
            data-aos="fade-right"
          />
          <div className="flex flex-wrap justify-center gap-5 my-6">
            <div className=" bg-orange-100 p-10" data-aos="zoom-in-left">
              <p className="text-lg ">
                “Spend some time with Bitcoin. Learn it, challenge it, and use
                it. You can assume no government wants you adopting this system
                in any capacity, and for that reason alone it's worth
                consideration by honest, moral, and industrious people”
                “Economists and journalists often get caught up in this
                question: Why does Bitcoin have value? And the answer is very
                easy. Because it is useful and scarce.”
                <span className="block italic mt-5">
                  - Erik Voorheesxchanges.
                </span>
              </p>
            </div>
            <div className="py-10 italic flex flex-col gap-5" data-aos="zoom-out-right">
              <p className="text-lg ">
                We buy and sell Digital Assets such as Bitcoin (BTC), Ethereum
                (ETH), Binance Coin (BNB), Tether USD (USDT), Solana (SOL),
                Cardano (ADA), Ripple (XRP), USD Coin (USDC), Dogecoin (DOGE),
                Litecoin (LTC), Algorand (ALGO), Binance USD (BUSD), Bitcoin
                Cash (BCH) and Tron (TRX). 
              </p>
              <p className="text-lg ">
                We also put more of an emphasis on
                popular gift cards, so here is a list of the top 10 most
                valuable gift cards: iTunes, Ebay, Walmart, Google Play, Home
                Depot, Amazon (also the most popular gift card in 2022,
                according to WalletHub), Steam, Razer Gold, Nordstrom and
                Sephora. 
              </p>
              <p className="text-lg ">
                 Please get in touch with us if you'd want to sell any
                other gift cards, FinTech funds, or bank funds for Naira. Bank
                transfers, FinTech payment platforms, and cryptocurrency
                exchange are all acceptable modes of payment that we also
                accept; you can select the one that works best for you.
              </p>
            </div>
          </div>
        </div>
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

export default About;
