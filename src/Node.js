import React from 'react';
import './Node.css';
import 'bootstrap/dist/css/bootstrap.css';
export default class Node extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render(){
    let info =null;
    const data=this.props.data;
    if(typeof(data)==='object'){
      info=[];
      for (var key in data)
      {
        info.push(
          <table>
            <tbody>
              <tr>
                <td valign="top" className="field">
                  <p className="key-name">{key}: </p>
                </td>
                <td>
                  <p><Node data={data[key]}/></p>
                </td>
              </tr>
            </tbody>
          </table>
        );
      }
    }
    else{
      info = <p>{data}</p>;
    }
    return(
      <div>
        {info}
      </div>
    );
  }
}
