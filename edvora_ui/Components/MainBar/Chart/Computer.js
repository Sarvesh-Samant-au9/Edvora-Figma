import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
const Computer = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" w="100%" p="10px">
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <h3>Computer Networking </h3>
        <Flex mt="10px" justifyContent="space-between" w="100%">
          <span>12- 1PM</span>
          <span>C-302</span>
        </Flex>
      </Flex>
      <Box>
        <i className="fas fa-laptop fa-3x" style={{ color: "darkgreen" }}></i>
      </Box>
    </Flex>
  );
};

export default Computer;
