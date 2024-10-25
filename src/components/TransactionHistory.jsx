import React from 'react';
import {
  Box,
  VStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from '@chakra-ui/react';

const TransactionHistory = ({ transactions }) => {
  return (
    <Box bg="white" p={6} borderRadius="xl" shadow="md">
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          Recent Transactions
        </Text>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Type</Th>
                <Th>Amount (ETH)</Th>
                <Th>Risk Level</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((tx, index) => (
                <Tr key={index}>
                  <Td>{tx.date}</Td>
                  <Td>{tx.type}</Td>
                  <Td isNumeric>{tx.amount}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        tx.riskLevel === 'High' ? 'red' :
                        tx.riskLevel === 'Medium' ? 'yellow' : 'green'
                      }
                    >
                      {tx.riskLevel}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default TransactionHistory;