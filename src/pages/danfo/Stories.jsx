import { Flex, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";

const Stories = () => {
  return (
    <Flex
      bg={"lilac200"}
      flexDir={"column"}
      px={{ base: "16px", lg: "122px" }}
      py={{ base: "56px", lg: "80px" }}
      w={"100%"}
    >
      <Text
        fontFamily={"clash"}
        fontSize={{ base: "40px", lg: "64px" }}
        color={"black100"}
        fontWeight={700}
      >
        RT Stories
      </Text>
      <Text
        fontFamily={"manrope"}
        fontSize={{ base: "16px", md: "24px" }}
        color={"black100"}
        fontWeight={{ base: 500, md: 400 }}
        pb={"40px"}
        pl={{ base: "0", md: "121px" }}
        maxW={{ base: "340px", md: "690px" }}
        w={"100%"}
        lineHeight={{ base: "26.4px", md: "28.8px" }}
      >
        Discover inspiring stories, showcasing the journeys and successes of our
        community members.
      </Text>
      <Grid
        templateColumns={"repeat(6, 1fr)"}
        display={{ base: "flex", lg: "grid" }}
        gap={"16px"}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <GridItem
          w={["100%", '100%', "588px"]}
          bg="green100"
          colSpan={3}
          border={"4px solid #111413"}
          color={"white"}
          fontSize={{ base: "24px", md: "40px" }}
          fontFamily={"clash"}
          fontWeight={600}
          minH={"168px"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={["flex-start", "flex-start", "center"]}
          px={['10px', '20px', 0]}
        >
          <Link
            href="https://open.substack.com/pub/roadtripcommunity/p/what-is-it-like-in-roadtrip-community?r=22y5cz&utm_campaign=post&utm_medium=web"
            target="_blank"
            display={"flex"}
            alignItems={"center"}
          >
            <Text
              maxW={{ base: "100%", lg: "427px" }}
              w={["100%"]}
              lineHeight={{ base: "26.4px", md: "44px" }}
              cursor={{ base: "", md: "pointer" }}
              fontSize={['24px', "40px"]}
              fontWeight={500}
            >
              What is it like in RoadTrip Community
            </Text>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              border={"2px solid #fff"}
              w="56px"
              h="46px"
              display={["none", "none", "block"]}
            >
              <Image src="/images/white-arrow.png" alt="" />
            </Flex>
          </Link>
        </GridItem>

        <GridItem
          w={"100%"}
          maxW={["100%", "100%", "592px"]}
          bg="#F6B847"
          colSpan={3}
          border={"4px solid #111413"}
          color={"white"}
          fontSize={{ base: "24px", md: "40px" }}
          fontFamily={"clash"}
          fontWeight={600}
          minH={"168px"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={["flex-start", "flex-start", "center"]}
          px={['10px', '20px', 0]}
        >
          <Link
            href="https://open.substack.com/pub/roadtripcommunity/p/dreams-and-memories?r=22y5cz&utm_campaign=post&utm_medium=web"
            target="blank"
            color={"#111413"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text
              maxW={{ base: "", lg: "386px" }}
              w={"100%"}
              fontSize={{ base: "24px", md: "40px" }}
              fontFamily={"clash"}
              fontWeight={600}
              lineHeight={{ base: "26.4px", md: "44px" }}
              cursor={{ base: "", md: "pointer" }}
            >
              Dreams and memories
            </Text>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              border={"2px solid #111413"}
              w="56px"
              h="46px"
              display={["none", "none", "block"]}
            >
              <Image src="/images/black-arrow.png" alt="" />
            </Flex>
          </Link>
        </GridItem>
        <GridItem
          w={"100%"}
          // maxW={{ base: "", lg: "1196px" }}
          colSpan={6}
          bg="lilac100"
          border={"4px solid #111413"}
          color={"black100"}
          fontSize={{ base: "24px", md: "40px" }}
          fontFamily={"clash"}
          fontWeight={600}
          minH={"168px"}
          px={{ base: "10px", lg: "50px" }}
          alignItems={"center"}
          display={"flex"}
        >
          <Link
            href="https://open.substack.com/pub/roadtripcommunity/p/dealing-with-imposter-syndrome-from?r=22y5cz&utm_campaign=post&utm_medium=web"
            target="_blank"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            w="100%"
          >
            <Text
              maxW={{ base: "", lg: "694px" }}
              w={"100%"}
              lineHeight={{ base: "26.4px", md: "44px" }}
              cursor={{ base: "", md: "pointer" }}
            >
              Dealing with Imposter Syndrome: From an Actual Imposter
            </Text>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              border={"2px solid #111413"}
              w="56px"
              h="46px"
              display={["none", "none", "block"]}
            >
              <Image src="/images/black-arrow.png" alt="" />
            </Flex>
          </Link>
        </GridItem>
        <GridItem
          w={["100%", "100%", "710px"]}
          // maxW={{ base: "", lg: "558px" }}
          bg="blue100"
          colSpan={4}
          border={"4px solid #111413"}
          color={"white"}
          fontSize={{ base: "24px", md: "40px" }}
          fontFamily={"clash"}
          fontWeight={600}
          minH={"168px"}
          px={{ base: "10px", lg: "50px" }}
          alignItems={"center"}
          display={"flex"}
          
        >
          <Link
            href="https://open.substack.com/pub/roadtripcommunity/p/to-be-an-active-community-member?r=22y5cz&utm_campaign=post&utm_medium=web"
            target="blank"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Text
              maxW={{ base: "", lg: "427px" }}
              w={"100%"}
              lineHeight={{ base: "26.4px", md: "44px" }}
              cursor={{ base: "", md: "pointer" }}
            >
              To be an active community member
            </Text>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              border={"2px solid #fff"}
              w="56px"
              h="46px"
              display={["none", "none", "block"]}
            >
              <Image src="/images/white-arrow.png" alt="" />
            </Flex>
          </Link>
        </GridItem>
        <GridItem
          w={["100%", "100%", "470px"]}
          // maxW={{ base: "", lg: "558px" }}
          bg="pink100"
          border={"4px solid #111413"}
          color={"black100"}
          colSpan={2}
          fontFamily={"clash"}
          fontWeight={600}
          minH={"168px"}
          px={{ base: "24px", lg: "50px" }}
          alignItems={"center"}
          display={"flex"}
        >
          <Link
            href="https://open.substack.com/pub/roadtripcommunity/p/faith-in-yourself?r=22y5cz&utm_campaign=post&utm_medium=web"
            target="blank"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Text
              w={"100%"}
              lineHeight={{ base: "26.4px", md: "44px" }}
              fontSize={{ base: "24px", md: "40px" }}
              cursor={{ base: "", md: "pointer" }}
            >
              Faith... in <br /> yourself
            </Text>

            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              border={"2px solid #111413"}
              w="56px"
              h="46px"
              display={["none", "none", "block"]}
            >
              <Image src="/images/black-arrow.png" alt="" />
            </Flex>
          </Link>
        </GridItem>
      </Grid>
    </Flex>
  );
};
export default Stories;
