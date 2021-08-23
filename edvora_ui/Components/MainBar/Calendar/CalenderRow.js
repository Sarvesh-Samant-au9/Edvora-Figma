import {
  Box,
  Flex,
  Text,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import LeftArrow from "./SVG/LeftArrow";
import RightArrow from "./SVG/RightArrow";
import DownArrow from "./SVG/DownArrow";
const CalenderRow = () => {
  const checkBoxData = [
    "All",
    "Reminders",
    "Activities",
    "Classes",
    "Exams",
    "Assignments",
    "Happenings",
  ];
  const [showBox, setShowBox] = useState(false);
  const onClickHandler = () => {
    setShowBox(!showBox);
  };
  return (
    <Flex
      mt="30px"
      justifyContent="space-between"
      width="calc(95vw - 298px - 60px)"
      alignItems="center"
    >
      <Box width="20%">
        <Text fontSize="25px" fontWeight="500" color="#000">
          Timeline
        </Text>
      </Box>
      <Box width="60%">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex
                width="30px"
                height="30px"
                border="1px solid #BF9B9B"
                alignItems="center"
                p="10px"
                mr="18px"
                borderRadius="5px"
              >
                <LeftArrow />
              </Flex>
              <Text
                fontSize="15px"
                color="#733d47"
                fontFamily="Source Sans Pro"
              >
                Mon, 11 December, 2021
              </Text>
              <Flex
                width="30px"
                height="30px"
                border="1px solid #BF9B9B"
                alignItems="center"
                p="10px"
                ml="18px"
                borderRadius="5px"
              >
                <RightArrow />
              </Flex>
            </Flex>
          </Box>
          <Box position="relative">
            <Text cursor="pointer" onClick={onClickHandler}>
              Select Options
            </Text>
            {showBox && (
              <Box
                top="29px"
                width="138px"
                height="208px"
                position="absolute"
                zIndex="100"
                bg="#FFFFFF"
                boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="5px"
                p="4px"
              >
                <Stack spacing={1} direction="column">
                  {checkBoxData.map((ele) => (
                    <>
                      <Checkbox ml="2px" spacing="1rem" key={ele}>
                        <Text color="#733D47" ml="6px">
                          {ele}
                        </Text>
                      </Checkbox>
                    </>
                  ))}
                </Stack>
              </Box>
            )}
          </Box>
          <Box
            width="108px"
            border="1px solid"
            height="30px"
            borderRadius="5px"
            color="#733D47"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center" pl="10px" width="70%">
                <Flex flexDirection="column">
                  <Box
                    width="14px"
                    height="4px"
                    borderRadius="2px"
                    border="1px solid #733D47"
                  ></Box>
                  <Box
                    width="14px"
                    borderRadius="2px"
                    height="4px"
                    border="1px solid #733D47"
                  ></Box>
                  <Box
                    width="14px"
                    height="4px"
                    borderRadius="2px"
                    border="1px solid #733D47"
                  ></Box>
                </Flex>
                <Text pl="4px" color="#733D47">
                  Day
                </Text>
              </Flex>
              <Box width="30%" pt="3px">
                <DownArrow />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CalenderRow;
