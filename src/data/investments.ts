
export interface Investment {
  id: string;
  symbol: string;
  name: string;
  shares: number;
  currentPrice: number;
  change: number;
  changePercent: number;
  value: number;
}

export const mockInvestments: Investment[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    shares: 50,
    currentPrice: 185.42,
    change: 2.85,
    changePercent: 1.56,
    value: 9271.00
  },
  {
    id: '2',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    shares: 25,
    currentPrice: 142.35,
    change: -1.24,
    changePercent: -0.86,
    value: 3558.75
  },
  {
    id: '3',
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    shares: 40,
    currentPrice: 378.91,
    change: 5.67,
    changePercent: 1.52,
    value: 15156.40
  },
  {
    id: '4',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    shares: 30,
    currentPrice: 248.73,
    change: 12.45,
    changePercent: 5.27,
    value: 7461.90
  },
  {
    id: '5',
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    shares: 35,
    currentPrice: 875.22,
    change: 18.90,
    changePercent: 2.21,
    value: 30632.70
  },
  {
    id: '6',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    shares: 45,
    currentPrice: 145.86,
    change: -2.14,
    changePercent: -1.45,
    value: 6563.70
  }
];
