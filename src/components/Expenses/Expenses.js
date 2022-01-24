import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedFilter={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <div>
        {expenses.map((item) => {
          return <ExpenseItem expense={item} key={item.id} />;
        })}
      </div>
    </Card>
  );
};

export default Expenses;
