import { Flex, Text, GridItem, Grid } from "@chakra-ui/react";
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
        fontWeight={{ base: 500, lg: 400 }}
        pb={"40px"}
        pl={{ base: "61px", lg: "243px" }}
        maxW={{ base: "340px", lg: "690px" }}
        w={"100%"}
        lineHeight={{ base: "19.2px", lg: "28.8px" }}
      >
        Explore impressive portfolios crafted by our talented members,
        showcasing their diverse skills and creativity. Get ready to
        be inspired!
      </Text>

      <Grid
        templateColumns={"1fr 1fr"}
        display={{ base: "flex", md: "grid" }}
        flexDir={"column"}
        gap={1}
      >
        {dBusdata.map((data, index) => {
          const { text, text2, text3, bgColor } = data;

          return (
            <GridItem
              key={index}
              flexDir={"column"}
              justifyContent={"flex-end"}
              w={"100%"}
              bgColor={bgColor}
              // maxW={{ base: "", lg: "558px" }}
              // bg={`rgba(255, 255, 0, 0.10)`}
              // style={{
              //   backgroundImage: `url(${image})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              //   // backdropFilter: "brightness(0.1) blur(50px)",
              //   boxShadow: "352px 352px #11131286 inset"

              // }}
              borderTop={{
                base: "2px solid #111413",
                md: "4px solid #111413",
              }}
              borderBottom={{
                base: "2px solid #111413",
                md: "4px solid #111413",
              }}
              borderRight={{
                base: "",
                md: "4px solid #111413",
              }}
              color={"black100"}
              h={{ base: "268px", lg: "282px" }}
              px={{ base: "16px", lg: "120px" }}
              pb={{ base: "24px", lg: "28px" }}
              display={"flex"}
              fontWeight={600}
            >

              <Flex>
                <Flex
                  mb={"2.7px"}
                  mr={"2.7px"}
                >
                  <Text
                    lineHeight={{ base: "39.36px", md: "49.2px" }}
                    pb={"8px"}
                    fontSize={{ base: "25px", md: "23px", lg:"32px" }}
                    fontFamily={"clash"}
                    color={"white"}

                  >

                    {text}

                  </Text>

                  <Text
                    lineHeight={{ base: "39.36px", md: "49.2px" }}
                    pl={3}
                    pr={3}
                    ml={"12px"}
                    fontSize={"12px"}
                    fontFamily={"clash"}
                    color={"white"}
                    fontWeight={500}
                    border={"1px solid #ffff"}
                    borderRadius={"100px"}
                    bgColor={"red"}
                    display={{ base: "none", md: "flex" }}
                    alignItems={'center'}
                    borderStyle={"double"}
                    h={'35px'}
                  >

                    {text3}

                  </Text>
            </Flex>
          </Flex>


              <Text
                lineHeight={"21.86px"}
                pb={"8px"}
                fontSize={"16px"}
                fontFamily={"manrope"}
                color={"white"}
              >
                {text2}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Bus;
