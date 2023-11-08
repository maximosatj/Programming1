import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { UserContext } from '../../CONTEXT/UserContext';

export const ListBuy = () => {
  const { user } = useContext(UserContext);
  const userIdBuyed = user.id;
  const [buys, setBuys] = useState([]);

  // Definir fetchMyBuys utilizando useCallback
  const fetchMyBuys = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/buy/${userIdBuyed}`);
      setBuys(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [userIdBuyed]);

  useEffect(() => {
    fetchMyBuys();
  }, [fetchMyBuys]);

  const onDeleteBuy = async (buyId) => {
    try {
      await axios.delete(`http://localhost:5000/buy/${buyId}`);
      fetchMyBuys();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-container">
      {buys.map((buy) => (
        <tr key={buy.id}>
          <td>{buy.name}</td>
          <td>{buy.price}</td>
          <td>{buy.stock}</td>
          <td>{buy.description}</td>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => onDeleteBuy(buy.id)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </div>
  );
};
