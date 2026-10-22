-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2026 at 10:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `milky`
--

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(1200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`id`, `name`, `description`) VALUES
(1, 'sun', '☀️ About the Sun The Sun is the center of our solar system and the source of almost all the energy on Earth. It is a giant ball of hot gases, mainly hydrogen and helium, and is classified as a yellow dwarf star. 🌟 Basic Facts Type: Star (Yellow Dwarf) Age: About 4.6 billion years Diameter: 1.39 million km (about 109 times wider than Earth) Mass: Contains 99.86% of all the mass in the solar system Temperature: Surface: ~5,500°C Core: ~15 million°C 🔥 What Is the Sun Made Of? The Sun is mainly: Hydrogen (about 74%) Helium (about 24%) Small amounts of oxygen, carbon, nitrogen, and metals ⚡ How the Sun Produces Energy The Sun produces energy through nuclear fusion happening in its core. Hydrogen atoms fuse to form helium Huge amounts of energy are released This energy travels outward and reaches Earth as light and heat 🌓 Layers of the Sun The Sun has several layers: 1. Core Central part Where nuclear fusion happens 2. Radiative Zone Energy moves outward slowly like a “radiation journey” 3. Convective Zone Hot gases rise and cool gases sink — like boiling water 4. Photosphere The visible “surface” of the Sun Produces the sunlight we see 5. Chromosphere Reddish layer above the photosphere'),
(2, 'earth', 'Earth is the third planet from the Sun and the only known planet that supports life. It is part of our solar system and is often called the “Blue Planet” because about 71% of its surface is covered with water. 2. Shape and Structure Earth is not a perfect sphere — it’s slightly flattened at the poles and bulged at the equator, making it an oblate spheroid. It is made up of three main layers: Crust – the thin outer layer where we live. Mantle – a thick layer of hot rocks beneath the crust. Core – made of molten iron and nickel, divided into the outer and inner core. 3. Atmosphere Earth’s atmosphere is made of gases that protect life. The main gases are: Nitrogen (78%) Oxygen (21%) Other gases (1%) – including carbon dioxide and argon. The atmosphere protects us from harmful solar radiation and helps regulate temperature. 4. Water and Land 71% of Earth’s surface is covered by oceans, rivers, and lakes. 29% consists of land, including continents and islands. This balance of water and land is essential for weather patterns and ecosystems. 5. Rotation and Revolution Earth rotates on its axis once every 24 hours, causing day and night. It revolves around the Sun once every 365 days, caus'),
(3, 'venus', '🌟 About Venus Venus is the second planet from the Sun and is often called Earth’s twin because it is almost the same size, mass, and composition as Earth. However, Venus is a very harsh and extreme planet, completely different from Earth. 🔥 Key Facts About Venus 1. Position and Size 2nd planet from the Sun Slightly smaller than Earth Diameter: 12,104 km 2. Brightest Object in the Sky Venus is the brightest planet in the night sky. It is often called the Morning Star or Evening Star because it can be seen just before sunrise and just after sunset. 🌡️ Temperature and Atmosphere Venus is the hottest planet in the solar system. Surface temperature: ~465°C (hot enough to melt lead) Atmosphere is mostly carbon dioxide (CO₂) with thick clouds of sulfuric acid. These clouds trap heat, causing a runaway greenhouse effect. 🌪️ Surface and Environment Surface has: Volcanoes Mountains Crushed rocky plains Pressure on Venus is 90 times Earth’s atmospheric pressure — like being 900 meters underwater. Day on Venus One day on Venus is longer than one year! 1 day = 243 Earth days 1 year = 225 Earth days Rotation Venus rotates backwards (retrograde rotation). Sun rises in the west and sets in the eas'),
(4, 'mercury', '🪙 About Mercury Mercury is the closest planet to the Sun and the smallest planet in our solar system. It is a rocky planet with a surface full of craters and extreme temperatures. 🌟 Basic Facts Position: 1st planet from the Sun Type: Rocky (terrestrial) planet Diameter: 4,880 km (smallest planet) No moons Color: Gray, rocky 🌡️ Temperature Because Mercury is very close to the Sun and has almost no atmosphere: Day temperature: up to 430°C Night temperature: down to –180°C Largest temperature difference of any planet 🌬️ Atmosphere Mercury has an extremely thin atmosphere (almost no air), made of: Oxygen Sodium Hydrogen Helium This thin atmosphere cannot trap heat. 🌑 Surface Features Covered with craters (like the Moon) Has cliffs (scarps) formed as the planet cooled and shrank Rocky, dry, and dusty surface No water in liquid form, but ice exists in some shaded craters at the poles 🌀 Rotation and Orbit Fast orbit: Mercury completes one orbit around the Sun in 88 Earth days Slow rotation: One Mercury day = 59 Earth days This causes long, extremely hot days and very cold nights. 🧲 Magnetic Field Mercury has a weak magnetic field, much weaker than Earth’s 🚀 Exploration Important missions:'),
(5, 'urans', '🌍 About Uranus Uranus is the seventh planet from the Sun and one of the gas giants (also called an ice giant). It is known for its blue-green color and its unique sideways rotation. 🔵 Key Facts About Uranus ✅ 1. Position 7th planet from the Sun Between Saturn and Neptune ✅ 2. Color Blue-green due to methane gas in its atmosphere ✅ 3. Size 4 times wider than Earth Third-largest planet in our Solar System ✅ 4. Rotation (Very Special!) Uranus rotates on its side Tilt = 98° Looks like it is “rolling” around the Sun 🌀 Day & Year One day = 17 hours One year = 84 Earth years 🌬️ Atmosphere Uranus has a thick atmosphere made of: Hydrogen Helium Methane (gives blue color) Very cold winds blow across the planet. ❄️ Temperature One of the coldest planets Temperature can drop to: –224°C 🪐 Rings of Uranus Uranus has 13 thin rings Discovered in 1977 Rings are dark and made of rock & dust 🌑 Moons Uranus has 27 known moons, named mostly after: Shakespeare characters Alexander Pope’s characters Famous moons: Miranda Ariel Umbriel Titania Oberon'),
(6, 'mars', '🔴 About Mars Mars is the fourth planet from the Sun and is often called the Red Planet because of its reddish appearance caused by iron oxide (rust) on its surface. It is a cold, rocky planet and one of the most studied planets in our solar system. 🪐 Basic Facts Position: 4th planet from the Sun Diameter: 6,779 km (about half the size of Earth) Color: Reddish-orange Moons: 2 — Phobos and Deimos ❄️ Temperature & Atmosphere Mars is a cold planet. Average temperature: –63°C Can drop to –125°C at night Thin atmosphere, mostly carbon dioxide (CO₂) Very little oxygen (less than 1%) 🌋 Surface Features Mars has some of the most special features in the solar system: 1. Olympus Mons The largest volcano in the solar system About 3 times taller than Mount Everest 2. Valles Marineris A gigantic canyon system 4,000 km long — about 10 times longer than the Grand Canyon 3. Polar Ice Caps Mars has ice caps made of water ice and frozen carbon dioxide at its poles. 🌫️ Dust Storms Mars has frequent dust storms Sometimes they cover the entire planet These storms make the sky look orange 🚀 Exploration Mars is one of the most explored planets: Rovers: Sojourner, Spirit, Opportunity, Curiosity, Perseveran'),
(10, 'jupiter', '🟠 About Jupiter Jupiter is the fifth planet from the Sun and the largest planet in our solar system. It is a gas giant with no solid surface and is mostly made of hydrogen and helium, similar to a small star. 🌟 Basic Facts Position: 5th planet from the Sun Type: Gas giant Diameter: 139,820 km (11 times bigger than Earth) Mass: The largest planet — 2.5 times the mass of all other planets combined Color: Brownish-orange with white bands 🌬️ Atmosphere Jupiter has a thick and stormy atmosphere made mostly of: Hydrogen (H₂) Helium (He) Its clouds form colorful bands and stripes, created by fast winds. 🌪️ Great Red Spot A huge storm on Jupiter Larger than the Earth itself Has been raging for over 300 years 🪐 Moons of Jupiter Jupiter has 95+ moons (most of any planet). The four biggest moons (Galilean moons): Io – active volcanoes Europa – icy surface, maybe an ocean underneath (possible life) Ganymede – largest moon in the solar system Callisto – heavily cratered 🔭 Rings Jupiter has thin, faint rings, not as bright as Saturn’s. 🌡️ Temperature Cloud-top temperature: around –145°C Inside the planet, temperature increases due to strong pressure 🌪️ Weather and Winds Winds can blow at 600+ km'),
(11, 'saturn', '🪐 About Saturn Saturn is the sixth planet from the Sun and is famous for its beautiful rings. It is a gas giant, like Jupiter, and is mostly made of hydrogen and helium. Saturn is the second-largest planet in the solar system. 🌟 Basic Facts Position: 6th planet from the Sun Type: Gas giant Diameter: 120,536 km (about 9 times wider than Earth) Color: Pale yellow with subtle bands Density: The least dense planet — it could float in water if there were an ocean big enough! 💍 Rings of Saturn Saturn’s rings are the most spectacular in the solar system. They are made of ice, dust, and rock There are 7 main ring groups, named A to G Rings are very thin — only a few hundred meters thick Rings are bright because they reflect sunlight 🌬️ Atmosphere Saturns atmosphere is mostly: Hydrogen (H₂) Helium (He) Clouds form bands, storms, and waves. ⚡ Weather on Saturn Very strong winds, up to 1,800 km/h Violent storms and occasional hexagonal storm pattern at the north pole 🧲 Magnetic Field Strong magnetic field (though weaker than Jupiter’s) Creates auroras at Saturn’s poles 🌡️ Temperature Cloud-top temperature: around –178°C Cold, windy, and harsh environment 🌙 Moons of Saturn Saturn has 146+ moon');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `details`
--
ALTER TABLE `details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
