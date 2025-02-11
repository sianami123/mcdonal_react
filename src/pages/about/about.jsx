import { Button, HStack } from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <HStack>
        <Button loading loadingText="Loading...">
          Click me
        </Button>
        <Button bgColor="red">Click me</Button>
      </HStack>
    </div>
  );
}
