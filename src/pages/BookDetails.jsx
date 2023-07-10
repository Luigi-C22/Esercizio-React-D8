import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyNav from "../components/main/MyNav";
import '../components/main/Card.css';
import MyFooter from '../components/main/MyFooter';


const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState(0);
  //console.log(book)

  const getBookDetail = async () => {
    try {
      const response = await fetch(`https://epibooks.onrender.com/${asin}`);
      const data = await response.json();
      setBook(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, [asin]);

 //console.log(book);
  /* const {  title, category, img, price } = book; */
  
  return (
    <>
      <MyNav />

      
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Img src={book.img} alt="card image" className="customImg" />
          <Card.Body>
            <div>
              <Card.Title>Title: {book.title}</Card.Title>
              <Card.Title>Genre: {book.category}</Card.Title>
              <Card.Title>Price: {book.price}</Card.Title>
            </div>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button as = {Link} to ="/" variant="primary">Home</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      
      <MyFooter />
    </>
  );
}
  
export default BookDetails;