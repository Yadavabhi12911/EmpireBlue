


const Stats = () => (
  <div className="flex justify-center py-12 bg-[#f5f8fcf6]">
    <div className="bg-white rounded-2xl shadow-lg flex flex-row divide-x divide-gray-200 max-w-md w-full">
      {/* Average Rating */}
      <div className="flex flex-col flex-1 items-center py-3 px-3">
        <div className="text-xl font-bold text-[#0b168c] mb-1">4.9/5</div>
        <div className="text-gray-500 text-sm ">Average Rating</div>
      </div>
      {/* Satisfaction Rate */}
      <div className="flex flex-col flex-1 items-center py-3 px-3">
        <div className="text-xl font-bold text-[#0b168c] mb-1">98%</div>
        <div className="text-gray-500 text-sm ">Satisfaction Rate</div>
      </div>
      {/* Happy Customers */}
      <div className="flex flex-col flex-1 items-center py-3 px-3">
        <div className="text-xl font-bold text-[#0b168c] mb-1">10K+</div>
        <div className="text-gray-500  text-sm ">Happy Customers</div>
      </div>
    </div>
  </div>
);

export default Stats;
