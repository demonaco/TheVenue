import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = () => {
    return (
        <Button>
            <img src={TicketIcon}
            className="iconImage"
            alt="icon_button"/>
                Button
        </Button>
    );
};

export default MyButton;