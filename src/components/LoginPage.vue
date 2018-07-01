<template>
  <div id="login">
    <div class="row h100 relative">

    <div class="col-md-12 col-lg-6 col-s-12 " id="content">
      <b-navbar toggleable="lg" sticky="true">
        <b-navbar-brand href="/"> <img src="../assets/logo.png" class="logosize" /></b-navbar-brand>
      </b-navbar>
      <div class="welcome">
      Hello!<br>Welcome<br>to Cryptocrat
      </div>
      <div class="float-right"><img src="../assets/bg image.png" class="fixed chain bgimg" /></div>

    </div>
    <div id="sidebar" class="col-lg-6 overlay side pT50">
      <div class="log">
        LOGIN
      </div>
    <div class="mT10">
        <div class="clear">
        </div>
        <div class="relative">
          <span class="user">
          <i class="fas fa-unlock-alt inside"></i></span>
          <input type="text"  class="border txtfld" placeholder="User_id">
        </div>
        <div class="relative mT50">
           <input type="text"  class="border txtfld" placeholder="password">
        </div>
    </div>
      <div class="float-right forgot">
        Forgot password?
      </div>
      <div>
        <button class="logon">Login</button>
      </div>
      <div class="new">
        New to Cryptocrat?<span>Register Now!</span>
      </div>
    </div>
    </div>
  </div>
</template>
<style>
.user{
padding: 10px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 7px;
    margin-bottom: 7px;
}
.inside {
  position: absolute;
  top:7px;
  left: 7px;
}
.row {
  margin-right:0px !important;
  margin-left:0px !important;
}
.new{
  color:#fff;
  font-size: 16px;
  margin-top:70px;
}
#login .txtfld{
  width:450px;height:40px
}
@media screen and (min-width: 320px) and (max-width: 600px){
  #login .txtfld{
  width:250px;height:40px
}
.forgot {
  float:right !important;
margin-right:10px;
margin-top:10px;
}
}
@media screen and(min-width:700px) and (max-width:2000px){
  .forgot {
  float:right;
margin-right:350px;
margin-top:10px;
}
}
  .forgot {
  float:right;
margin-right:150px;
margin-top:10px;
}
.logon{
  border-radius:50%;
  background-color:#576263;
  border-radius:28px;
  border-width:0px;
  margin-top:50px;
  width:6rem;
  height:2rem;
  color:#fff;
}
.border {
  border-radius: 20px;
}
.overlay {
z-index:10000;
}
.bgimg {
  right:500px;
}
.welcome {
  font-size:35px;
  color:#3191b9;
  margin-left: 50px;
    margin-top: 50px;
}
.mT50 {
  margin-top:50px;
}
.side {
  background-color:#3191b9a8;
  padding:30px;
}
.float-right {
  float:right;
}
.fixed {
  Position:fixed;
}
#login .chain {
  display:none;
}
@media screen and (min-width: 1024px) and (max-width: 1540px) {
#login .chain {
  clear:both;
  display:block;
  opacity: 0.5;
  top: 80px;
  right: 30%;
  z-index: 0;
  height: 545px;
}
}
.h100 {
  height:100vh;
}
.relative {
  position:relative
}
.log {
  font-size:40px;
  color:#fff;
  padding-top: 150px;
}
</style>
