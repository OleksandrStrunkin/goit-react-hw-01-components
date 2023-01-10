import { StatListItem, Percentage, Label} from "./Stats.styled";

export const DataStat = ({ label, percentage }) => {
    return (
        <StatListItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatListItem>
    )
};