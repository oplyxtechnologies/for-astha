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

export default function ForgiveAlert() {
  return (
    <Html>
      <Head />
      <Preview>She clicked “I Forgive You” ❤️</Preview>
      <Body style={{ backgroundColor: "#fdf2f8", fontFamily: "sans-serif" }}>
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
          <Heading style={{ color: "#db2777" }}>She Forgave You! 🎉</Heading>
          <Text>
            Aastha just clicked <strong>“I Forgive You”</strong>.
          </Text>
          <Text>
            Breathe, smile, and keep every promise you made inside that page.
          </Text>
          <Hr />
          <Text style={{ fontSize: 12, color: "#888" }}>
            Sent automatically by your Love Notebook 💌
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
