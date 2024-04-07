import { Container } from './styles';
import { CaretDown } from '@phosphor-icons/react';

export function Selection({ onChange }) {
    const handleChange = (e) => {
        const selectedCategory = e.target.value;
        onChange(selectedCategory);
    };

    return (
        <Container>
            <select onChange={handleChange}>
                <option value="ref">Refeições</option>
                <option value="sob">Sobremesas</option>
                <option value="beb">Bebidas</option>
            </select>
            <CaretDown size={34} />
        </Container>
    )
}
