<template>
<div class="features">
  <div class="center">
  <div class="circle inline"></div>
  <div class="featurestxt inline">FEATURES</div>
  <div class="circle inline"></div>
    <div><img src="../assets/bg image.png" class="hdimage" /></div>
  </div>
  <div class="wrapper ">
  <div class="box"><div class="headertext">1.Ease Of Trade</div><article>Lorem Ipsum dolor sit amet, consectetur adipsicing elite. Got it? Neither did we. In the publishing and design industries</article><img src="../assets/profile.jpg" class="circleimg"/></div>
  <div class="box"><div class="headertext">2.Consultancy</div><article>Lorem Ipsum dolor sit amet, consectetur adipsicing elite. Got it? Neither did we. In the publishing and design industries</article><img src="../assets/profile.jpg" class="circleimg"/></div>
  <div class="box"><div class="headertext">3.General Trading</div><article>Lorem Ipsum dolor sit amet, consectetur adipsicing elite. Got it? Neither did we. In the publishing and design industries</article><img src="../assets/profile.jpg" class="circleimg"/></div>
  </div>
</div>
</template>
<style>
.hdimage {
  height:150px;
  width:150px;
}
.w97{
width:97%;
}
#features .circle {
  content:'';
  height:15px;
  width:15px;
  border:solid 1px #444;
  border-radius:50%;
}
#features .col-md-12 {
  padding-right: 0px;
    padding-left: 0px;
}
#features .col-lg-8 {
  padding-right: 0px;
    padding-left: 0px;
}
.featurestxt {
letter-spacing:5px;
}
.inline {
  block:inline;
}
.center {
  margin-top:30px;
  margin-left:40%;
  padding-bottom:15px;
}
@media screen and (min-width:300px) and (max-width:500px) {
  .center {
  margin-top:30px;
  margin-left:30%;
  padding-bottom:15px;
}
}
.wrapper {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  background-color: #fff;
}
@media screen and (min-width:720px) and (max-width:4000px) {
.wrapper {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  background-color: #fff;
}
}
@media screen and (min-width:300px) and (max-width:760px) {
.wrapper {
  display: grid;
  grid-template-columns: 100%;
  background-color: #fff;
}
}
.box {
  background-color: #fff;
  color: #444;
  padding: 20px;
  font-size: 150%;
}
@media screen and (min-width:720px) and (max-width:4000px) {
.box:nth-child(-n+2) {
  border-right:solid 1px #444;
}
}
.headertext {
  text-align:center;
  font-size:18px;
}
article {
padding-top:30px;
text-align:center;
font-size:14px;
padding-bottom:50px;
}
.circleimg {
  height:150px;
  width:150px;
  border-radius:50%;
  margin-left:40px;
}
@media screen and (min-width:350px) and (max-width:500px) {
.circleimg {
  height:150px;
  width:150px;
  border-radius:50%;
  margin-left:32%;
}
}
</style>
