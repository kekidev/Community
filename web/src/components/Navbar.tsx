import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { Button } from "@chakra-ui/button";
import { useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  // Data is loading
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="login">
          <Button variant="outline" colorScheme="teal" mr={2}>
            로그인
          </Button>
        </NextLink>
        <NextLink href="register">
          <Button variant="outline" colorScheme="teal">
            회원가입
          </Button>
        </NextLink>
      </>
    );
    // user is logged in
  } else {
    body = <Box>{data.me.username}</Box>;
  }

  return (
    <>
      <Flex bgGradient="#1A202C" p={4}>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </>
  );
};
