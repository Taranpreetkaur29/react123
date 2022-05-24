import React, { useEffect, useState } from 'react';
import RepoTable from './RepoTable';
import axios from 'axios';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'lastName',
    header: 'LastName',
  },
  {
    key: 'email',
    header: 'Email',
  },
  {
    key: 'role',
    header: 'Role',
  },
];

// const rows = [
//   {
//     id: '1',
//     name: 'Taranpreet',
//     lastName: 'Kaur',
//     email: 'preet12@gmail.com',
//     role: 'developer',
//   },
//   {
//     id: '2',
//     name: 'Baban',
//     lastName: 'Kaur',
//     email: 'asd12@gmail.com',
//     role: 'developer',
//   },
//   {
//     id: '3',
//     name: 'abc',
//     lastName: 'okay',
//     email: 'abc12@gmail.com',
//     role: 'developer',
//   },
//   {
//     id: '4',
//     name: 'pqr',
//     lastName: 'stu',
//     email: 'pqr122@gmail.com',
//     role: 'developer',
//   },
//   {
//     id: '5',
//     name: 'plm',
//     lastName: 'ujm',
//     email: 'saed12@gmail.com',
//     role: 'developer',
//   },
// ];


const RepoPage = () => {
  const[tabledata, settabledata]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/api').then(response =>{
      settabledata(response.data)
     console.log(response)
    })
  },[])
  return (
    <div className="cds--grid cds--grid--full-width cds--grid--no-gutter repo-page">
      <div className="cds--row repo-page__r1">
        <div className="cds--col-lg-16">Data table will go here</div>
        <RepoTable headers={headers} rows={tabledata} />
      </div>
    </div>
  );
};

export default RepoPage;