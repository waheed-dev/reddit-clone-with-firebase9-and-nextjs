import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "@/components/Navbar/rightContent/AuthButtons";

type RightContetnProps = {};
const RightContent: React.FC<RightContetnProps> = (props) => {
  return (
    <>
      <Flex justify={"center"} align={"center"}>
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
