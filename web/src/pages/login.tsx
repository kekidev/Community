import { Box, Button, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { useMeQuery } from "../generated/graphql";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const router = useRouter();

  const [{ data }] = useMeQuery();

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  if (data?.me) {
    alert("이미 로그인 되어 있습니다");
    router.push("/");
  }

  const toast = useToast();
  const [, login] = useLoginMutation();
  return (
    <>
      <Navbar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({ options: values });
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              toast({
                title: "성공적으로 처리하였습니다",
                description: "로그인 완료",
                status: "success",
                duration: 1000,
                isClosable: true,
              });

              router.push("/");
              await delay(500);
              router.reload();
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="username"
                placeholder="닉네임"
                label="Username"
              />
              <Box mt={4}>
                <InputField
                  name="password"
                  placeholder="비밀번호"
                  label="Password"
                  type="password"
                />
              </Box>
              <Button
                mt={4}
                isLoading={isSubmitting}
                type="submit"
                backgroundColor="teal"
                color="white"
              >
                로그인
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default Login;
