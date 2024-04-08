import React, { useState } from "react";
import { Box, Heading, Text, Image, Stack, Button, Grid, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Avatar, Flex } from "@chakra-ui/react";
import { FaHeart, FaTimes } from "react-icons/fa";

const profiles = [
  {
    id: 1,
    name: "Elon",
    bio: "Rocket man, meme lord, AI enthusiast 🚀",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYnJvJTIwcG9ydHJhaXQlMjAxfGVufDB8fHx8MTcxMjYxNzQ4NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Mark",
    bio: "Building the metaverse, one VR headset at a time 🌐",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYnJvJTIwcG9ydHJhaXQlMjAyfGVufDB8fHx8MTcxMjYxNzQ4NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Jeff",
    bio: "Delivering packages and smiles with drones 📦",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYnJvJTIwcG9ydHJhaXQlMjAzfGVufDB8fHx8MTcxMjYxNzQ4NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLike = () => {
    setCurrentProfile((prevProfile) => (prevProfile + 1) % profiles.length);
  };

  const handlePass = () => {
    setCurrentProfile((prevProfile) => (prevProfile + 1) % profiles.length);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        TechBro Dating 💻❤️
      </Heading>
      <Grid templateColumns="1fr" gap={8}>
        <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center">
          <Avatar size="2xl" src={profiles[currentProfile].avatar} name={profiles[currentProfile].name} mb={4} />
          <Heading as="h2" size="xl">
            {profiles[currentProfile].name}
          </Heading>
          <Text fontSize="lg" mb={4}>
            {profiles[currentProfile].bio}
          </Text>
          <Flex justify="center">
            <Button leftIcon={<FaTimes />} colorScheme="red" variant="outline" mr={4} onClick={handlePass}>
              Pass
            </Button>
            <Button
              leftIcon={<FaHeart />}
              colorScheme="green"
              onClick={() => {
                handleLike();
                onOpen();
              }}
            >
              Like
            </Button>
          </Flex>
        </Box>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>It's a match! 🎉</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You and {profiles[currentProfile].name} have liked each other. Time to connect and talk about your favorite programming languages, startups, and Elon Musk tweets!</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
