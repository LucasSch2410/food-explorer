import { Container } from "./styles";

export function Tag({ title, icon: Icon }) {
    return (
        <Container>
            {title}
            {Icon && <Icon/>}
        </Container>
    );
}