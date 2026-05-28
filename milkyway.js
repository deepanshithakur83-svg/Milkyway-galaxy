 
 const menuBtn = document.getElementById('menuBtn');
    const bottomDiv = document.getElementById('bottomDiv');

    menuBtn.addEventListener('click', () => {
      bottomDiv.classList.toggle('active');
    });


//  toggle btn
 $(document).ready(function(){
      let moved = false;
      $("#toggleBtn").click(function(){
        if(!moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
      });
    });
    // Initialize tsParticles 
    tsParticles.load("tsparticles", {
      background: {
        color: "red",
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true , mode: "bubble" }
        },
        modes: {
          bubble: { distance: 200, duration: 2, opacity: 0, size: 0, speed: 3 },
          repulse: { distance: 400, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#ffffff" },
        move: { direction: "none", enable: true, outModes: "out", random: true, speed: 0.2 },
        number: { density: { enable: true }, value: 600 },
        opacity: { animation: { enable: true, speed: 5 }, value: { min: 0.3, max: 0.6 } },
        shape: { type: "circle" },
        size: { value: 1 }
      }
    });

    // details

  function earth(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Earth</strong><br>Earth is the third planet from the Sun and the only known planet that supports life. It is part of our solar system and is often called the “Blue Planet” because about 71% of its surface is covered with water.

2. Shape and Structure
Earth is not a perfect sphere — it’s slightly flattened at the poles and bulged at the equator, making it an oblate spheroid. It is made up of three main layers:

Crust – the thin outer layer where we live.

Mantle – a thick layer of hot rocks beneath the crust.

Core – made of molten iron and nickel, divided into the outer and inner core.

3. Atmosphere
Earth’s atmosphere is made of gases that protect life. The main gases are:

Nitrogen (78%)

Oxygen (21%)

Other gases (1%) – including carbon dioxide and argon.

The atmosphere protects us from harmful solar radiation and helps regulate temperature.

4. Water and Land

71% of Earth’s surface is covered by oceans, rivers, and lakes.

29% consists of land, including continents and islands.
This balance of water and land is essential for weather patterns and ecosystems.

5. Rotation and Revolution

Earth rotates on its axis once every 24 hours, causing day and night.

It revolves around the Sun once every 365 days, causing seasons (summer, winter, spring, autumn).

6. Life on Earth
Earth provides all the necessary conditions for life — water, oxygen, suitable temperature, and food. It supports millions of species of plants, animals, and microorganisms.

7. Natural Resources
Earth gives us many resources like minerals, forests, water, air, and fertile soil. It’s our duty to use them wisely and protect the environment from pollution.

8. Importance of Protecting Earth
Due to global warming, deforestation, and pollution, our planet is facing serious challenges. We must take care of Earth by planting trees, saving water, and reducing waste to ensure a better future.`
document.getElementById('run-image').innerHTML=`<img src="earthpic.png " height="200px" width="250px" style="position:relative; left:50px;"">`;
}
function sun(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Sun</strong><br>☀️ About the Sun

The Sun is the center of our solar system and the source of almost all the energy on Earth. It is a giant ball of hot gases, mainly hydrogen and helium, and is classified as a yellow dwarf star.

🌟 Basic Facts

Type: Star (Yellow Dwarf)

Age: About 4.6 billion years

Diameter: 1.39 million km (about 109 times wider than Earth)

Mass: Contains 99.86% of all the mass in the solar system

Temperature:

Surface: ~5,500°C

Core: ~15 million°C

🔥 What Is the Sun Made Of?

The Sun is mainly:

Hydrogen (about 74%)

Helium (about 24%)

Small amounts of oxygen, carbon, nitrogen, and metals

⚡ How the Sun Produces Energy

The Sun produces energy through nuclear fusion happening in its core.

Hydrogen atoms fuse to form helium

Huge amounts of energy are released

This energy travels outward and reaches Earth as light and heat

🌓 Layers of the Sun

The Sun has several layers:

1. Core

Central part

Where nuclear fusion happens

2. Radiative Zone

Energy moves outward slowly like a “radiation journey”

3. Convective Zone

Hot gases rise and cool gases sink — like boiling water

4. Photosphere

The visible “surface” of the Sun

Produces the sunlight we see

5. Chromosphere

Reddish layer above the photosphere

6. Corona

Outer atmosphere

Very hot and visible during a solar eclipse

🌞 Solar Features
🔵 Sunspots

Cooler, darker patches on the Sun’s surface

Related to magnetic activity

🌋 Solar Flares

Explosions of energy

Can affect satellites and radio signals

🌬️ Solar Wind

Stream of charged particles

Creates auroras (northern and southern lights)

🌍 Importance of the Sun

The Sun:

Provides light and heat

Supports life on Earth

Drives weather and climate

Helps plants grow through photosynthesis

Keeps planets in orbit with its gravity

⭐ Interesting Facts

Light from the Sun takes 8 minutes and 20 seconds to reach Earth

The Sun rotates, but slower at the poles and faster at the equator

It will shine for about 5 billion more years

The Sun is a medium-sized star, not the biggest`
document.getElementById('run-image').innerHTML=`<img src="sun-img.png " height="160px" width="270px" style="position:relative; left:30px;">`;
}
  function mercury(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Mercury</strong><br>🪙 About Mercury

Mercury is the closest planet to the Sun and the smallest planet in our solar system. It is a rocky planet with a surface full of craters and extreme temperatures.

🌟 Basic Facts

Position: 1st planet from the Sun

Type: Rocky (terrestrial) planet

Diameter: 4,880 km (smallest planet)

No moons

Color: Gray, rocky

🌡️ Temperature

Because Mercury is very close to the Sun and has almost no atmosphere:

Day temperature: up to 430°C

Night temperature: down to –180°C

Largest temperature difference of any planet

🌬️ Atmosphere

Mercury has an extremely thin atmosphere (almost no air), made of:

Oxygen

Sodium

Hydrogen

Helium

This thin atmosphere cannot trap heat.

🌑 Surface Features

Covered with craters (like the Moon)

Has cliffs (scarps) formed as the planet cooled and shrank

Rocky, dry, and dusty surface

No water in liquid form, but ice exists in some shaded craters at the poles

🌀 Rotation and Orbit

Fast orbit: Mercury completes one orbit around the Sun in 88 Earth days

Slow rotation: One Mercury day = 59 Earth days

This causes long, extremely hot days and very cold nights.

🧲 Magnetic Field

Mercury has a weak magnetic field, much weaker than Earth’s

🚀 Exploration

Important missions:

Mariner 10 (first close-up pictures)

MESSENGER (orbited Mercury, studied its surface, core, and magnetic field)

BepiColombo (current mission, arriving in 2025–2030s)

⭐ Interesting Facts

Mercury is shrinking slowly as it cools

You could see the Sun rise, set, and rise again in one Mercury day due to its rotation

Mercury’s core takes up 85% of the planet’s radius

Despite being closest to the Sun, Mercury is not the hottest planet — Venus is hotter`
document.getElementById('run-image').innerHTML=`<img src="mercury-img.png " height="190px" width="300px" style="position:relative; left:30px;"">`;
}
  function venus(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Venus</strong><br>🌟 About Venus

Venus is the second planet from the Sun and is often called Earth’s twin because it is almost the same size, mass, and composition as Earth. However, Venus is a very harsh and extreme planet, completely different from Earth.

🔥 Key Facts About Venus
1. Position and Size

2nd planet from the Sun

Slightly smaller than Earth

Diameter: 12,104 km

2. Brightest Object in the Sky

Venus is the brightest planet in the night sky.

It is often called the Morning Star or Evening Star because it can be seen just before sunrise and just after sunset.

🌡️ Temperature and Atmosphere

Venus is the hottest planet in the solar system.

Surface temperature: ~465°C (hot enough to melt lead)

Atmosphere is mostly carbon dioxide (CO₂) with thick clouds of sulfuric acid.

These clouds trap heat, causing a runaway greenhouse effect.

🌪️ Surface and Environment

Surface has:

Volcanoes

Mountains

Crushed rocky plains

Pressure on Venus is 90 times Earth’s atmospheric pressure — like being 900 meters underwater.

Day on Venus

One day on Venus is longer than one year!

1 day = 243 Earth days

1 year = 225 Earth days

Rotation

Venus rotates backwards (retrograde rotation).

Sun rises in the west and sets in the east, opposite of Earth.`
document.getElementById('run-image').innerHTML=`<img src="venus-img.png " height="190px" width="300px" style="position:relative; left:30px;"">`;
}
function mars(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Mars</strong><br>🔴 About Mars

Mars is the fourth planet from the Sun and is often called the Red Planet because of its reddish appearance caused by iron oxide (rust) on its surface. It is a cold, rocky planet and one of the most studied planets in our solar system.

🪐 Basic Facts

Position: 4th planet from the Sun

Diameter: 6,779 km (about half the size of Earth)

Color: Reddish-orange

Moons: 2 — Phobos and Deimos

❄️ Temperature & Atmosphere

Mars is a cold planet.

Average temperature: –63°C

Can drop to –125°C at night

Thin atmosphere, mostly carbon dioxide (CO₂)

Very little oxygen (less than 1%)

🌋 Surface Features

Mars has some of the most special features in the solar system:

1. Olympus Mons

The largest volcano in the solar system

About 3 times taller than Mount Everest

2. Valles Marineris

A gigantic canyon system

4,000 km long — about 10 times longer than the Grand Canyon

3. Polar Ice Caps

Mars has ice caps made of water ice and frozen carbon dioxide at its poles.

🌫️ Dust Storms

Mars has frequent dust storms

Sometimes they cover the entire planet

These storms make the sky look orange

🚀 Exploration

Mars is one of the most explored planets:

Rovers: Sojourner, Spirit, Opportunity, Curiosity, Perseverance

Orbiters: Mars Odyssey, MAVEN, Mars Express

Scientists study Mars for signs of past water and life.

🌊 Water on Mars

No flowing water now

But many signs show that Mars once had rivers, lakes, and maybe oceans

Today water exists as ice under the surface

👩‍🚀 Future Human Missions

NASA and SpaceX plan to send humans to Mars in the future

Mars could possibly support life with advanced technology and habitats

⭐ Interesting Facts

A day on Mars (sol): 24.6 hours

A year on Mars: 687 Earth days

Gravity is 1/3 of Earth

You would weigh much less on Mars!`
document.getElementById('run-image').innerHTML=`<img src="mars-img.png " height="190px" width="250px" style="position:relative; left:30px;"">`;
}
function jupiter(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Jupiter</strong><br>🟠 About Jupiter

Jupiter is the fifth planet from the Sun and the largest planet in our solar system. It is a gas giant with no solid surface and is mostly made of hydrogen and helium, similar to a small star.

🌟 Basic Facts

Position: 5th planet from the Sun

Type: Gas giant

Diameter: 139,820 km (11 times bigger than Earth)

Mass: The largest planet — 2.5 times the mass of all other planets combined

Color: Brownish-orange with white bands

🌬️ Atmosphere

Jupiter has a thick and stormy atmosphere made mostly of:

Hydrogen (H₂)

Helium (He)

Its clouds form colorful bands and stripes, created by fast winds.

🌪️ Great Red Spot

A huge storm on Jupiter

Larger than the Earth itself

Has been raging for over 300 years

🪐 Moons of Jupiter

Jupiter has 95+ moons (most of any planet).

The four biggest moons (Galilean moons):

Io – active volcanoes

Europa – icy surface, maybe an ocean underneath (possible life)

Ganymede – largest moon in the solar system

Callisto – heavily cratered

🔭 Rings

Jupiter has thin, faint rings, not as bright as Saturn’s.

🌡️ Temperature

Cloud-top temperature: around –145°C

Inside the planet, temperature increases due to strong pressure

🌪️ Weather and Winds

Winds can blow at 600+ km/h

Many storms, lightning, and fast-moving clouds

🚀 Exploration

Major missions that studied Jupiter:

Voyager 1 & 2

Galileo spacecraft

Juno (currently studying Jupiter’s atmosphere and magnetic field)

🧲 Magnetic Field

Jupiter has the strongest magnetic field of any planet

20,000 times stronger than Earth’s

Creates huge radiation belts

⭐ Interesting Facts

A day on Jupiter: 9 hours 56 minutes (fastest rotation of all planets)

A year on Jupiter: 12 Earth years

Jupiter is so big it could fit 1,300 Earths inside it

It protects Earth by pulling comets and asteroids with its strong gravity`
document.getElementById('run-image').innerHTML=`<img src="jupiter-img.png " height="190px" width="250px" style="position:relative; left:30px;"">`;
}
function saturn(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Saturn</strong><br>🪐 About Saturn

Saturn is the sixth planet from the Sun and is famous for its beautiful rings. It is a gas giant, like Jupiter, and is mostly made of hydrogen and helium. Saturn is the second-largest planet in the solar system.

🌟 Basic Facts

Position: 6th planet from the Sun

Type: Gas giant

Diameter: 120,536 km (about 9 times wider than Earth)

Color: Pale yellow with subtle bands

Density: The least dense planet — it could float in water if there were an ocean big enough!

💍 Rings of Saturn

Saturn’s rings are the most spectacular in the solar system.

They are made of ice, dust, and rock

There are 7 main ring groups, named A to G

Rings are very thin — only a few hundred meters thick

Rings are bright because they reflect sunlight

🌬️ Atmosphere

Saturn's atmosphere is mostly:

Hydrogen (H₂)

Helium (He)

Clouds form bands, storms, and waves.

⚡ Weather on Saturn

Very strong winds, up to 1,800 km/h

Violent storms and occasional hexagonal storm pattern at the north pole

🧲 Magnetic Field

Strong magnetic field (though weaker than Jupiter’s)

Creates auroras at Saturn’s poles

🌡️ Temperature

Cloud-top temperature: around –178°C

Cold, windy, and harsh environment

🌙 Moons of Saturn

Saturn has 146+ moons (one of the highest numbers).

Most famous moons:

1. Titan

Second-largest moon in the solar system

Has a thick atmosphere

Lakes and rivers of liquid methane

Scientists think Titan could support future life research

2. Enceladus

Small icy moon

Shoots water vapor geysers

Evidence of an underground ocean → possible microbial life

🚀 Exploration

Major Saturn missions:

Voyager 1 & 2

Cassini mission (studied Saturn from 2004–2017)

Cassini dropped Huygens lander on Titan

⭐ Interesting Facts

A day on Saturn: 10.7 hours

A year on Saturn: 29 Earth years

Saturn could fit 760 Earths inside

Its rings stretch more than 280,000 km, but are extremely thin`
document.getElementById('run-image').innerHTML=`<img src="saturn-img1.png " height="190px" width="250px" style="position:relative; left:30px;"">`;
}
function neptun(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Neptun</strong><br>🔵 About Neptune

Neptune is the eighth and farthest planet from the Sun. It is an ice giant, like Uranus, and is known for its deep blue color and extremely strong winds — the fastest in the solar system.

🌟 Basic Facts

Position: 8th planet from the Sun

Type: Ice giant

Diameter: 49,244 km (about 4 times wider than Earth)

Color: Deep blue

Discovery: 1846 (first planet found using math, not a telescope)

🌬️ Atmosphere

Neptune’s atmosphere contains:

Hydrogen

Helium

Methane (gives the blue color)

🌡️ Temperature

Extremely cold

Average temperature: –214°C

🌪️ Weather and Winds

Neptune has the strongest winds in the solar system:

Wind speed: up to 2,100 km/h

Giant storms and dark spots (like Jupiter's Great Red Spot)

☁️ Great Dark Spot

A huge storm system on Neptune

First seen by Voyager 2 in 1989

Similar to Jupiter’s storms but dark in color

🪐 Rings of Neptune

Neptune has 5 main rings

Rings are faint and made of dust and ice

Some parts of the rings are thicker, called ring arcs

🌙 Moons of Neptune

Neptune has 14 known moons.

Most famous moon:
Triton

Largest moon of Neptune

Has geysers that shoot nitrogen gas

Orbits Neptune backwards, meaning it may be a captured object

Very cold: around –235°C

🧲 Magnetic Field

Strong and tilted compared to the planet’s rotation

Creates auroras in the atmosphere

🚀 Exploration

Only Voyager 2 (1989) has visited Neptune

No spacecraft has orbited Neptune yet

Future missions are being studied

⭐ Interesting Facts

A day on Neptune: 16 hours

A year on Neptune: 165 Earth years

Neptune is not visible to the naked eye from Earth

Strong winds make it the most dynamic outer planet

Neptune is named after the Roman god of the sea`
document.getElementById('run-image').innerHTML=`<img src="neptun.png " height="190px" width="300px" style="position:relative; left:30px;"">`;
}
function urans(){
    
    let moved = false;
    
        if(moved){
          $("#myCard").animate({left: "-450px"}, 600);
          moved = true;
        } else {
          $("#myCard").animate({left: "0px"}, 600);
          moved = false;
        }
    
document.getElementById('ans').innerHTML=`<strong>Urans</strong><br>🌍 About Uranus

Uranus is the seventh planet from the Sun and one of the gas giants (also called an ice giant).
It is known for its blue-green color and its unique sideways rotation.

🔵 Key Facts About Uranus
✅ 1. Position

7th planet from the Sun

Between Saturn and Neptune

✅ 2. Color

Blue-green due to methane gas in its atmosphere

✅ 3. Size

4 times wider than Earth

Third-largest planet in our Solar System

✅ 4. Rotation (Very Special!)

Uranus rotates on its side

Tilt = 98°

Looks like it is “rolling” around the Sun

🌀 Day & Year

One day = 17 hours

One year = 84 Earth years

🌬️ Atmosphere

Uranus has a thick atmosphere made of:

Hydrogen

Helium

Methane (gives blue color)

Very cold winds blow across the planet.

❄️ Temperature

One of the coldest planets

Temperature can drop to: –224°C

🪐 Rings of Uranus

Uranus has 13 thin rings

Discovered in 1977

Rings are dark and made of rock & dust

🌑 Moons

Uranus has 27 known moons, named mostly after:

Shakespeare characters

Alexander Pope’s characters

Famous moons:

Miranda

Ariel

Umbriel

Titania

Oberon`
document.getElementById('run-image').innerHTML=`<img src="urans.png " height="190px" width="300px" style="position:relative; left:30px;"">`;
}


 

