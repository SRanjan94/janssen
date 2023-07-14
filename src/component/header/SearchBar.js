import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../../App.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Input placeholder="Search" suffix={<Button shape="square" icon={<SearchOutlined />} />} />
    </div>
  );
};

export default SearchBar;
