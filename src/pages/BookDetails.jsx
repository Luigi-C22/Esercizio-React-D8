import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(0);
  //console.log(book)

  const getBookDetail = async () => {
    try {
      const response = await fetch(`https://epibooks.onrender.com/${bookId}`);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, [bookId]);

 
  const { asin, title, category, img, price } = book;
  
  return (
   
           <Card className="bg-dark text-white">
          <Card.Img img src={book.img} alt="Card image" />
          <Card.ImgOverlay>
          <Card.Title>Title: {book.title}</Card.Title>
          <Card.Title>Genre: {book.category}</Card.Title>
          <Card.Title>Price: {book.price}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    }
  
export default BookDetails;