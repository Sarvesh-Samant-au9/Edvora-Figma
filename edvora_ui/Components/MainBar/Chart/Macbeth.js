import { Box, Flex } from "@chakra-ui/layout";
const Macbeth = ({ name, time, desc }) => {
  return (
    <Flex flexDirection="column" p="10px" h="100%" justifyContent="center">
      {name}
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <span>{time}</span>
          <Box mt="10px" p="5px" bg="#000">
            {desc}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Macbeth;
