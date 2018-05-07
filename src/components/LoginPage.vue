<template>
  <div>
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
    <div class="mT10">
    <div class="clear">
      </div>
      <div class="relative">
      <input type="text">
      <input type="text">
      </div>
    </div>
    </div>
    </div>
  </div>
</template>
<style>
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
.side {
  background-color:#3191b9;
  opacity: 0.8;
}
.float-right {
  float:right;
}
.fixed {
  Position:fixed;
}
.chain {
  display:none;
}
@media screen and (min-width: 1024px) and (max-width: 1540px) {
.chain {
  clear:both;
  display:block;
  opacity: 0.5;
  top: 80px;
  right: 30%;
  z-index: 0;
  height: 545px;
}
}
@media screen and (min-width: 370px) and (max-width: 500px) {
.chain {
  clear:both;
  display:block;
  opacity: 0.5;
  top: auto;
  right: -70%;
  z-index: 1;
}
}
@media screen and (min-width: 500px) and (max-width: 800px) {
.chain {
  clear:both;
  display:block;
  opacity: 0.5;
  top: auto;
  right: -30%;
  z-index: 1;
}
}
.h100 {
  height:97vh;
}
.relative {
  position:relative
}
</style>
