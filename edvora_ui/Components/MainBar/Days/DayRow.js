import { Box, Flex } from "@chakra-ui/react";

const DayRow = () => {
  const daysArray = [
    { day: "Mon", date: "11" },
    { day: "Tue", date: "12" },
    { day: "Wed", date: "13" },
    { day: "Thu", date: "14" },
    { day: "Fri", date: "15" },
    { day: "Sat", date: "16" },
    { day: "Sun", date: "17" },
  ];
  return (
    <Flex justifyContent="space-evenly" alignItems="center" w="100%" mt="24px">
      {daysArray.map((ele, index) => (
        <>
          <Box
            w="54px"
            h="68px"
            borderRadius="10px"
            position="relative"
            borderRadius="10px"
            cursor="pointer"
            color="#BF9B9B"
            _hover={{ background: "#F2D8D5", color: "#733D47" }}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              h="90%"
            >
              <p>{ele.day}</p>
              <p>{ele.date}</p>
            </Flex>
            {index % 2 === 0 && (
              <Box
                position="absolute"
                w="9px"
                h="9px"
                borderRadius="50%"
                bg="#FF6250"
                right="42%"
                // left="50%"
                bottom="-5px"
              ></Box>
            )}
          </Box>
        </>
      ))}
    </Flex>
  );
};

export default DayRow;
