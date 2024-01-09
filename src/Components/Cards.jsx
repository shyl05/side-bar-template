import * as React from 'react';
import Card from '@mui/material/Card';
import './Card.css'
import CardContent from '@mui/material/CardContent';

export default function Cards({data}) {
  return (
    <Card className='card-container' style={{backgroundColor: data.backgroundcolor}}>
        <CardContent className='card-content'>
            <div className='card-content-text'>
                <p className='card-title'>
                    {data.title}
                </p>
                <p  className='card-sub-title'>
                    {data.subtitle}
                </p>
                <p  className='card-action'>
                    View entire list
                </p>
            </div>
            <div className='card-content-img'>
                <img  src={data.imgPath} className='card-img' alt="img"/>
            </div>
        </CardContent>
    </Card>
  );
}