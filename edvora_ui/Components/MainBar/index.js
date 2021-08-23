import { Flex } from "@chakra-ui/react";
import CalenderRow from "./Calendar/CalenderRow";
import Greeting from "./Greeting/Greeting";
import Chart from "./Chart/Chart";
import DayRow from "./Days/DayRow";
const MainBar = () => {
  return (
    <Flex minH="100vh" flexDirection="column" mt="40px" pl="30px">
      <Greeting />
      <CalenderRow />
      <DayRow />
      <Chart />
    </Flex>
  );
};

export default MainBar;
