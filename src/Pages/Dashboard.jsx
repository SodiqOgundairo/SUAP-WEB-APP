import HeaderUser from "../components/HeaderUser";
import SideBar from "../components/SideBar";
import Footer from "./../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <SideBar />
      <div className="mt-20 md:mt-0 md:ms-[20%] flex flex-col">
        <HeaderUser className="w-screen" />
        <section className="mt-10 px-7">
          <p className="font-bold">Recent Transaction</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
