import React from 'react'
import Todo from './Todo'

export default function TodoList ({itemslist = []}) {return  (<div> <h3> Items Completed </h3> {itemslist.map((p, i) => <Todo {...p} id={p.id} author={p.author} title={p.title} Description={p.Description} dateCreated={new Date().toLocaleDateString()} complete={p.complete} DateCompleted={new Date().toLocaleDateString()} key={'post-' + i}/>) } 


</div> )}