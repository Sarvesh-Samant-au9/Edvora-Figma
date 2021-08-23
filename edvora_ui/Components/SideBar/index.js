import { Box, Flex, Text } from "@chakra-ui/react";
import cardInfo from "./SectionalCard/cardsInfo";
import Card from "../SideBar/Card/Card";
const SideBar = () => {
  const insideText = ["Activities", "Reminders"];
  const randomColors = ["#FFD6C3", "#C7EBDC", "#D7D8F2"];
  console.log(Math.floor(Math.random() * randomColors.length));
  const returnRandomColor = () => {
    // return randomColors[]
  };
  return (
    <Box
      width="298px"
      minH="100vh"
      pl="31px"
      pt="40px"
      pr="26px"
      bgColor="rgba(242, 216, 213, 0.44)"
      fontFamily="Source Sans Pro"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text color="#000" fontWeight="500" fontSize="25px">
            Events
          </Text>
        </Box>
        <Flex alignItems="center">
          <Text
            color="#1E3FB7"
            fontSize="15px"
            fontWeight="400"
            cursor="pointer"
          >
            View all
          </Text>
          <Flex
            height="18px"
            width="18px"
            bgColor="#733D47"
            ml="18px"
            color="#fff"
            fontWeight="500"
            borderRadius="2.25px"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
          >
            <Text fontWeight="200">+</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="20px" justifyContent="space-between" alignItems="center">
        {insideText.map((ele) => (
          <Flex
            alignItems="center"
            justifyContent="center"
            _hover={{ background: "#f2d8d5" }}
            borderRadius="10px"
            width="107px"
            height="44px"
            cursor="pointer"
            key={ele}
          >
            <Text
              fontSize="17px"
              lineHeight="22px"
              color="#733D47"
              fontWeight="500"
            >
              {ele}
            </Text>
          </Flex>
        ))}
      </Flex>
      {/* <Box>{console.log(cardInfo)}</Box> */}
      <>
        {cardInfo.map((ele) => {
          return (
            <Box borderBottom="1px solid #ECCDC9" key={ele.date}>
              <Text color="#BF9B9B" mt="13px">
                {ele.date}
              </Text>
              {ele.data.map((ca, index) => (
                <Card
                  headings={ca.contentHeading}
                  content={ca.content}
                  time={ca.time}
                  backgroundColor={
                    randomColors[
                      Math.floor(Math.random() * randomColors.length)
                    ]
                  }
                  key={index}
                />
              ))}
            </Box>
          );
        })}
      </>
    </Box>
  );
};

export default SideBar;
