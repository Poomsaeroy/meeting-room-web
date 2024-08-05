import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm , SubmitHandler} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { LoginFormInput } from './../app-types/loginform-input';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const notify = () => toast.success('Submit!');
  const schema = yup.object().shape({
    email: yup.string().required('ป้อนข้อมูลอีเมลด้วย').email('รูปแบบไม่ถูกต้อง'),
    password: yup.string().required('ป้อนรหัสผ่าน').min(6,'รหัสผ่านอย่างน้อย 6 ตัวอักษร'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
    mode : 'onSubmit'
  });
  const onSubmit: SubmitHandler<LoginFormInput> = (data) =>{
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")}/>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password ? true : false}>
                <FormLabel>Password</FormLabel>
                <Input type="password"{...register("password")} />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  onClick={notify}
                  isLoading={isSubmitting}
                  loadingText="กำลังเข้าสู่ระบบ"
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  login
                </Button>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  toastOptions={{
                    duration: 3000,
                  }}
                  
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
  </form>
  )
}