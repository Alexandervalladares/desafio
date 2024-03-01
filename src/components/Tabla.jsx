// Tabla.jsx
import React from 'react';
import styles from '../app/presupuesto-app.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Tabla = ({ incomes, expenses, onDeleteIncome, onDeleteExpense }) => {
  // Calcular ingresos totales
  const totalIncomes = incomes.reduce((acc, income) => acc + income.amount, 0);

  // Calcular gastos totales
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  // Calcular total neto
  const netTotal = totalIncomes - totalExpenses;

  return (
    <div className={styles.visualizations}>
    <div className={`${styles.visualization} ${styles.expenses}`}>
      <h2>Gastos Totales</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            Cantidad: ${expense.amount.toFixed(2)} | Categoría: {expense.category} | Fecha: {expense.date} | Descripción: {expense.description}
            <button className={styles.deleteButton} onClick={() => onDeleteExpense(index)}>
              <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total Gastos: ${totalExpenses.toFixed(2)}</h3>
    </div>
    <div className={`${styles.visualization} ${styles.incomes}`}>
      <h2>Ingresos Totales</h2>
      <ul>
        {incomes.map((income, index) => (
          <li key={index}>
            Cantidad: ${income.amount.toFixed(2)} | Categoría: {income.category} | Fecha: {income.date} | Descripción: {income.description}
            <button className={styles.deleteButton} onClick={() => onDeleteIncome(index)}>
              <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total Ingresos: ${totalIncomes.toFixed(2)}</h3>
    </div>
    <div className={styles.bankContainer}>
      <h2>Resumen Mensual</h2>
      <div>
        <h3>Total Neto: ${netTotal.toFixed(2)}</h3>
      </div>
    </div>
  </div>
);
};

export default Tabla;
