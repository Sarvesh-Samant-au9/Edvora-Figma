import { Flex, Box } from "@chakra-ui/react";

const Cloud = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="80%"
      p="10px"
      m="auto"
    >
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <h3>Cloud Computing Exam </h3>
        <Flex mt="10px" justifyContent="space-between" w="100%">
          <span>1- 2PM</span>
          <span>C-302</span>
        </Flex>
      </Flex>
      <Box>
        <i
          class="fas fa-cloud-upload-alt fa-3x"
          style={{ color: "#b24592" }}
        ></i>
      </Box>
    </Flex>
  );
};

export default Cloud;
