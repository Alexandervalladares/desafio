// page.js
"use client";
import React, { useState, useEffect } from 'react';
import CategoryList from '../components/Lista';
import Summary from '../components/Tabla';
import styles from '../app/presupuesto-app.module.css'; // Importa el archivo CSS
import '../app/globals.css'
import Alert from '../components/DeleteIcon';

// Funciones para manipular los datos JSON
function saveData(data) {
  localStorage.setItem('budgetData', JSON.stringify(data));
}

function loadData() {
  const data = localStorage.getItem('budgetData');
  return data ? JSON.parse(data) : { incomes: [], expenses: [] };
}

function addIncome(income) {
  const data = loadData();
  data.incomes.push(income);
  saveData(data);
}

function addExpense(expense) {
  const data = loadData();
  data.expenses.push(expense);
  saveData(data);
}

function deleteIncome(index) {
  const data = loadData();
  data.incomes.splice(index, 1);
  saveData(data);
}

function deleteExpense(index) {
  const data = loadData();
  data.expenses.splice(index, 1);
  saveData(data);
}

const PresupuestoApp = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const initialData = loadData();
    setIncomes(initialData.incomes);
    setExpenses(initialData.expenses);
  }, []);

  const handleAddIncome = (income) => {
    addIncome(income);
    setIncomes([...incomes, income]);
  };

  const handleAddExpense = (expense) => {
    addExpense(expense);
    setExpenses([...expenses, expense]);
  };

  const handleDeleteIncome = (index) => {
    deleteIncome(index);
    const updatedIncomes = [...incomes];
    updatedIncomes.splice(index, 1);
    setIncomes(updatedIncomes);
  };

  const handleDeleteExpense = (index) => {
    deleteExpense(index);
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
    <h1 className={styles.bankHeading}>PresupuestoApp</h1>
    <div className={styles.bankSection}>
      <h2 className={styles.bankSubHeading}>Registro</h2>
      <div className="container">
        <div className="left">
          <CategoryList addIncome={handleAddIncome} addExpense={handleAddExpense} />
        </div>
        <div className="right">
          <Summary
            incomes={incomes}
            expenses={expenses}
            onDeleteIncome={handleDeleteIncome}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default PresupuestoApp;