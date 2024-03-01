import React from 'react';
import DeleteIcon from './DeleteIcon';

const Item = ({ item, onDelete }) => {
  return (
    <div>
      {/* Renderizar el elemento */}
      <span>{item.name}</span>

      {/* Mostrar el ícono de eliminación */}
      <DeleteIcon onClick={() => onDelete(item.id)} />
    </div>
  );
};

export default Item;
