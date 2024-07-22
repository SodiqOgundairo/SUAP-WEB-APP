import React from 'react';
import HeaderUser from "../components/HeaderUser";
import SideBar from "../components/SideBar";
import Footer from "./../components/Footer";

const Dashboard = () => {
  const date = new Date().getUTCDate();

  return (
    <div>
      <SideBar />
      <div className="mt-20 md:mt-0 md:ms-[20%] flex flex-col">
        <HeaderUser className="w-screen" />
        <div className="flex flex-wrap justify-center items-center md:gap-20 gap-5 w-full p-5">
          {/* Your other content */}
        </div>
        <section className="mt-10 px-7">
          <p className="font-bold text-2xl">Recent Transaction</p>
          <table className="w-full bg-gray-200 table auto">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Date</th>
                <th className="text-left px-4 py-2">Transaction</th>
                <th className="text-left px-4 py-2">Amount</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead> 
            <tbody>
              {/* Add hover effect to each row */}
              <tr className="hover:bg-gray-100">
                <td className="text-left px-4 py-2">{date}</td>
                <td className="text-left px-4 py-2">Crypto</td>
                <td className="text-left px-4 py-2">N8,099</td>
                <td className="text-left px-4 py-2">Success</td>
                <td className="text-left px-4 py-2">Button</td>
              </tr>
              {/* Add more rows with hover effect if needed */}
              {/* Add hover effect to each row */}
              <tr className="hover:bg-gray-100">
                <td className="text-left px-4 py-2">{date}</td>
                <td className="text-left px-4 py-2">Crypto</td>
                <td className="text-left px-4 py-2">N8,099</td>
                <td className="text-left px-4 py-2">Success</td>
                <td className="text-left px-4 py-2">Button</td>
              </tr>
              {/* Add more rows with hover effect if needed */}
            </tbody>
          </table>
        </section>
        <div className="relative bottom-0">

        {/* <Footer className="bottom-0 relative" /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
