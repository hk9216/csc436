import React from 'react'
import Todo from './Todo'

export default function TodoList ({itemslist = []}) {return  (<div> <h3> Items Completed </h3> {itemslist.map((p, i) => <Todo {...p} title={p.title} Description={p.Description} DateCreated={p.DateCreated} Complete={p.Complete}  key={'post-' + i} />) } </div> )}