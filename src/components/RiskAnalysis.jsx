import React from 'react';
import {
  Box,
  VStack,
  Text,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Grid,
  Badge,
} from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RiskAnalysis = ({ analysis }) => {
  const riskColor = analysis.riskScore > 70 ? 'red' : 
                    analysis.riskScore > 30 ? 'yellow' : 'green';

  const chartData = {
    labels: analysis.riskHistory.map(h => h.date),
    datasets: [{
      label: 'Risk Score Trend',
      data: analysis.riskHistory.map(h => h.score),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }]
  };

  return (
    <Box bg="white" p={6} borderRadius="xl" shadow="md">
      <VStack spacing={6} align="stretch">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Risk Analysis Report
        </Text>

        <Box>
          <Text mb={2}>Overall Risk Score</Text>
          <Progress 
            value={analysis.riskScore} 
            colorScheme={riskColor}
            height="32px"
            borderRadius="md"
          />
          <Text 
            textAlign="right" 
            color={`${riskColor}.500`}
            fontWeight="bold"
          >
            {analysis.riskScore}%
          </Text>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Stat>
            <StatLabel>Transaction Count</StatLabel>
            <StatNumber>{analysis.stats.transactionCount}</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Total Volume</StatLabel>
            <StatNumber>{analysis.stats.totalVolume} ETH</StatNumber>
            <StatHelpText>All time</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Account Age</StatLabel>
            <StatNumber>{analysis.stats.accountAge}</StatNumber>
            <StatHelpText>days</StatHelpText>
          </Stat>
        </Grid>

        <Box>
          <Text fontWeight="bold" mb={2}>Risk Factors</Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            {analysis.riskFactors.map((factor, index) => (
              <Badge 
                key={index}
                colorScheme={factor.severity}
                p={2}
                borderRadius="md"
              >
                {factor.name}
              </Badge>
            ))}
          </Grid>
        </Box>

        <Box h="200px">
          <Text fontWeight="bold" mb={2}>Risk Score History</Text>
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        </Box>
      </VStack>
    </Box>
  );
};

export default RiskAnalysis;