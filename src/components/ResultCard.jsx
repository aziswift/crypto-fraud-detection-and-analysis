import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <Box w="100%" bg="white" p={6} borderRadius="lg" boxShadow="md">
      <VStack spacing={3} align="start">
        <Text fontWeight="bold">Results for: {result.address}</Text>
        <Text>Risk Score: {result.score}%</Text>
        <Text 
          color={result.isFraudulent ? 'red.500' : 'green.500'} 
          fontWeight="bold"
        >
          Status: {result.isFraudulent ? 'High Risk' : 'Low Risk'}
        </Text>
      </VStack>
    </Box>
  );
};

export default ResultCard;