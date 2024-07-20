import { useState, useEffect } from 'react';
import { NewsTemplate}  from './NewsTemplate';
import { AppBar } from './AppBar';
import axios from 'axios';

export const NewsLetter = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {

    const fetchArticles = async () => {

      const response = await axios.get("http://localhost:4000/newsletter");

      const json = await response.data

      setNews(json.data);

    }

    fetchArticles();

  }, []);

  return (
    <div>
        <AppBar/>
        <NewsTemplate news={news}/>
    </div>
  )
}