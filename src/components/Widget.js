import React from 'react';

const Widget = ({ title, value, change, icon, bgColor, valueClass }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg`}>
      <div className="flex items-center mb-4">
        <span className="text-3xl">{icon}</span>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className={`text-2xl text-white font-bold ${valueClass}`}>{value}</p>
          <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'} zoom-in-out`}>
            {change >= 0 ? `+${change}` : change}%
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .zoom-in-out {
          animation: zoomInOut 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Widget;
