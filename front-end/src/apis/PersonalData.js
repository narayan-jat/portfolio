import { useEffect, useState } from "react";
import axios from "axios";

export default function PersonalData() {

    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://narayanjat.pythonanywhere.com/user_details/',
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setData(response.data); 
      } catch (error) {
        if (error.response) {
          
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Error request data:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    };

    fetchData(); 
  }, []);
  
  return data;
};