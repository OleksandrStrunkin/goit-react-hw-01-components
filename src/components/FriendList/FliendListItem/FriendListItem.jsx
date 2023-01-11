import PropTypes from 'prop-types';
import { FriendListItemStyle, Name, Status } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <FriendListItemStyle>
  <Status isOnline={isOnline}>{isOnline}</Status>
  <img src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
</FriendListItemStyle>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};