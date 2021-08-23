import { Flex, Box } from "@chakra-ui/react";

const Artificial = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" w="75%" m="auto">
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <h3>Artificial Intelligence Assignment </h3>
        <Flex mt="10px" justifyContent="space-between" w="100%">
          <span>Due-12 PM</span>
          <span>Module 3</span>
        </Flex>
      </Flex>
      <Box>
        <i
          className="fas fa-brain fa-3x"
          style={{ color: "rgba(194, 21, 0, 0.58)" }}
        ></i>
      </Box>
    </Flex>
  );
};

export default Artificial;

