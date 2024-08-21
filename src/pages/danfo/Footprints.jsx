import { Flex, Text, Box, Image } from "@chakra-ui/react";

const Footprints = () => {
  return (
    <Flex
      bg={"#E1E6E3"}
      flexDir={"column"}
      // px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Box maxW={["100%", "100%", "100%", "100%", "1196px"]} px="20px" w="100%" mx="auto">
        <Text
          fontFamily={"clash"}
          fontSize={{ base: "40px", lg: "64px" }}
          color={"black100"}
          fontWeight={700}
          w="100%"
        >
          Our footprints
        </Text>
        <Text
          fontFamily={"manrope"}
          fontSize={{ base: "16px", lg: "24px" }}
          color={"black100"}
          fontWeight={{ base: 500, lg: 400 }}
          pb={"40px"}
          maxW={["100%", "100%", "100%", "100%", "1007px"]}
          w={"100%"}
          lineHeight={{ base: "19.2px", lg: "28.8px" }}
        >
          Explore the impact RoadTrip Community is making through our
          {"members'"} involvement in tech events, conferences, and volunteering
          activities.
        </Text>
      </Box>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        // w={'100%'}
        h="1288px"
        overflowY={"hidden"}
        px="20px"
      >
        <Flex flexDir={"column"}>
          <Box h={"376px"} w="363px">
            <Image
              src={"images/x-footprint.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"376px"} w="363px">
            <Image
              src={"images/x-footprint.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"544px"} w="363px">
            <Image
              src={"images/xx.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
        </Flex>
        <Flex flexDir={"column"}>
          <Box h={"544px"} w="363px">
            {" "}
            <Image
              src={"images/xx.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"376px"} w="363px">
            <Image
              src={"images/x-footprint.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"544px"} w="363px">
            <Image
              src={"images/xx.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
        </Flex>
        <Flex flexDir={"column"}>
          <Box h={"376px"} w="363px">
            <Image
              src={"images/x-footprint.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"376px"} w="363px">
            <Image
              src={"images/x-footprint.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"544px"} w="363px">
            <Image
              src={"images/xx.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
        </Flex>
        <Flex flexDir={"column"}>
          <Box h={"544px"} w="363px">
            {" "}
            <Image
              src={"images/xx.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"376px"} w="363px">
            <Image
              src={"images/x-footprint.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
          <Box h={"544px"} w="363px">
            <Image
              src={"images/xx.png"}
              objectFit={"cover"}
              w="100%"
              h={"100%"}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Footprints;
