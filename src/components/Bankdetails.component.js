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
    const myparam = location.state;
  
    return (
     
        <Card
          style={{
            width: 'auto',
            height:'auto',
            backgroundColor: "whitesmoke"
          }}
        >
          <CardContent className="bank_card">
          <span>Bank Name :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />
             {myparam.bank_name}
             <hr/>
             <span>Bank id :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{myparam.bank_id}
             <hr/>
             <span>Bank IFSC :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{myparam.ifsc}
             <hr/>
           <span>Bank Branch :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{myparam.branch}
             <hr/>
             <span>Bank City :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{myparam.city}
             <hr/>
             <span>Bank District :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{myparam.district}
             <hr/>
             <span>Bank State :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{myparam.state}
             <hr/>
             <span>Bank Address :</span>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            />{myparam.address}
             <hr/>
          </CardContent>
          <CardActions>
            <Button size="small">Lets Groww</Button>
          </CardActions>
        </Card>
 )}

 export default Bank;