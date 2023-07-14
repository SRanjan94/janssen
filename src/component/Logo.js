import React from 'react';
//import logo from '../../../assets/images/logo-with-name.png';
import logoIcon from './asset/logo-without-name.png';

const Logo = ({isCollapsed}) => {
  return isCollapsed === false ? (
    <div style={{padding: '1px 10px 0px 0px', marginTop: '14px'}}>
      <img src={Logo} width={120} alt='logo' />
    </div>
  ) : (
    <div
      style={{
        marginLeft: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <img src={logoIcon} width={24} height={24} alt='logo' />
    </div>
  );
};

export default Logo;
