import { DataStat } from "components/Statistics/Stats/Stats";
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
    return (<section class="statistics">
    {title && (< h2 class="title">{title}</h2>)}
    <ul class="stat-list">
    {stats.map(({id, label, percentage}) => {
        return <DataStat key={id} label={label} percentage={percentage} />
            })}
  </ul>
</section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};