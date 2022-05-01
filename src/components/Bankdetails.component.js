import React from 'react'
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../css/styles.css';

 const Bank = ()=> {
     const location = useLocation()
    const mydata = location.state;
  
    return (
     
        <Card className="card"
          style={{
            width: 'auto',
            height:'auto',
            backgroundColor: "gray",
          }}
        >
          <CardContent className="bank_card">
          <span>Bank Name :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />
             {mydata.bank_name}
             <hr/>
             <span>Bank id :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{mydata.bank_id}
             <hr/>
             <span>Bank IFSC :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{mydata.ifsc}
             <hr/>
           <span>Bank Branch :</span>
            <Typography
              style={{ fontSize: 16 }}
              color="textSecondary"
              gutterBottom
            />{mydata.branch}
             <hr/>
             <span>Bank City :</span>
            <Typography
              style={{ fontSize: 16 }}
              color="textSecondary"
              gutterBottom
            />{mydata.city}
             <hr/>
             <span>Bank District :</span>
            <Typography
              style={{ fontSize: 16 }}
              color="textSecondary"
              gutterBottom
            />{mydata.district}
             <hr/>
             <span>Bank State :</span>
            <Typography
              style={{ fontSize: 16 }}
              color="textSecondary"
              gutterBottom
            />{mydata.state}
             <hr/>
             <span>Bank Address :</span>
            <Typography
              style={{ fontSize: 16 }}
              color="textSecondary"
              gutterBottom
            />{mydata.address}
             <hr/>
          </CardContent>
        </Card>
 )}

 export default Bank;