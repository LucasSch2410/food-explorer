import { X, Plus } from '@phosphor-icons/react';
import { Container } from './styles';

export function TagItem({ isnew, value, onClick, ...rest}) {
    return (
        <Container isnew={isnew}>
            <input type="text"
            value={value}
            readOnly={!isnew}
            {...rest}
            />

            <button 
            type="button" 
            onClick={onClick}>
                { isnew ? <Plus/> : <X/> }
            </button>

        </Container>
    )
}