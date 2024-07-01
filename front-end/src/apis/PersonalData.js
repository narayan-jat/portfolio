import { useEffect, useState } from "react";
import axios from "axios";

export default function PersonalData() {

    const [data, setData] = useState(null); // State to hold fetched data

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
        setData(response.data); // Update state with fetched data
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request data:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }
      }
    };

    fetchData(); // Call fetchData when component mounts

  }, []);

  return data; // Return fetched data from the component
};