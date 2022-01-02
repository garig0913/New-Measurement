import React from "react";
import Link from "next/dist/client/link";
import {
  Box,
  Center,
  Image,
  Badge,
  Button,
  useColorModeValue,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Index = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure();
  const property = {
    imageUrl: "http://ddl.mn/wp-content/uploads/2021/05/zx7-315gt-200x200.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Багаж",
    formattedPrice: "1,9000.00₮",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <div>
      <Center py={6} boxShadow={"2xl"}>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          className="bg-white rounded-xl p-1 shadow-xl"
        >
          <div>
            <img className="w-52 h-52" src={data.image} alt={property.imageAlt} objectFit="cover" />
          </div>

          <Box p="3">
            <Box
              mt="1"
              ml="3"
              fontWeight="semibold"
              as="h4"
              textAlign={"left"}
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>

            <Center>
              <Button
                className=""
                style={{
                  borderRadius: ".40rem",
                  transition: "300ms",
                }}
                w={"full"}
                mt={20}
                mb={5}
                px="36"
                py="2"
                mx="4"
                bg={useColorModeValue("#376bc4", "gray.900")}
                color={"white"}
                _hover={{
                  transform: "translateY(-2px)",
                }}
              >
                <Link href="/Product">
                  <a className="link-a">Дэлгэрэнгүй...</a>
                </Link>
                <style jsx>{`
                  .link-a {
                    color: white !important;
                  }
                `}</style>
              </Button>
            </Center>
          </Box>
        </Box>
      </Center>
    </div>
  );
};
export default Index;
