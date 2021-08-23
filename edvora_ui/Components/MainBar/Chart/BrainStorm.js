import { Flex, Box } from "@chakra-ui/react";
const BrainStorm = () => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <h3>Developers Meeting</h3>
      <Box mt="10px">
        <span>9-12 PM</span>
      </Box>
    </Flex>
  );
};

export default BrainStorm;
