// import React from 'react'
// import Home from './Home'
// const Blog = () => {
//   return (
//     <div>Blog
    
//     </div>
//   )
// }

// export default Blog
import  { useState, useEffect } from 'react';

const Blog= () => {
  const [data, setData] = useState({});
  const [newData, setNewData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API link
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.100acress.com/contact_Updated/6548c71a0e1608e4f3f83e27', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        
        setData(newData);
      } else {
        console.error('Failed to update data');
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error updating data:', error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  return (
    <div className='mt-5'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data: {data.status}</h1>
          <label>
            Update status:
            <input type="text" name="status" onChange={handleInputChange} />
          </label>
          <button onClick={handleUpdate}>Update Data</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
