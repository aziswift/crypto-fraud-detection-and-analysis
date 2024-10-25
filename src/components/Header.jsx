import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <VStack spacing={2}>
      <Heading>Crypto Fraud Detection</Heading>
      <Text textAlign="center">
        Enter an Ethereum address to check for potential fraudulent activity
      </Text>
    </VStack>
  );
};

export default Header;