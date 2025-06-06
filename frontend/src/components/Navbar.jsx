import { Button, Container, Flex, HStack, useColorMode, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.500")}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}
            >
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                >
                    <Link to={"/"}>what is that</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar