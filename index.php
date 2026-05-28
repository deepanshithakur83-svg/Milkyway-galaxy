<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Milky Way — Explore Our Galaxy</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <link href="Galaxy.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
</head>
<body>
  <header>
    <div class="logo">
      <div class="dot"></div>
    <div>
        <strong>Milky Way</strong>
        <div class="muted" style="font-size:12px">Explore our home galaxy</div>
      </div>
    </div>
    <nav>
      <div class="menu-icon" id="menuBtn">&#9776; Menu</div>
    </nav>
  </header> 
  <div class="bottom-div" id="bottomDiv">
    <div class="box1">
            <strong>the solar system</strong>
            <li>the sun </li>
            <li>asteriod</li>
            <li>mars</li>
            <li>comets</li>
            <li>mercury</li>
            <li>jupiter</li>
            <li>saturn</li>
            <li>pluto</li>
            <li>venus</li>
            <li>drawf planets</li>
            <li>neptune</li>
            <li>uranus</li>
      </div>
       <div class="box2">
            <strong>the Moon</strong>
            <li>moon Phases </li>
      </div>
         <div class="box3">
            <strong>the Earth</strong>
            <li>Earth phases</li>
      </div>
      <div class="box4">
            <strong>the universe</strong>
            <li>Satrs </li>
            <li>Balck Holes </li>
            <li>Dark Universe </li>
            <li>Galaxies </li>
      </div>
  </div>  
  
<div class="container-fluid">  
  <!-- tsParticles container -->
  <div id="tsparticles"></div>
  <!--whole-img-->
<div class="row">
   <div class="flex1">
          <img src="solarsystem2.png" alt="Card Image" class="image-fluid">
        </div>    
  </div>
<div class="card" id="myCard">  
<h2 class="card__header">Card Header <button id="toggleBtn" class="btn btn-success"><i class="bi bi-backspace"></i></button> </h2>
<div class="card_image"  id="run-image">
<!-- Replace the src with your image. If you don't have an image, the grey background will show. -->
<img src="solarsystem2.png" alt="solar system" id="image-fluid">
</div>
<div class="card__body" id="description">

<p class="card__desc"id="ans">
  <strong>MILKY-WAY GALAXY</strong><br>The Milky Way Galaxy is our home galaxy — a vast,
      spiral-shaped collection of stars, gas, dust, and dark matter that 
      contains our Solar System. It’s just one of billions of galaxies in
      the universe, but it’s incredibly special to us because it’s where
      Earth exists. Here’s a detailed explanation about the Milky Way Galaxy:
      The Milky Way is shaped like a disk with a bulging center and spiral arms. It has several main parts:
        1. Galactic Center – Contains a supermassive black hole called Sagittarius A*.
        2. Spiral Arms – These are regions rich in gas, dust, and young stars.
        3. Galactic Disk – The flat area where most stars, planets, and nebulae exist.
        4. Halo – A spherical region surrounding the galaxy, containing older stars and globular clusters.
        1. Galactic Center – Contains a supermassive black hole called Sagittarius A*.
        2. Spiral Arms – These are regions rich in gas, dust, and young stars.
        3. Galactic Disk – The flat area where most stars, planets, and nebulae exist.
        4. Halo – A spherical region surrounding the galaxy, containing older stars and globular clusters.</p>   
      </div>
</div>

</div>
</div>
<!-- footer -->
  <div class="footer-end">copyright@milky-way Explore
  </div>


 <img src="sun-img.png" class="planet-img sun-img" onclick="sun()">
<img src="mercury-img.png" class="planet-img mercury-img" onclick="mercury()">
<img src="venus-img.png" class="planet-img venus-img" onclick="venus()">
<img src="earthpic.png" class="planet-img earth-img" onclick="earth()">
<img src="mars-img.png" class="planet-img mars-img" onclick="mars()">
<img src="jupiter-img.png" class="planet-img jupiter-img" onclick="jupiter()">
<img src="saturn-img1.png" class="planet-img saturn-img" onclick="saturn()">
<img src="urans.png" class="planet-img urans-img" onclick="urans()">
<img src="neptun.png" class="planet-img neptun-img" onclick="neptun()">
  <!-- Load tsParticles library -->
  <script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="milkyway.js"></script>
</body>
</html>

<?php
inlcude('milkyway.php');
?>
