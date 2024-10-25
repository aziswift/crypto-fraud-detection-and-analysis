import React, { useState } from 'react';
import {
  Box,
  VStack,
  Container,
  Grid,
  GridItem,
  useToast,
} from '@chakra-ui/react';
import AddressInput from '../components/AddressInput';
import RiskAnalysis from '../components/RiskAnalysis';
import TransactionHistory from '../components/TransactionHistory';
import { analyzeFraudRisk } from '../utils/fraudDetection';

function Dashboard() {
  const [address, setAddress] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const toast = useToast();

  const handleCheck = async () => {
    if (!address) {
      toast({
        title: 'Error',
        description: 'Please enter an Ethereum address',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const result = await analyzeFraudRisk(address);
    setAnalysis(result);
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <AddressInput 
          address={address} 
          setAddress={setAddress} 
          onCheck={handleCheck} 
        />
        
        {analysis && (
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
            gap={8}
            w="100%"
          >
            <GridItem>
              <RiskAnalysis analysis={analysis} />
            </GridItem>
            <GridItem>
              <TransactionHistory transactions={analysis.recentTransactions} />
            </GridItem>
          </Grid>
        )}
      </VStack>
    </Container>
  );
}

export default Dashboard;