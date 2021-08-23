import { Flex, Switch, Stack } from "@chakra-ui/react";
const Project = () => {
  return (
    <Flex alignItems="center" flexDirection="column" justifyContent="center">
      <h3>Project Review Meet</h3>
      <Flex mt="10px" justifyContent="space-between" w="100%">
        <span>10-1 PM</span>
        <Stack align="center" direction="row">
          <Switch size="md" />
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Project;
