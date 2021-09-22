import React from "react";
import "./third.css";

export const Third = () => {
  return (
    <>
      <pre>This is the <b>Third js file.</b></pre>
      <p className="text">
        React js is a library of javascript. It is developed by facebook.<br/><b>Third js file.</b>
      </p>
    </>
  );
};




export const Fourth = () => {
  return (
    <>
    <h2 style={{backgroundColor:'red',color:'white'}}>This is Fourth JS file</h2>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </>
  );
};
