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
    // const id1 = Object.keys(content2);
    // console.log(res)
    return (
        <>
        <Stack direction='vertical' className='bg-black p-4 gap-4'>
            <div className="mb-1 mt-1" style={{color: 'yellow'}}><h2>New</h2></div>
            <Content 
                tittle1={res.map(res => <div>{res.tittle}</div>)} 
                text1={res.map(res => <div>{res.text2}</div>)}
                key1={selectedId}
            />
            <hr style={{color: 'white'}} />
            <Content 
                tittle2={res2.map(res2 => <div>{res2.tittle}</div>)} 
                text2={res2.map(res2 => <div>{res2.text2}</div>)}
                key2={selectedId2}
            />
            <hr style={{color: 'white'}}/>
            <Content 
                tittle3={res3.map(res3 => <div>{res3.tittle}</div>)} 
                text3={res3.map(res3 => <div>{res3.text2}</div>)}
                key3={selectedId3}
            />
        </Stack>
        </>
    )
}

export default Section2sidecontent