import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem/TransactionItem';
import { Table, TableHead, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (<Table>
  <TableHead>
    <Tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </Tr>
  </TableHead>
        <tbody>
      {items.map((item)=> {
          return <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency} />      
        }) }
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};