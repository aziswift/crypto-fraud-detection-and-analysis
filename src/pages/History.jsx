import React from 'react';
import {
  Container,
  VStack,
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from '@chakra-ui/react';

function History() {
  // Simulated history data
  const searchHistory = Array.from({ length: 15 }, (_, i) => ({
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
    address: `0x${Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`,
    riskScore: Math.floor(Math.random() * 100),
  }));

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Box w="100%" bg="white" p={6} borderRadius="xl" shadow="md">
          <Text fontSize="xl" fontWeight="bold" mb={6}>
            Search History
          </Text>

          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Address</Th>
                  <Th>Risk Score</Th>
                </Tr>
              </Thead>
              <Tbody>
                {searchHistory.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.date}</Td>
                    <Td>
                      <Text isTruncated maxW="300px">
                        {item.address}
                      </Text>
                    </Td>
                    <Td>
                      <Badge
                        colorScheme={
                          item.riskScore > 70 ? 'red' :
                          item.riskScore > 30 ? 'yellow' : 'green'
                        }
                      >
                        {item.riskScore}%
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
}

export default History;