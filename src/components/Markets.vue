<template>
<div id="markets">
  <div class="header">
  <div class="center1">
    <div class="circle inline"></div>
    <div class="markets inline">Markets</div>
    <div class="circle inline"></div>
  </div>
  <div class="pT30 mL20">
    <div class="coins inline">FAV</div>
    <div class="coins inline">BNB</div>
    <div class="coins inline">BTC</div>
    <div class="coins inline">ETH</div>
    <div class="coins inline">USDT</div>
    <div class="coins inline">IND</div>
    <div class="coins inline">XYZ</div>
    <div class="coins inline">XYZ</div>
  </div>
  </div>
  <div class="background">
    <table  style="width:100%;">
        <tr>
      <th>Pair/Vol</th>
      <th>Last Price</th>
      <th><div>24hrChg%</div></th>
        </tr>
        <tbody>
        <tr>
          <td>a</td>
          <td>b</td>
          <td><div class="charge">c</div></td>
        </tr>
                <tr>
          <td>a</td>
          <td>b</td>
          <td><div class="charge">c</div></td>
        </tr>
        </tbody>
    </table>
  </div>
</div>
</template>
<style>
.background{
  background-image: url('../assets/bgimage.png');
  background-repeat: no-repeat;
  background-position: center;
  background-color:#8a8b8b;
  height:100vh;
}
#markets th{
  font-size: 11px;
  background-color: #fff;
  padding: 14px 15px;
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 1px;
  color: #717b85;
  text-align:center;
}
#markets td{
border-bottom: 2px solid #fff;
text-align: center;
padding:9px;
}
.charge{
width:200px;
height:30px;
background-color: yellow;
border-radius: 28px;
margin:auto;
}
.header{
  background-color: #3191b9;
  padding:30px;
}
.mL20{
  margin-left:20%;
}
.coins{
  width:100px;
  height:30px;
  background-color:#e3dddd;
  border-radius:28px;
  text-align:center;
  margin:15px;
}
.active{
  background-color: yellow;
}
.inline {
  display:inline-block;
}
.circle {
  content:'';
  height:15px;
  width:15px;
  border:solid 1px #444;
  border-radius:50%;
}
.markets{
letter-spacing:5px;
}
.center1 {
  margin-top:30px;
  margin-left:50%;
  padding-bottom:15px;
}
@media screen and (min-width:300px) and (max-width:500px) {
  .center1 {
  margin-top:30px;
  margin-left:30%;
  padding-bottom:15px;
}
}
.pT30{
  padding-top:30px;
}
</style>
