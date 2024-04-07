import { Container } from "./styles";

export function Button({ title, icon: Icon, size, ...rest }) {
    return (
        <Container
        type="button"
        {...rest}
        >
            {Icon && <Icon size={size ? size : 34}/>}
            {title}
        </Container>
    );
}