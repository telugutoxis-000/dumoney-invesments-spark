
import { TrendingUp, TrendingDown } from "lucide-react";

interface InvestmentCardProps {
  symbol: string;
  name: string;
  shares: number;
  currentPrice: number;
  change: number;
  changePercent: number;
  value: number;
}

const InvestmentCard = ({ 
  symbol, 
  name, 
  shares, 
  currentPrice, 
  change, 
  changePercent, 
  value 
}: InvestmentCardProps) => {
  const isPositive = change > 0;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{symbol}</h3>
          <p className="text-sm text-gray-600">{name}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">
            ${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-sm text-gray-500">{shares} shares</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-gray-900">
            ${currentPrice.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">per share</p>
        </div>
        
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={`font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}${change.toFixed(2)} ({changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
