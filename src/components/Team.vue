<template>
<div id="team" class="h100">
  <div class="center1">
  <div class="circle inline"></div>
  <div class="team inline">Team Members</div>
  <div class="circle inline"></div>
  </div>
    <div class="row relative">
      <div class="col-md-6 col-lg-6 col-s-12">
        <div class="bluebox">
          <img src="../assets/profile.jpg" class="cimg"/>
          <div class="cntr mT15 title">Linga</div>
          <div class="cntr subt">Web-developer</div>
          <div class="cntr mT30 role">Text</div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6  col-s-12">
        <div class="greybox ">
          <img src="../assets/profile.jpg" class="cimg"/>
          <div class="cntr mT15 title">Linga</div>
          <div class="cntr subt">Web-developer</div>
          <div class="cntr mT30 role">Text</div>
        </div>
      </div>
    </div>
    <div class="row relative">
      <div class="col-md-6 col-lg-6 col-s-12">
        <div class="greybox ">
          <img src="../assets/profile.jpg" class="cimg"/>
          <div class="cntr mT15 title">Linga</div>
          <div class="cntr subt">Web-developer</div>
          <div class="cntr mT30 role">Text</div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6  col-s-12">
        <div class="bluebox ">
          <img src="../assets/profile.jpg" class="cimg"/>
          <div class="cntr mT15 title">Linga</div>
          <div class="cntr subt">Web-developer</div>
          <div class="cntr mT30 role">Text</div>
        </div>
      </div>
    </div>
</div>
</template>
<style>
.mT15{
  margin-top:15px;
}
.team{
letter-spacing:5px;
}
.center1 {
  margin-top:30px;
  margin-left:40%;
  padding-bottom:15px;
}
@media screen and (min-width:300px) and (max-width:500px) {
  .center1 {
  margin-top:30px;
  margin-left:30%;
  padding-bottom:15px;
}
}
.circle {
  content:'';
  height:15px;
  width:15px;
  border:solid 1px #444;
  border-radius:50%;
}
#team .cntr{
  text-align: center;
  margin-left:auto;
}
#team .cimg {
  height:150px;
  width:150px;
  border-radius:50%;
  margin-left:75px;
}
@media screen and (min-width:300px) and (max-width:350px) {
  #team .cimg {
  height:150px;
  width:150px;
  border-radius:50%;
  margin-left:25px;
}
}
@media screen and (min-width:351px) and (max-width:700px) {
 #team .cimg {
  height:150px;
  width:150px;
  border-radius:50%;
  margin-left:78px;
}
}
@media screen and (min-width:1000px) and (max-width: 1080px) {
 #team .cimg {
  height:150px;
  width:150px;
  border-radius:50%;
  margin-left:32%;
}
}
@media screen and (min-width:1100px) and (max-width:2000px) {
 #team .cimg {
  height:150px;
  width:150px;
  border-radius:50%;
  margin-left: 38%;
}
}
.title{
font-weight: 500;
font-size:18px;
color:#fff;
}
.subt{
font-size:14px;
color:#fff;
}
.role{
font-size:12px;
color:#fff;
}
.bluebox{
  background-color:aqua;
  padding: 50px;
}
.greybox{
  background-color:#333;
  padding: 50px;
}
#team .col-lg-6 {
  padding-right:0px!important;
  padding-left:0px!important;
}
#team .col-md-12 {
  padding-right:0px!important;
  padding-left:0px!important;
}
#team .col-s-12 {
  padding-right:0px!important;
  padding-left:0px!important;
}
.w96 {
  width: 96%;
}
.inline {
  display:inline-block;
}
</style>
