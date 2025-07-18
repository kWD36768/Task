import React from 'react'
import { FaArrowUp } from "react-icons/fa";
const Investorsdashboard = () => {
  const stats = [
    { title: "Total Deals", value: 112, change: "10%" },
    { title: "Pending Requests", value: 27, change: "4%" },
    { title: "Total Investments", value: "$142K", change: "18%" },
    { title: "Active Startups", value: 39, change: "7%" },
  ];

  const dealFlow = [
    { startup: "FinTechX", stage: "Seed", amount: "$15,000" },
    { startup: "MediHealth", stage: "Series A", amount: "$50,000" },
    { startup: "AgroGrow", stage: "Pre-Seed", amount: "$8,000" },
  ];

  const portfolio = [
    {
      name: "GreenHive",
      industry: "HealthTech",
      amount: "$50,000",
      roi: "8%",
    },
    {
      name: "SolarNest",
      industry: "FinTech",
      amount: "$75,000",
      roi: "12%",
    },
  ];

  const tracking = [
    { startup: "EcoGrow Solutions", status: "In Progress" },
    { startup: "FinBot AI", status: "Closed" },
    { startup: "ThinkMesh", status: "Pending" },
  ];
  return (
<>
<div className="min-h-screen px-6 py-8 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Investor Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((card, i) => (
          <div
            key={i}
            className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 p-5 rounded-2xl text-center shadow"
          >
            <p className="text-gray-500 font-medium">{card.title}</p>
            <div className="flex justify-center items-center pt-4 text-gray-900 text-3xl font-extrabold">
              {card.value}
            </div>
            <div className="flex justify-center items-center text-green-500 text-sm mt-2">
              <FaArrowUp />
              <span className="ml-1">{card.change}</span>
            </div>
            <p className="text-gray-400 text-xs pt-2">vs previous 30 Days</p>
          </div>
        ))}
      </div>

      {/* Deal Flow Section */}
      <div className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Deal Flow</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="border-b border-gray-300">
              <tr>
                <th className="py-2">Startup</th>
                <th className="py-2">Stage</th>
                <th className="py-2">Investment</th>
              </tr>
            </thead>
            <tbody>
              {dealFlow.map((deal, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-300/30">
                  <td className="py-2 font-medium">{deal.startup}</td>
                  <td className="py-2">{deal.stage}</td>
                  <td className="py-2">{deal.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Investment Portfolio */}
      <div className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Investment Portfolio</h2>
        <div className="space-y-4">
          {portfolio.map((inv, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow hover:bg-gray-100 transition"
            >
              <p className="font-semibold text-gray-900">
                {inv.name} ({inv.industry})
              </p>
              <p className="text-sm text-gray-600">
                Amount: {inv.amount} | ROI: {inv.roi}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deal Flow Tracking */}
      <div className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Deal Flow Tracking</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tracking.map((deal, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow hover:bg-gray-100 transition"
            >
              <p className="font-semibold text-gray-900">{deal.startup}</p>
              <p className="text-sm text-gray-600">Status: {deal.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition text-lg">
          Discover New Startups
        </button>
      </div>
    </div>
</>
  )
}

export default Investorsdashboard