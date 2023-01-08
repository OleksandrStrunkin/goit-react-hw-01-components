import PropTypes from 'prop-types';
import { FriendListItem } from './FliendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({avatar,name,isOnline,id})=>{
                return <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
            })}
            
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
};