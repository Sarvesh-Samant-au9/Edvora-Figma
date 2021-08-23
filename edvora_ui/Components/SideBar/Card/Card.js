import { Text, Box, Flex } from "@chakra-ui/react";
import LocationIcon from "./SVG/Location";
import TimeIcon from "./SVG/TimeIcon";
const Card = ({ backgroundColor, headings, content, time }) => {
  const arrayCircle = [
    {
      color: "#C4C4C4",
      id: 1,
    },
    {
      color: "#D0CFCF",
      id: 2,
    },
    {
      color: "#D6D6D6",
      id: 3,
    },
    {
      color: "#E4E4E4",
      id: 4,
    },
    {
      color: "#EDECEC",
      id: 5,
    },
  ];
  return (
    <Box
      width="240px"
      minH="160px"
      p="14px"
      bg={backgroundColor}
      borderRadius="10px"
      mt="15px"
      mb="15px"
      fontFamily="Source Sans Pro"
    >
      <Text fontSize="15px" lineHeight="18px" fontWeight="400" color="#000">
        {headings}
      </Text>
      <Text color="#888888" mt="8px">
        {content}
      </Text>
      <Text
        color="#4961FC"
        mt="8px"
        fontWeight="300"
        borderBottom="2px solid #000"
      >
        <Flex
          alignItems="center"
          pb="13px"
          // borderBottom={`2px solid ${backgroundColor}`}
          mt="11px"
        >
          <LocationIcon />
          <Text ml="12px">Location</Text>
        </Flex>
      </Text>

      <Flex justifyContent="space-between" alignItems="center">
        <Flex width="100%" alignItems="center">
          <Box
            borderRadius="50%"
            p="5px"
            bg="#fff"
            mr="9px"
            border="1px solid #000"
          >
            <TimeIcon />
          </Box>
          <Text color="#474747" fontWeight="400">
            {time} AM
          </Text>
        </Flex>
        <Flex width="100%" justifyContent="center" alignItems="center">
          {arrayCircle.map((ele) => (
            <>
              <Box
                key={ele.id}
                borderRadius="50%"
                bg={ele.color}
                width="19px"
                height="19px"
                display="inline"
                ml="-5px"
              ></Box>
            </>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
