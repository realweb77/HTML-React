import React from 'react';

export default function Assignment6() {
  return (
    <div>
      <h2>STUDENT REGISTRATION FORM</h2>
      <form>
        <table border="0">
          <tbody>
            <tr><td>FIRST NAME</td><td><input type="text" /> (max 30 characters)</td></tr>
            <tr><td>LAST NAME</td><td><input type="text" /> (max 30 characters)</td></tr>
            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <select><option>Day</option></select>&nbsp;
                <select><option>Month</option></select>&nbsp;
                <select><option>Year</option></select>
              </td>
            </tr>
            <tr><td>EMAIL ID</td><td><input type="email" required /></td></tr>
            <tr><td>MOBILE NUMBER</td><td><input type="number" required /></td></tr>
            <tr>
              <td>GENDER</td>
              <td>
                Male <input type="radio" name="g" /> Female <input type="radio" name="g" />
              </td>
            </tr>
            <tr><td>ADDRESS</td><td><textarea cols="30" rows="4"></textarea></td></tr>
            <tr><td>CITY</td><td><input type="text" /></td></tr>
            <tr><td>PIN CODE</td><td><input type="number" /></td></tr>
            <tr><td>STATE</td><td><input type="text" /></td></tr>
            <tr><td>COUNTRY</td><td><input type="text" /></td></tr>
            <tr>
              <td>HOBBIES</td>
              <td>
                Drawing <input type="checkbox" /> Singing <input type="checkbox" /> 
                Dancing <input type="checkbox" /> Sketching <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>COURSES</td>
              <td>
                BCA <input type="radio" name="c" /> B.Com <input type="radio" name="c" />
                B.Sc <input type="radio" name="c" /> B.A <input type="radio" name="c" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button> <button type="reset">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}