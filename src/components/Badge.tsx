const Badge = ({ number = 30 }) => {
  return (
    <div className="inline-flex items-center bg-yellow-300 rounded-full p-1 pr-3 border-2 border-white shadow-md">
      <div className="bg-white rounded-full p-0.5 mr-1">
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      </div>
      <span className="text-yellow-800 font-bold text-sm">{number}</span>
    </div>
  );
};

export default Badge;
