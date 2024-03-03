import React, { useEffect, useState } from 'react';

export default function PlanWesela() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7275/api/Guest');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Błąd pobierania danych z API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Surname: {item.surname}</p>
          <p>Diet Type ID: {item.dietTypeId}</p>
          <p>Is Transport From Church Needed: {item.isTransportFromChurchNeeded ? 'Yes' : 'No'}</p>
          <p>Table ID: {item.tableId}</p>
        </div>
      ))}
    </div>
  );
}