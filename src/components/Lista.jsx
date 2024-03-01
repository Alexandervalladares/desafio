// Lista.jsx
import React, { useState } from 'react';
import styles from '../app/presupuesto-app.module.css';
import Alert from '../components/DeleteIcon';

const Lista = ({ addIncome, addExpense }) => {
  const [amount, setAmount] = useState('');
  const [movementType, setMovementType] = useState('expense');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddMovement = () => {
    if (amount && (selectedCategory || customCategory) && date && description) {
      const category = customCategory || selectedCategory;
      if (movementType === 'expense') {
        addExpense({ category, amount: parseFloat(amount), date, description });
      } else {
        addIncome({ category, amount: parseFloat(amount), date, description });
      }
      resetForm();
    } else {
      setError('Por favor, complete todos los campos');
    }
  };

  const resetForm = () => {
    setAmount('');
    setSelectedCategory('');
    setCustomCategory('');
    setDate('');
    setDescription('');
    setError('');
  };

  return (
    <div className={styles.bankForm}>
      {error && <p className={styles.error}>{error}</p>}
      <label>
        Movimiento:
        <select value={movementType} onChange={(e) => setMovementType(e.target.value)}>
          <option value="expense">Gasto</option>
          <option value="income">Ingreso</option>
        </select>
      </label>
      <label>
        Cantidad:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Categoría:
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Seleccione una categoría</option>
          <option value="Alimentación">Alimentación</option>
          <option value="Transporte">Transporte</option>
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Caja fuerte">Caja fuerte</option>
          <option value="Ahorro">Ahorro</option>
          <option value="Cartera">Cartera</option>
        </select>
      </label>
      <label>
        o ingrese una categoría personalizada:
        <input type="text" value={customCategory} onChange={(e) => setCustomCategory(e.target.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Descripción:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        {description === '' && <span className={styles.error}> (Campo obligatorio)</span>}
      </label>
      <button className={styles.bankButton} onClick={handleAddMovement}>Agregar Movimiento</button>
    </div>
  );
};

export default Lista;