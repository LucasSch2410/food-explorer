import { Container } from './styles';

export function Search({ icon: Icon, size: size, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={size}/>}
            <input {...rest} />
        </Container>
    )
}
