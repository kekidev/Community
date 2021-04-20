import { Box, Button, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { useMeQuery } from "../generated/graphql";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const toast = useToast();
  const [, register] = useRegisterMutation();
  const [{ data }] = useMeQuery();

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  if (data?.me) {
    alert("계정은 1개로 제한됩니다");
    router.push("/");
  }
  return (
    <>
      <Navbar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register(values);
            if (response.data?.register.errors) {
              setErrors(toErrorMap(response.data.register.errors));
            } else if (response.data?.register.user) {
              toast({
                title: "성공적으로 처리하였습니다",
                description: "계정 생성 완료",
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
                회원가입
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default Register;
