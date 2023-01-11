import PropTypes from 'prop-types';
import { StatListItem, Percentage, Label } from "./Stats.styled";

export const DataStat = ({ label, percentage }) => {
    return (
        <StatListItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatListItem>
    )
};

DataStat.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};