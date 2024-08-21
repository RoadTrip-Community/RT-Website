import { Flex, Text, GridItem, Grid, Box } from "@chakra-ui/react";
import { dBusdata } from "./DBus";

const Bus = () => {
  return (
    <Flex
      bg={"white"}
      flexDir={"column"}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
        px={{ base: "16px", lg: "122px" }}
      >
        The Danfo Bus Experience
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", lg: "24px" }}
        color={"black100"}
        fontWeight={400}
        pb={"80px"}
        pl={{ base: "20px", lg: "243px" }}
        maxW={{ base: "340px", lg: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", lg: "28.8px" }}
      >
        Explore impressive portfolios crafted by our talented members,
        showcasing their diverse skills and creativity. Get ready to be
        inspired!
      </Text>

      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        {dBusdata.map((data, index) => {
          const { text, text2, text3, bgColor } = data;

          return (
            <Box
              key={index}
              flexDir={"column"}
              justifyContent={"flex-end"}
              w={["100%", "100%", "50%"]}
              bgColor={bgColor}
              borderTop={{
                base: "2px solid #111413",
                md: "2px solid #111413",
              }}
              borderBottom={{
                base: "2px solid #111413",
                md: "2px solid #111413",
              }}
              borderRight={{
                base: "",
                md: "2px solid #111413",
              }}
              color={"black100"}
              h={{ base: "268px", lg: "182px" }}
              px={{ base: "16px", lg: "120px" }}
              pb={{ base: "24px", lg: "28px" }}
              display={"flex"}
              fontWeight={600}
            >
              <Flex>
                <Flex mb={"2.7px"} mr={"2.7px"} alignItems={'center'} gap={'10px'}>
                  <Text
                    lineHeight={{ base: "39.36px", md: "49.2px" }}
                    fontSize={{ base: "25px", md: "23px", lg: "32px" }}
                    fontFamily={"clash"}
                    color={"#111413"}
                  >
                    {text}
                  </Text>

                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    bgColor={"#CC4D34"}
                    minW="90x"
                    h="35px"
                    borderRadius={"100px"}
                    px="5px"
                  >
                    <Text
                      lineHeight={{ base: "39.36px", md: "49.2px" }}
                      pl={3}
                      pr={3}
                      fontSize={"12px"}
                      fontFamily={"clash"}
                      color={"white"}
                      fontWeight={500}
                      border={"1px solid #ffff"}
                      borderRadius={"100px"}
                      bgColor={"#CC4D34"}
                      display={"flex"}
                      justifyContent={'center'}
                      alignItems={"center"}
                      borderStyle={"double"}
                      h={"27px"}
                      minW="82px"
                    >
                      {text3}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Text
                lineHeight={"21.86px"}
                pb={"8px"}
                fontSize={"16px"}
                fontFamily={"manrope"}
                color={"#111413"}
                fontWeight={600}
              >
                {text2}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Bus;
