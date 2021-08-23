import { Box, Flex } from "@chakra-ui/react";
const Developer = () => {
  return (
    <>
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
    </>
  );
};

export default Developer;
