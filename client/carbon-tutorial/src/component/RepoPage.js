import React, { useEffect, useState } from 'react';
import RepoTable from './RepoTable';
import axios from 'axios';
import { Pagination } from 'carbon-components-react';
import { append } from 'express/lib/response';
import { query } from 'express';
import users from '../../../../server/mongo/users';


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
  const [tabledata, settabledata] = useState([])
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  // useEffect(() => {
  //   axios.get('http://localhost:3001/api').then(response => {
  //     settabledata(response.data)
  //     console.log(response)
  //   })

  // }, [])

//   useEffect(() => {
//     async function getData() {
//         const res = await axios.get(`/employee`);
//         settabledata(res.data);
//     }
//     getData();

// }, [])

useEffect(()=>{
  const empnew= async()=>{
    const res=await axios.get('./admin?=${que}&page=${page}&size=${size}');

  };
  if(que.length == 0 || que.length >2)empnew();
  
},[que,page,size])

let empdata = []; 

tabledata.map((item, index) => {
    let emp = {};
    emp["id"] = index;
    emp["name"] = item.name;
    emp["lastName"] = item.lastName;
    emp["email"] = item.email;
    emp["role"] = item.role;
    empdata.push(emp);
    return null;
})
    append.get("/search/:name",function(req,res){
    var regex=new RegExp(req.params.name,'i');
    User.find({name:regex}).then((result)=>{
    res.status(200).json(result)
    })
  })
  return (<>
    <RepoTable headers={headers} rows={empdata.slice(firstRowIndex, firstRowIndex + currentPageSize)
    }/>
    <Pagination
      totalItems={empdata.length}
      backwardText="Previous page"
      forwardText="Next page"
      pageSize={currentPageSize}
      pageSizes={[5, 10, 15, 25]}
      itemsPerPageText="Items per page"
      onChange={({ page, pageSize }) => {
      if (pageSize !== currentPageSize) {
        setCurrentPageSize(pageSize);
      }
      setFirstRowIndex(pageSize * (page - 1));
  }} 
/>
</>
  );
};
export default RepoPage;