import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

export default function ThankYouEmail() {
  return (
    <Html>
      <Head />
      <Preview>Thank you for forgiving me 💖</Preview>
      <Body style={{ backgroundColor: "#fff7f9", fontFamily: "sans-serif" }}>
        <Container
          style={{
            maxWidth: 500,
            margin: "40px auto",
            background: "#ffffff",
            borderRadius: 8,
            padding: 24,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Heading style={{ color: "#db2777" }}>Thank You, Aastha 💖</Heading>
          <Text>Hi Aastha,</Text>
          <Text>
            Thank you for forgiving me. Your grace means the world to me, and
            I&apos;ll do everything I can to honor it.
          </Text>
          <Text>
            With all my heart,
            <br />
            Rajan 💌
          </Text>
          <Hr />
          <Text style={{ fontSize: 12, color: "#888" }}>
            Sent from your Love Notebook
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
