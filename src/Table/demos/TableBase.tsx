import React from 'react';
import { Table, TableColumn } from 'react-papercss-design';

type DataType = {
  rank: number;
  name: string;
  position: string;
  location: {
    country: string;
    state: string;
  };
};

const columns: TableColumn<DataType>[] = [
  {
    title: '#',
    dataIndex: 'rank',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    render: (value) => `${value.country}, ${value.state}`,
  },
];

const data: DataType[] = [
  {
    rank: 1,
    name: 'Bob Dylan',
    position: 'Musician',
    location: {
      country: 'USA',
      state: 'California',
    },
  },
  {
    rank: 2,
    name: 'Eric Clapton',
    position: 'Musician',
    location: {
      country: 'USA',
      state: 'Ohio',
    },
  },
  {
    rank: 3,
    name: 'Daniel Kahneman',
    position: 'Psychologist',
    location: {
      country: 'USA',
      state: 'California',
    },
  },
];

const App: React.FC = () => {
  return <Table striped hoverable dataSource={data} columns={columns} />;
};

export default App;
