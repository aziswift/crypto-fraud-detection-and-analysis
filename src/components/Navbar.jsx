import React from 'react';
import { Box, Flex, HStack, Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'About', path: '/about' },
  ];

  return (
    <Box bg="white" px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
        <Heading size="md" color="brand.600">CryptoGuard</Heading>
        
        <HStack spacing={8}>
          {links.map((link) => (
            <Link
              key={link.path}
              as={RouterLink}
              to={link.path}
              color={location.pathname === link.path ? 'brand.500' : 'gray.600'}
              fontWeight={location.pathname === link.path ? 'semibold' : 'normal'}
              _hover={{ color: 'brand.500' }}
            >
              {link.name}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;