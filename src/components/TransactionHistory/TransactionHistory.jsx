import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem/TransactionItem';


export const TransactionHistory = ({ items }) => {
    return (<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
      {items.map((item)=> {
          return <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency} />      
        }) }
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};