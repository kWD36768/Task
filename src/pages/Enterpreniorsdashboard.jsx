import React from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Enterpreniorsdashboard = () => {
   const barData = [
  { name: "Jan", funding: 4000 },
  { name: "Feb", funding: 3000 },
  { name: "Mar", funding: 5000 },
  { name: "Apr", funding: 4780 }, 
  { name: "May", funding: 5890 },
  { name: "Jun", funding: 4390 },
];
  return (
<>
<div
      className="min-h-screen px-6 py-8 bg-cover bg-center text-black"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {["Fintech", "HealthTech", "EdTech", "AgriTech"].map((filter) => (
          <button
            key={filter}
            className="bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur border border-white/50 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Total Users", value: "1,245" },
          { title: "Investments", value: "$85,300" },
          { title: "Sessions", value: "342" },
          { title: "Growth", value: "12%" },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur p-6 rounded-xl shadow-lg transition"
          >
            <h2 className="text-md font-semibold mb-1 text-gray-800">{card.title}</h2>
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Collaboration Requests */}
      <div className="bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur p-6 rounded-lg shadow mb-10 transition">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Collaboration Requests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Investor A", "Investor B", "Investor C"].map((inv) => (
            <div key={inv} className="border border-white/50 rounded-md p-4 bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur transition text-gray-900">
              <h3 className="font-semibold">{inv}</h3>
              <p className="text-sm text-gray-700">Looking to invest in AgriTech startups</p>
              <button className="mt-3 bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-900 text-sm">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Chart */}
      <div className="bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur p-6 rounded-lg shadow mb-10 transition">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Funding Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="gray" />
            <XAxis dataKey="name" stroke="gray" />
            <YAxis stroke="gray" />
            <Tooltip contentStyle={{ backgroundColor: "#f0f0f0", borderColor: "#aaa", color: "#000" }} />
            <Bar dataKey="funding" fill="#666" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Investments Table */}
      <div className="bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur p-6 rounded-lg shadow mb-10 transition">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Investments</h2>
        <table className="w-full text-left text-sm text-gray-900">
          <thead className="border-b border-white/50">
            <tr>
              <th className="py-2">Investor</th>
              <th className="py-2">Sector</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Ayesha Noor", sector: "Fintech", amount: "$12,000" },
              { name: "David Lin", sector: "HealthTech", amount: "$18,500" },
              { name: "Ali Raza", sector: "AgriTech", amount: "$9,300" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-300 hover:bg-gray-200/50">
                <td className="py-2 font-medium">{row.name}</td>
                <td className="py-2">{row.sector}</td>
                <td className="py-2">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chat Table */}
      <div className="bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur p-6 rounded-lg shadow mb-10 transition">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Chat Messages</h2>
        <div className="space-y-3">
          {["Hi, I’m interested in your pitch.", "Can we schedule a meeting?", "Here’s my proposal..."]
            .map((msg, i) => (
              <div
                key={i}
                className="p-4 border border-white/50 rounded-md bg-gray-100/30 hover:bg-gray-400/40 backdrop-blur transition text-gray-900"
              >
                {msg}
              </div>
            ))}
        </div>
      </div>

      {/* Explore Button */}
      <div className="text-center">
        <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition text-lg">
          Explore More Investors
        </button>
      </div>
    </div>
</>
  )
}

export default Enterpreniorsdashboard 