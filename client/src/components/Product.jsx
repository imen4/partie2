import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import { postCommand } from '../JS/actions/commandAction'


const Product = ({product}) => {
  const dispatch = useDispatch()
  const [command , setCommand] = useState({name:'',price:''})
  
  useEffect(()=>{
    setCommand({name:product.name, price:product.price})
    //eslint-disable-next-line
  },[])

    const handleCommand= ()=>{
      dispatch(postCommand(command))
     }
   
  return (
    <Card style={{margin:"10px"}}>
    <Card.Content>
      <Image
        floated='right'
        size='small'
        src={product.image}
      />
      <Card.Header>{product.name}</Card.Header>
      <Card.Meta> {product.price} </Card.Meta>
      <Card.Description>
        {product.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Link to={`/command`}>
        <Button basic color='red'  onClick={handleCommand}>
          Commande
        </Button></Link>
      </div>
    </Card.Content>
  </Card>
  )
}

export default Product