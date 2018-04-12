import React from 'react';

export default props =>(
  <li clasName='treeview'>
    <a href>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </a>
  </li>
)