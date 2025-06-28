
import Header from "@/components/Header";
import PortfolioSummary from "@/components/PortfolioSummary";
import InvestmentCard from "@/components/InvestmentCard";
import PerformanceChart from "@/components/PerformanceChart";
import { mockInvestments } from "@/data/investments";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Portfolio Summary */}
        <div className="mb-8">
          <PortfolioSummary />
        </div>
        
        {/* Performance Chart */}
        <div className="mb-8">
          <PerformanceChart />
        </div>
        
        {/* Investments Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Investments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockInvestments.map((investment) => (
              <InvestmentCard
                key={investment.id}
                symbol={investment.symbol}
                name={investment.name}
                shares={investment.shares}
                currentPrice={investment.currentPrice}
                change={investment.change}
                changePercent={investment.changePercent}
                value={investment.value}
              />
            ))}
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Investments</h3>
            <p className="text-3xl font-bold text-blue-600">{mockInvestments.length}</p>
            <p className="text-sm text-gray-500 mt-1">Active positions</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Performer</h3>
            <p className="text-3xl font-bold text-green-500">TSLA</p>
            <p className="text-sm text-gray-500 mt-1">+5.27% today</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Diversity Score</h3>
            <p className="text-3xl font-bold text-purple-600">8.5/10</p>
            <p className="text-sm text-gray-500 mt-1">Well diversified</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
