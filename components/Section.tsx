import { Container } from "@mantine/core";

interface ISectionProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}

export default function Section(props: ISectionProps) {
  return (
    <Container fluid style={{ ...props.styles }} className={props.className}>
      {props.children}
    </Container>
  );
}
