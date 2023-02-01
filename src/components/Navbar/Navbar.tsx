import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "@/components/Navbar/SearchInput";

const Navbar: React.FC = () => {
  return (
    <>
      <Flex bg={"white"} height={"44px"} p={"6px 12px"}>
        <Flex alignItems={"center"}>
          <Image src={"/images/redditFace.svg"} height={"30px"} />
          <Image
            src={"/images/redditText.svg"}
            display={{ base: "none", md: "unset" }}
            height={"46px"}
          />
        </Flex>
        <SearchInput />
      </Flex>
    </>
  );
};
export default Navbar;
