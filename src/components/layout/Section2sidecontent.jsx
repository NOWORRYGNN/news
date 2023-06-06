import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Api from '../../api/contentData-api';
import Content from '../content';

const Section2sidecontent = () => {
    const selectedId = [1];
    const selectedId2 = [2];
    const selectedId3 = [3];
    const [content2, setContent] = useState([
        {id: 1, tittle: 'default', text2: 'default'},
        {id: 2, tittle: 'default', text2: 'default'},
        {id: 3, tittle: 'default', text2: 'default'}
    ]);
    useEffect(() => {
        Api.get('/contentData').then(res => {
            setContent(res.data);
        })
    }, []);
    const res = selectedId.map((id) => content2.find((o) => o.id === id));    
    const res2 = selectedId2.map((id) => content2.find((o) => o.id === id)); 
    const res3 = selectedId3.map((id) => content2.find((o) => o.id === id)); 

    // console.log(res)
    return (
        <>
        <Stack direction='vertical' gap-3 className='bg-black p-5'>
            <div className="mb-4 mt-1" style={{color: 'yellow'}}><h1>New</h1></div>
            <Content 
                tittle={res.map(res => <div>{res.tittle}</div>)} 
                text2={res.map(res => <div>{res.text2}</div>)} 
            />
            <hr style={{color: 'white'}} />
            <Content 
                tittle={res2.map(res2 => <div>{res2.tittle}</div>)} 
                text2={res2.map(res2 => <div>{res2.text2}</div>)} 
            />
            <hr style={{color: 'white'}}/>
            <Content 
                tittle={res3.map(res3 => <div>{res3.tittle}</div>)} 
                text2={res3.map(res3 => <div>{res3.text2}</div>)} 
            />
        </Stack>
        </>
    )
}

export default Section2sidecontent