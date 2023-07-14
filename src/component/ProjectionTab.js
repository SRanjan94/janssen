import React, { useState } from 'react';
import { Button, Table, Segmented } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import '../App.css';
import KeysFrame from './KeysFrame';

const defaultOptions = ['Daily', 'Weekly'];

const ProjectionTab = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [moreLoaded, setMoreLoaded] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: '',
      dataIndex: 'row',
      width: 250,
      render: (text, record) => <span style={{ textAlign: 'left' }}>{text}</span>,
    },
    { title: 'jul 26', dataIndex: 'col1', width: 50 },
    { title: 'july 3', dataIndex: 'col2', width: 50 },
    { title: 'july 7', dataIndex: 'col3', width: 50 },
    { title: 'july 10', dataIndex: 'col4', width: 50 },
    { title: 'july 17', dataIndex: 'col5', width: 50 },
    { title: 'july 24', dataIndex: 'col6', width: 50 },
    { title: 'aug 7', dataIndex: 'col7', width: 50 },
    { title: 'aug 14', dataIndex: 'col8', width: 50 },
    { title: 'aug 21', dataIndex: 'col9', width: 50 },
    { title: 'aug 28', dataIndex: 'col10', width: 50 },
    { title: 'sept 4', dataIndex: 'col11', width: 50 },
    { title: 'sept 11', dataIndex: 'col12', width: 50 },
    { title: 'sept 18', dataIndex: 'col13', width: 50 },
  ];

  const getInitialTableData = () => {
    const data = [
      { key: 'row1', col1: 10, col2: 20, col3: 30, col4: 40, col5: 50, col6: 60, col7: 70, col8: 80, col9: 90, col10: 100, col11: 110, col12: 120, col13: 130 },
      { key: 'row2', col1: 11, col2: 21, col3: 31, col4: 41, col5: 51, col6: 61, col7: 71, col8: 81, col9: 91, col10: 101, col11: 111, col12: 121, col13: 131 },
      { key: 'row3', col1: 12, col2: 22, col3: 32, col4: 42, col5: 52, col6: 62, col7: 72, col8: 82, col9: 92, col10: 102, col11: 112, col12: 122, col13: 132 },
      { key: 'row4', col1: 13, col2: 23, col3: 33, col4: 43, col5: 53, col6: 63, col7: 73, col8: 83, col9: 93, col10: 103, col11: 113, col12: 123, col13: 133 },
      { key: 'row5', col1: 14, col2: 24, col3: 34, col4: 44, col5: 54, col6: 64, col7: 74, col8: 84, col9: 94, col10: 104, col11: 114, col12: 124, col13: 134 },
      { key: 'row6', col1: 15, col2: 25, col3: 35, col4: 45, col5: 55, col6: 65, col7: 75, col8: 85, col9: 95, col10: 105, col11: 115, col12: 125, col13: 135 },
      { key: 'row7', col1: 16, col2: 26, col3: 36, col4: 46, col5: 56, col6: 66, col7: 76, col8: 86, col9: 96, col10: 106, col11: 116, col12: 126, col13: 136 },
      { key: 'row8', col1: 17, col2: 27, col3: 37, col4: 47, col5: 57, col6: 67, col7: 77, col8: 87, col9: 97, col10: 107, col11: 117, col12: 127, col13: 137 },
      { key: 'row9', col1: 18, col2: 28, col3: 38, col4: 48, col5: 58, col6: 68, col7: 78, col8: 88, col9: 98, col10: 108, col11: 118, col12: 128, col13: 138 },
    ];
    return data;
  };

  const getManuallyAddedValue = (key) => {
    switch (key) {
      case 'row1':
        return 'Tot.Dep.Req';
      case 'row2':
        return 'Tot.Indep.Req';
      case 'row3':
        return 'Tot.Plan Avail.';
      case 'row4':
        return 'Tot.Inventory';
      case 'row5':
        return 'Tot.Inv.Movemen';
      case 'row6':
        return 'Tot.Target Inv';
      case 'row7':
        return '  ';
      case 'row8':
        return 'Other';
      case 'row9':
        return 'Days of Supply';
      default:
        return 'Default value';
    }
  };

  const isLastRow = (index) => {
    return index === initialTableData.length - 1;
  };

  const handleButtonClick1 = () => {
    console.log('Button 1 clicked');
  };

  const handleButtonClick2 = () => {
    console.log('Button 2 clicked');
  };

  const initialTableData = getInitialTableData();

  return (
    <div>
      <div className='tableWithHeader'>
        
     <div className="table_heading_container">
     <div className="button-container">
        <Segmented options={['Week', 'Month']} className="segmented" />
        <Button
          onClick={handleButtonClick1}
          icon={<SettingOutlined />}
          className="custom-button"
          size="large"
        >
          Run simulation
        </Button>
        <Button
          onClick={handleButtonClick2}
          icon={<SettingOutlined />}
          className="custom-button"
          size="large"
        >
          Run demand simulation
        </Button>
      </div>
      <h3 className="table-heading" >Projection Table</h3>
     </div>
      <Table
        columns={columns}
        dataSource={initialTableData.map((record, index) => ({
          ...record,
          row: getManuallyAddedValue(record.key),
          isLastRow: isLastRow(index),
        }))}
        pagination={false}
        scroll={{ x: 'max-content' }}
        bordered
        rowClassName={(record, index) => (record.isLastRow ? 'table-row last-row' : 'table-row')}
        components={{
          body: {
            cell: (props) => {
              if (props.rowIndex === 0 && props.columnIndex === 0) {
                return <td className="first-cell" {...props} />;
              }
              return <td {...props} />;
            },
          },
        }}
      />
      </div>
      <KeysFrame style={{ marginTop: '20px' }} />
    </div>
  );
};

export default ProjectionTab;
