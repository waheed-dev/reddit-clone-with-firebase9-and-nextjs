import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "@/components/Navbar/rightContent/AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";

type RightContetnProps = {};
const RightContent: React.FC<RightContetnProps> = (props) => {
  return (
    <>
      <AuthModal />
      <Flex justify={"center"} align={"center"}>
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
