import React from 'react';

export default function Assignment8() {
  return (
    <div style={{ padding: '20px', overflowX: 'auto' }}>
      <h2 style={{ textAlign: "center" }}>Periodic Table of Elements</h2>
      <table 
        border="1" 
        cellPadding="10" 
        cellSpacing="0" 
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <tbody>
          {/* Row 1 */}
          <tr align="center">
            <td>1<br /><strong>H</strong></td>
            <td colSpan="16" style={{ border: "none" }}></td>
            <td>2<br /><strong>He</strong></td>
          </tr>

          {/* Row 2 */}
          <tr align="center">
            <td>3<br /><strong>Li</strong></td>
            <td>4<br /><strong>Be</strong></td>
            <td colSpan="10" style={{ border: "none" }}></td>
            <td>5<br /><strong>B</strong></td>
            <td>6<br /><strong>C</strong></td>
            <td>7<br /><strong>N</strong></td>
            <td>8<br /><strong>O</strong></td>
            <td>9<br /><strong>F</strong></td>
            <td>10<br /><strong>Ne</strong></td>
          </tr>

          {/* Row 3 */}
          <tr align="center">
            <td>11<br /><strong>Na</strong></td>
            <td>12<br /><strong>Mg</strong></td>
            <td colSpan="10" style={{ border: "none" }}></td>
            <td>13<br /><strong>Al</strong></td>
            <td>14<br /><strong>Si</strong></td>
            <td>15<br /><strong>P</strong></td>
            <td>16<br /><strong>S</strong></td>
            <td>17<br /><strong>Cl</strong></td>
            <td>18<br /><strong>Ar</strong></td>
          </tr>

          {/* Row 4 */}
          <tr align="center">
            <td>19<br /><strong>K</strong></td><td>20<br /><strong>Ca</strong></td><td>21<br /><strong>Sc</strong></td><td>22<br /><strong>Ti</strong></td>
            <td>23<br /><strong>V</strong></td><td>24<br /><strong>Cr</strong></td><td>25<br /><strong>Mn</strong></td><td>26<br /><strong>Fe</strong></td>
            <td>27<br /><strong>Co</strong></td><td>28<br /><strong>Ni</strong></td><td>29<br /><strong>Cu</strong></td><td>30<br /><strong>Zn</strong></td>
            <td>31<br /><strong>Ga</strong></td><td>32<br /><strong>Ge</strong></td><td>33<br /><strong>As</strong></td><td>34<br /><strong>Se</strong></td>
            <td>35<br /><strong>Br</strong></td><td>36<br /><strong>Kr</strong></td>
          </tr>

          {/* Row 5 */}
          <tr align="center">
            <td>37<br /><strong>Rb</strong></td><td>38<br /><strong>Sr</strong></td><td>39<br /><strong>Y</strong></td><td>40<br /><strong>Zr</strong></td>
            <td>41<br /><strong>Nb</strong></td><td>42<br /><strong>Mo</strong></td><td>43<br /><strong>Tc</strong></td><td>44<br /><strong>Ru</strong></td>
            <td>45<br /><strong>Rh</strong></td><td>46<br /><strong>Pd</strong></td><td>47<br /><strong>Ag</strong></td><td>48<br /><strong>Cd</strong></td>
            <td>49<br /><strong>In</strong></td><td>50<br /><strong>Sn</strong></td><td>51<br /><strong>Sb</strong></td><td>52<br /><strong>Te</strong></td>
            <td>53<br /><strong>I</strong></td><td>54<br /><strong>Xe</strong></td>
          </tr>

          {/* Row 6 */}
          <tr align="center">
            <td>55<br /><strong>Cs</strong></td><td>56<br /><strong>Ba</strong></td><td>57-71<br /><strong>*</strong></td><td>72<br /><strong>Hf</strong></td>
            <td>73<br /><strong>Ta</strong></td><td>74<br /><strong>W</strong></td><td>75<br /><strong>Re</strong></td><td>76<br /><strong>Os</strong></td>
            <td>77<br /><strong>Ir</strong></td><td>78<br /><strong>Pt</strong></td><td>79<br /><strong>Au</strong></td><td>80<br /><strong>Hg</strong></td>
            <td>81<br /><strong>Tl</strong></td><td>82<br /><strong>Pb</strong></td><td>83<br /><strong>Bi</strong></td><td>84<br /><strong>Po</strong></td>
            <td>85<br /><strong>At</strong></td><td>86<br /><strong>Rn</strong></td>
          </tr>

          {/* Row 7 */}
          <tr align="center">
            <td>87<br /><strong>Fr</strong></td><td>88<br /><strong>Ra</strong></td><td>89-103<br /><strong>**</strong></td><td>104<br /><strong>Rf</strong></td>
            <td>105<br /><strong>Db</strong></td><td>106<br /><strong>Sg</strong></td><td>107<br /><strong>Bh</strong></td><td>108<br /><strong>Hs</strong></td>
            <td>109<br /><strong>Mt</strong></td><td>110<br /><strong>Ds</strong></td><td>111<br /><strong>Rg</strong></td><td>112<br /><strong>Cn</strong></td>
            <td>113<br /><strong>Nh</strong></td><td>114<br /><strong>Fl</strong></td><td>115<br /><strong>Mc</strong></td><td>116<br /><strong>Lv</strong></td>
            <td>117<br /><strong>Ts</strong></td><td>118<br /><strong>Og</strong></td>
          </tr>

          {/* Spacer Row */}
          <tr><td colSpan="18" style={{ border: "none", padding: "10px" }}></td></tr>

          {/* Lanthanides */}
          <tr align="center">
            <td colSpan="3" style={{ border: "none" }}>* Lanthanides</td>
            <td>57<br /><strong>La</strong></td><td>58<br /><strong>Ce</strong></td><td>59<br /><strong>Pr</strong></td><td>60<br /><strong>Nd</strong></td>
            <td>61<br /><strong>Pm</strong></td><td>62<br /><strong>Sm</strong></td><td>63<br /><strong>Eu</strong></td><td>64<br /><strong>Gd</strong></td>
            <td>65<br /><strong>Tb</strong></td><td>66<br /><strong>Dy</strong></td><td>67<br /><strong>Ho</strong></td><td>68<br /><strong>Er</strong></td>
            <td>69<br /><strong>Tm</strong></td><td>70<br /><strong>Yb</strong></td><td>71<br /><strong>Lu</strong></td>
          </tr>

          {/* Actinides */}
          <tr align="center">
            <td colSpan="3" style={{ border: "none" }}>** Actinides</td>
            <td>89<br /><strong>Ac</strong></td><td>90<br /><strong>Th</strong></td><td>91<br /><strong>Pa</strong></td><td>92<br /><strong>U</strong></td>
            <td>93<br /><strong>Np</strong></td><td>94<br /><strong>Pu</strong></td><td>95<br /><strong>Am</strong></td><td>96<br /><strong>Cm</strong></td>
            <td>97<br /><strong>Bk</strong></td><td>98<br /><strong>Cf</strong></td><td>99<br /><strong>Es</strong></td><td>100<br /><strong>Fm</strong></td>
            <td>101<br /><strong>Md</strong></td><td>102<br /><strong>No</strong></td><td>103<br /><strong>Lr</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}