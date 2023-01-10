import { Td, Tr } from "./TransactionItem.styled";

export const TransactionItem = ({ type, amount, currency}) => {
    return <Tr>
        <Td>{LetterUp(type)}</Td>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
    </Tr>
}

function LetterUp (type) {
    return type[0].toUpperCase() + type.slice(1);
}