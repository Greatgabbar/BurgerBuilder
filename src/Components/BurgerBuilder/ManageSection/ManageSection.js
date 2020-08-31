import React from 'react';
import Aux from '../../HOC/Aux/Aux'
import List from './List/List';
import classes from './ManageSection.module.css'


const ManageSection = ( props )=>{
  const obj=[
    'Salad','Bacon','Cheese','Meat'
  ];

const list=obj.map((ingdata)=>{
  return(
    <List key={ingdata} type={ingdata}></List>
  )
})

return (
  <Aux>
    <div className={classes.Manage}>
      {list}
    </div>
  </Aux>
)
}

export default ManageSection;