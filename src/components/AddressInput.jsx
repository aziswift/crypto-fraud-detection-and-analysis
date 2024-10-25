import React from 'react';
import {
  VStack,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Box,
  Text,
} from '@chakra-ui/react';
import { FaSearch, FaEthereum } from 'react-icons/fa';

const AddressInput = ({ address, setAddress, onCheck }) => {
  return (
    <Box w="100%" bg="white" p={6} borderRadius="xl" shadow="md">
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700">
          Ethereum Address Analysis
        </Text>
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            <FaEthereum color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Enter Ethereum address (0x...)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            borderColor="gray.300"
            _focus={{ borderColor: 'brand.500', boxShadow: 'outline' }}
          />
        </InputGroup>
        <Button
          leftIcon={<FaSearch />}
          onClick={onCheck}
          size="lg"
          w="100%"
          colorScheme="brand"
        >
          Analyze Address
        </Button>
      </VStack>
    </Box>
  );
};

export default AddressInput;