
import { TrendingUp, TrendingDown } from "lucide-react";

const PortfolioSummary = () => {
  const totalValue = 125450.32;
  const todayChange = 2847.65;
  const todayPercentage = 2.32;
  const isPositive = todayChange > 0;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
      <div className="mb-4">
        <h2 className="text-lg font-medium opacity-90">Total Portfolio Value</h2>
        <p className="text-3xl font-bold mt-1">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        {isPositive ? (
          <TrendingUp className="w-5 h-5 text-green-300" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-300" />
        )}
        <span className={`font-semibold ${isPositive ? 'text-green-300' : 'text-red-300'}`}>
          ${Math.abs(todayChange).toLocaleString('en-US', { minimumFractionDigits: 2 })} ({todayPercentage}%)
        </span>
        <span className="opacity-75">today</span>
      </div>
    </div>
  );
};

export default PortfolioSummary;
