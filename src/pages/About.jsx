import React from 'react';
import {
  Container,
  VStack,
  Text,
  Box,
  Heading,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { FaShieldAlt, FaChartLine, FaHistory, FaExchangeAlt } from 'react-icons/fa';

function About() {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Fraud Detection',
      description: 'Advanced algorithms to detect potentially fraudulent activities in cryptocurrency transactions.',
    },
    {
      icon: FaChartLine,
      title: 'Risk Analysis',
      description: 'Comprehensive risk scoring system based on multiple factors and historical data.',
    },
    {
      icon: FaHistory,
      title: 'Transaction History',
      description: 'Detailed transaction history analysis with risk assessment for each transaction.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of addresses for suspicious activities and pattern recognition.',
    },
  ];

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading size="xl" mb={4} color="brand.600">
            About CryptoGuard
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Your trusted partner in cryptocurrency fraud detection and risk analysis
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              borderRadius="xl"
              shadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-4px)' }}
            >
              <Icon
                as={feature.icon}
                w={10}
                h={10}
                color="brand.500"
                mb={4}
              />
              <Heading size="md" mb={2}>
                {feature.title}
              </Heading>
              <Text color="gray.600">
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box bg="white" p={8} borderRadius="xl" shadow="md" mt={8}>
          <Heading size="lg" mb={4}>
            How It Works
          </Heading>
          <Text color="gray.600" mb={4}>
            CryptoGuard uses advanced machine learning algorithms and pattern recognition to analyze Ethereum addresses and their associated transactions. Our system evaluates multiple risk factors including:
          </Text>
          <VStack align="stretch" spacing={3} pl={4}>
            <Text>• Transaction patterns and frequency</Text>
            <Text>• Interaction with known high-risk addresses</Text>
            <Text>• Historical behavior analysis</Text>
            <Text>• Connection to reported fraudulent activities</Text>
            <Text>• Smart contract interaction patterns</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default About;