import React from 'react';
import { BellTwoTone } from '@ant-design/icons';
import '../../App.css';

const BellIcon = ({ notificationVisible, handleBellIconClick }) => {
  return (
    <div className="bell-icon" onClick={handleBellIconClick}>
      <BellTwoTone style={{ fontSize: '24px' }} />
      {notificationVisible && <div className="notification-message">You have a new notification</div>}
    </div>
  );
};

export default BellIcon;
