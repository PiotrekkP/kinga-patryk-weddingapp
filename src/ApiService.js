import axios from 'axios';

const API_URL = 'https://localhost:7275';

const ApiService = {
  fetchData: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/Guest`);
      return response.data;
    } catch (error) {
      console.error('Błąd pobierania danych z API', error);
      throw error;
    }
  },

  sendData: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/sendData`, data);
      return response.data;
    } catch (error) {
      console.error('Błąd wysyłania danych do API', error);
      throw error;
    }
  },

  updateData: async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/updateData/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Błąd aktualizacji danych w API', error);
      throw error;
    }
  },

  deleteData: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/deleteData/${id}`);
      return response.data;
    } catch (error) {
      console.error('Błąd usuwania danych z API', error);
      throw error;
    }
  },
};

export default ApiService;