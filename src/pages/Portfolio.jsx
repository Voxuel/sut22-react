import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchDataCall = async ({ api }) => {
    let apiReturn = await axios
      .get(api)
      .then(async function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    return apiReturn;
  };

function Portfolio(){
    const [data, setData] = useState({ work: [] });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log('hello from useEffect');
        const fetchData = async () => {
          setIsLoading(true);
    
          const result = await axios('cv.json');
          console.log(result.data);
          setData(result.data);
          setIsLoading(false);
        };
    
        fetchData();
      }, []);
      console.log('hey from portfolio');
      return( 
        <>
        <h1>Portfolio</h1>
        {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.work.map(item => (
            <li>
              <h4>{item.name}</h4>
              <p>{item.Role}</p>
            </li>
          ))}
        </ul>
      )}
        </>
    );
}

export default Portfolio;