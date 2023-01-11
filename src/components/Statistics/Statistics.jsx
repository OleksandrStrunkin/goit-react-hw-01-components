import { DataStat } from "components/Statistics/Stats/Stats";
import { StatisticsSection, StatList, Title } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
    return (<StatisticsSection>
    {title && (<Title>{title}</Title>)}
    <StatList>
    {stats.map(({id, label, percentage}) => {
        return <DataStat key={id} label={label} percentage={percentage} />
            })}
  </StatList>
</StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};