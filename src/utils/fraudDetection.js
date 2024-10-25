export const analyzeFraudRisk = async (address) => {
  // Simulated analysis result
  const riskScore = Math.floor(Math.random() * 100);
  
  return {
    address,
    riskScore,
    stats: {
      transactionCount: Math.floor(Math.random() * 1000),
      totalVolume: (Math.random() * 100).toFixed(2),
      accountAge: Math.floor(Math.random() * 365),
    },
    riskFactors: [
      { name: 'Multiple High-Value Transfers', severity: 'yellow' },
      { name: 'New Account', severity: 'red' },
      { name: 'Known Exchange', severity: 'green' },
      { name: 'Mixer Usage', severity: 'red' },
    ],
    riskHistory: Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      score: Math.floor(Math.random() * 100),
    })).reverse(),
    recentTransactions: Array.from({ length: 10 }, () => ({
      date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      type: Math.random() > 0.5 ? 'Send' : 'Receive',
      amount: (Math.random() * 10).toFixed(3),
      riskLevel: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Medium' : 'Low',
    })).sort((a, b) => new Date(b.date) - new Date(a.date)),
  };
};