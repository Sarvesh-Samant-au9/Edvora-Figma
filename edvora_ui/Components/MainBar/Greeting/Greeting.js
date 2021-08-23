import { Box, Flex, Text } from "@chakra-ui/react";
const Greeting = () => {
  return (
    <Flex
      width="calc( 95vw - 298px - 30px )"
      // maxW="910px"

      height="154px"
      pl="30px"
      bgGradient="linear(272.8deg, #F2D8D5 0%, rgba(242, 216, 213, 0) 123.78%)"
      borderRadius="20px"
      justifyContent="center"
      flexDirection="column"
    >
      <Text
        fontSize="30px"
        color="#733D47"
        fontWeight="500"
        fontFamily="Source Sans Pro"
      >
        Hello! Dhruv
      </Text>
      <Box width="420px">
        <Text
          color="#733D47"
          fontSize="17px"
          pt="10px"
          lineHeight="20px"
          fontFamily="Source Sans Pro"
        >
          Welcome to your daily event calender. Here you can see all the
          upcoming events, meetings and create new events.
        </Text>
      </Box>
    </Flex>
  );
};

export default Greeting;
