<template>
  <div>
    <div class="row h100 relative">

    <div class="col-md-12 col-lg-8 col-s-12 content" id="content">
      <b-navbar toggleable="lg" sticky="true">
        <b-navbar-brand href="#"> <img src="../assets/logo.png" class="logosize" /></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      </b-navbar>

      <b-collapse is-nav id="nav_collapse">
      <b-nav  vertical class="w-25">
        <b-nav-item >Blog</b-nav-item>
        <b-nav-item href="/team">Team</b-nav-item>
        <b-nav-item>F.A.Q</b-nav-item>
        <b-nav-item >News</b-nav-item>
        <b-nav-item >Coins</b-nav-item>
        <b-nav-item >About</b-nav-item>
        <b-nav-item href="/contact">Contact</b-nav-item>
        <b-nav-item >Login/Register</b-nav-item>
      </b-nav>
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
    </b-collapse>

      <div class="float-right"><img src="../assets/bg image.png" class="fixed chain" /></div>

      <b-jumbotron  id="brand" bg-variant="transparent" text-variant="white" header="CryptoCrat" >
      <div class="vrline inline"></div>
      <p class="inline p15">A transparent,reliable blockchain database which is accessible to everyone.An organisation that also provides paid consultancy service based on highly efficient technical analysis.</p>
      <div class="vrline inline"></div>
      </b-jumbotron>
      <div class="pL">
        <img src="../assets/playstore.svg" class="storeicon"/>
        <div id="playstore" class="inline">
        <p>Click on thge icon <br> to download our app now!!</p>
        </div>
        </div>

    </div>
    <div id="nav" class="col-lg-4 stacknav pT50">
    <div class="mT10">
    <div class="hrbar"></div>
    <div class="clear">
    <b-nav  vertical class="pR alignR">
        <b-nav-item >Blog</b-nav-item>
        <b-nav-item href="/team">Team</b-nav-item>
        <b-nav-item>F.A.Q</b-nav-item>
        <b-nav-item >News</b-nav-item>
        <b-nav-item >Coins</b-nav-item>
        <b-nav-item >About</b-nav-item>
        <b-nav-item href="/contact">Contact</b-nav-item>
      </b-nav>
      </div>
    <div class="hrbar"></div>
    <button class="mT30 login pull-right"> <span class="logintxt">LOGIN/REGISTER</span></button>
    </div>
    </div>
    </div>

  </div>
</template>
<style>
.content {
  background-color:#8a8b8b;
}
.pT50 {
  padding-top:50px;
}
.brand {
  font-size:32px;
  color:#fff;
}
.stacknav {
  background-color:#3191b9;
}
.pL {
  padding-left:1.5rem;
}
.pR {
  padding-right:1rem;
}
#nav a {
  color:#fff;
}
.alignR {
  text-align:right;
}
.p50 {
  padding-top:50px;
}
#nav {
  display:block;
}
.relative {
  position:relative;
}
@media screen and (max-width: 768px) {
#nav {
clear:both;
display:none;
}
}
.hrbar {
  content:"";
  height:5px;
  width:90px;
  margin-right:1.5rem;
  float:right;
  background-color:#fff;
}
.clear {
  clear:both;
}
.h100 {
  height:100vh;
}
.mT10 {
  margin-top:10%
}
.logosize {
  height:50px;
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
  top: auto;
  right: 15%;
  z-index: 1;
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
#nav .nav-link {
    display: block;
    padding: 1rem;
}
.mT30 {
  margin-top:30px;
}
.login {
  background-color:#97a1a2;
  border-radius:28px;
  border-color:#97a1a2;
  margin-right:-50px;
}
.pull-right {
  float:right;
}
#nav_collapse a {
  color:#fff;
}
#nav_collapse a:hover {
  color:#3191b9;
}
.logintxt {
  color:#fff;
}
#brand p {
  max-width:390px;
}
.vrline {
  content:"";
  height:90px;
  width:5px;
  background-color:#fff;
  opacity:0.7;
}
.inline {
  display:inline-block;
}
.p15 {
  padding:15px;
}
.storeicon {
  height:50px;
  width:50px;
}
#playstore p {
  text-decoration: underline;
  text-transform: uppercase;
}
</style>
