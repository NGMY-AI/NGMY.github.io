import 'dart:convert';

import 'package:flutter/services.dart';

/// Loads and caches the bundled open-data files (periodic table, sky, plates).
class NgmyPlayData {
  static final Map<String, Future<dynamic>> _cache = {};

  static Future<dynamic> json(String name) => _cache[name] ??= rootBundle.loadString('assets/data/$name.json').then(jsonDecode);
}

/// What happens when two elements meet. Keys are sorted symbols joined by '+'.
const Map<String, (String, String)> kCompounds = {
  'H+O': ('Water (H2O)', 'Two hydrogens hold one oxygen. Every living thing needs it.'),
  'Cl+Na': ('Table salt (NaCl)', 'A soft metal and a poisonous gas join into the salt on your food.'),
  'C+O': ('Carbon dioxide (CO2)', 'What you breathe out and plants breathe in.'),
  'Fe+O': ('Rust (iron oxide)', 'Iron slowly joins with oxygen from the air.'),
  'Cl+H': ('Hydrochloric acid (HCl)', 'Strong acid. Your stomach makes a weak version to digest food.'),
  'H+N': ('Ammonia (NH3)', 'Used in cleaners and to make plant food.'),
  'C+H': ('Methane (CH4)', 'The gas in natural gas, and what cows burp.'),
  'Ca+O': ('Quicklime (CaO)', 'Made by heating limestone. Used in cement.'),
  'Mg+O': ('Magnesia (MgO)', 'What is left after magnesium burns with a bright white flame.'),
  'Na+O': ('Sodium oxide (Na2O)', 'Reacts strongly with water to make lye.'),
  'Al+O': ('Alumina (Al2O3)', 'Rubies and sapphires are made of this.'),
  'O+Si': ('Silica (SiO2)', 'Sand and quartz. Glass is made from it.'),
  'H+H': ('Hydrogen gas (H2)', 'The lightest gas. Two atoms hold hands.'),
  'O+O': ('Oxygen gas (O2)', 'The air you breathe is one fifth of this.'),
  'N+N': ('Nitrogen gas (N2)', 'Four fifths of the air around you.'),
  'Ag+S': ('Tarnish (silver sulfide)', 'Why silver spoons go dark.'),
  'Cu+O': ('Copper oxide', 'The green-black coat on old copper.'),
  'Cl+K': ('Potassium chloride (KCl)', 'A salt substitute. Your nerves use potassium.'),
  'C+C': ('Diamond or graphite', 'Pure carbon. Pencils and diamonds are the same atom, joined differently.'),
  'F+H': ('Hydrogen fluoride (HF)', 'Very dangerous acid. Fluoride in toothpaste is a safe cousin.'),
  'O+S': ('Sulfur dioxide (SO2)', 'The smell of a struck match and of volcanoes.'),
};

class PlayDino {
  const PlayDino(this.name, this.when, this.mya, this.lengthM, this.diet, this.fact, this.emoji);
  final String name;
  final String when; // Triassic, Jurassic, Cretaceous
  final double mya; // million years ago
  final double lengthM;
  final String diet; // meat, plants, fish
  final String fact;
  final String emoji;
}

const List<PlayDino> kDinos = [
  PlayDino('Coelophysis', 'Triassic', 225, 3, 'meat', 'One of the first dinosaurs. Light and fast, hunted in groups.', '🦎'),
  PlayDino('Plateosaurus', 'Triassic', 214, 8, 'plants', 'A long-necked plant eater from long before the giants.', '🦕'),
  PlayDino('Dilophosaurus', 'Jurassic', 193, 7, 'meat', 'Had two thin crests on its head.', '🦖'),
  PlayDino('Stegosaurus', 'Jurassic', 150, 9, 'plants', 'Big plates on its back and four spikes on its tail. Its brain was the size of a lime.', '🦕'),
  PlayDino('Allosaurus', 'Jurassic', 150, 9, 'meat', 'The top hunter of its time, with a mouth full of curved teeth.', '🦖'),
  PlayDino('Diplodocus', 'Jurassic', 150, 26, 'plants', 'As long as three buses, with a whip-like tail.', '🦕'),
  PlayDino('Brachiosaurus', 'Jurassic', 150, 22, 'plants', 'Taller than a house. It could reach leaves 12 metres up.', '🦕'),
  PlayDino('Archaeopteryx', 'Jurassic', 150, 0.5, 'meat', 'A feathered dinosaur, the link between dinosaurs and birds.', '🪶'),
  PlayDino('Compsognathus', 'Jurassic', 150, 1, 'meat', 'About the size of a chicken.', '🐓'),
  PlayDino('Iguanodon', 'Cretaceous', 125, 10, 'plants', 'One of the first dinosaurs ever named, with a thumb spike.', '🦕'),
  PlayDino('Spinosaurus', 'Cretaceous', 95, 14, 'fish', 'Longer than T. rex, with a sail on its back. It swam and caught fish.', '🐊'),
  PlayDino('Argentinosaurus', 'Cretaceous', 95, 35, 'plants', 'Among the heaviest land animals ever: about 70 tonnes.', '🦕'),
  PlayDino('Pteranodon', 'Cretaceous', 85, 6, 'fish', 'Not a dinosaur but a flying reptile, with a 6 metre wingspan.', '🦅'),
  PlayDino('Mosasaurus', 'Cretaceous', 80, 15, 'fish', 'A giant sea reptile, not a dinosaur, that ruled the oceans.', '🐋'),
  PlayDino('Parasaurolophus', 'Cretaceous', 76, 10, 'plants', 'Its long hollow crest worked like a trumpet.', '🦕'),
  PlayDino('Velociraptor', 'Cretaceous', 75, 2, 'meat', 'Only turkey-sized and covered in feathers. Much smaller than in the films.', '🦖'),
  PlayDino('Gigantoraptor', 'Cretaceous', 70, 8, 'plants', 'A giant feathered bird-like dinosaur with no teeth.', '🦃'),
  PlayDino('Ankylosaurus', 'Cretaceous', 68, 7, 'plants', 'Armoured like a tank, with a club on its tail.', '🐢'),
  PlayDino('Triceratops', 'Cretaceous', 68, 9, 'plants', 'Three horns and a big bony frill. Its skull was over 2 metres.', '🦏'),
  PlayDino('Tyrannosaurus rex', 'Cretaceous', 67, 12, 'meat', 'One of the strongest bites ever: around 6 tonnes of force.', '🦖'),
];

class PlayAnimal {
  const PlayAnimal(this.name, this.emoji, this.group, this.diet, this.kmh, this.kg, this.lifeYears, this.home, this.fact);
  final String name;
  final String emoji;
  final String group; // mammal, bird, reptile, fish, insect, amphibian
  final String diet; // plants, meat, both
  final double kmh;
  final double kg;
  final double lifeYears;
  final String home;
  final String fact;
}

const List<PlayAnimal> kAnimals = [
  PlayAnimal('Cheetah', '🐆', 'mammal', 'meat', 110, 50, 12, 'African grassland', 'The fastest land animal. It speeds up from 0 to 100 km/h in about 3 seconds.'),
  PlayAnimal('Lion', '🦁', 'mammal', 'meat', 80, 190, 14, 'African grassland', 'Lions sleep up to 20 hours a day and live in family groups called prides.'),
  PlayAnimal('Elephant', '🐘', 'mammal', 'plants', 40, 5400, 65, 'Africa and Asia', 'The biggest land animal. It can smell water from 20 km away.'),
  PlayAnimal('Giraffe', '🦒', 'mammal', 'plants', 60, 1200, 25, 'African savanna', 'The tallest animal, with the same number of neck bones as you: seven.'),
  PlayAnimal('Zebra', '🦓', 'mammal', 'plants', 65, 350, 25, 'African grassland', 'No two zebras have the same stripes.'),
  PlayAnimal('Hippo', '🦛', 'mammal', 'plants', 30, 1500, 40, 'African rivers', 'Makes pink sweat that works like sunscreen.'),
  PlayAnimal('Gorilla', '🦍', 'mammal', 'plants', 40, 160, 40, 'African forests', 'Gentle and strong. Shares about 98 percent of its DNA with us.'),
  PlayAnimal('Monkey', '🐒', 'mammal', 'both', 50, 8, 25, 'Forests', 'Uses its tail like a fifth hand.'),
  PlayAnimal('Camel', '🐪', 'mammal', 'plants', 65, 600, 40, 'Deserts', 'Its hump stores fat, not water, and it can drink 100 litres in minutes.'),
  PlayAnimal('Horse', '🐴', 'mammal', 'plants', 88, 500, 28, 'Everywhere', 'Can sleep standing up, and run soon after it is born.'),
  PlayAnimal('Dog', '🐕', 'mammal', 'both', 30, 20, 13, 'With people', 'Smells up to 100,000 times better than we do.'),
  PlayAnimal('Cat', '🐈', 'mammal', 'meat', 48, 4, 15, 'With people', 'Sleeps about two thirds of its life and purrs when happy.'),
  PlayAnimal('Bear', '🐻', 'mammal', 'both', 55, 300, 25, 'Forests', 'Some bears sleep through winter without eating.'),
  PlayAnimal('Polar bear', '🐻', 'mammal', 'meat', 40, 450, 25, 'The Arctic', 'Its fur is clear, not white, and its skin is black to soak up heat.'),
  PlayAnimal('Kangaroo', '🦘', 'mammal', 'plants', 70, 66, 20, 'Australia', 'Can jump 9 metres in one hop, but cannot walk backwards.'),
  PlayAnimal('Bat', '🦇', 'mammal', 'both', 50, 0.05, 20, 'Caves and trees', 'The only mammal that really flies. It finds food by echo.'),
  PlayAnimal('Blue whale', '🐋', 'mammal', 'meat', 40, 150000, 80, 'All oceans', 'The biggest animal ever. Its heart is as big as a small car.'),
  PlayAnimal('Dolphin', '🐬', 'mammal', 'meat', 60, 200, 40, 'Oceans', 'Calls each other by name using whistles.'),
  PlayAnimal('Rabbit', '🐇', 'mammal', 'plants', 56, 2, 9, 'Fields', 'Its teeth never stop growing.'),
  PlayAnimal('Mouse', '🐁', 'mammal', 'both', 13, 0.02, 2, 'Everywhere', 'Can squeeze through a gap the size of a pencil.'),
  PlayAnimal('Eagle', '🦅', 'bird', 'meat', 160, 5, 25, 'Mountains', 'Sees prey from 3 km away.'),
  PlayAnimal('Falcon', '🦅', 'bird', 'meat', 389, 1, 15, 'Everywhere', 'The peregrine falcon dives at 389 km/h, the fastest animal of all.'),
  PlayAnimal('Ostrich', '🐦', 'bird', 'both', 70, 120, 40, 'African grassland', 'The biggest bird. It cannot fly but is the fastest on two legs.'),
  PlayAnimal('Penguin', '🐧', 'bird', 'fish', 36, 25, 20, 'Antarctica', 'A bird that swims instead of flies. Dads keep the egg warm on their feet.'),
  PlayAnimal('Owl', '🦉', 'bird', 'meat', 80, 1, 20, 'Forests', 'Flies without a sound and turns its head almost all the way round.'),
  PlayAnimal('Flamingo', '🦩', 'bird', 'both', 60, 3, 30, 'Lakes', 'Pink from the tiny shrimp it eats.'),
  PlayAnimal('Parrot', '🦜', 'bird', 'plants', 50, 1, 50, 'Tropical forests', 'Can copy human words, and some live for 80 years.'),
  PlayAnimal('Hummingbird', '🐦', 'bird', 'both', 55, 0.005, 5, 'Americas', 'Beats its wings 80 times a second and can fly backwards.'),
  PlayAnimal('Duck', '🦆', 'bird', 'both', 70, 1, 10, 'Ponds', 'Its feathers are waterproof.'),
  PlayAnimal('Crocodile', '🐊', 'reptile', 'meat', 35, 500, 70, 'African rivers', 'Has the strongest bite of any animal alive.'),
  PlayAnimal('Snake', '🐍', 'reptile', 'meat', 20, 10, 20, 'Everywhere', 'Smells with its tongue and has no ears.'),
  PlayAnimal('Turtle', '🐢', 'reptile', 'both', 1, 200, 100, 'Land and sea', 'Some tortoises live over 150 years.'),
  PlayAnimal('Chameleon', '🦎', 'reptile', 'meat', 33, 0.2, 7, 'Africa', 'Its eyes move on their own, and its tongue is as long as its body.'),
  PlayAnimal('Komodo dragon', '🦎', 'reptile', 'meat', 20, 70, 30, 'Indonesia', 'The biggest lizard, with venom in its bite.'),
  PlayAnimal('Frog', '🐸', 'amphibian', 'meat', 15, 0.05, 10, 'Ponds', 'Starts life as a tadpole with a tail and gills.'),
  PlayAnimal('Shark', '🦈', 'fish', 'meat', 50, 1000, 30, 'Oceans', 'Older than trees. Its skeleton is soft cartilage, not bone.'),
  PlayAnimal('Goldfish', '🐟', 'fish', 'both', 5, 0.5, 10, 'Ponds', 'Remembers things for months.'),
  PlayAnimal('Seahorse', '🐠', 'fish', 'meat', 0.1, 0.02, 4, 'Seagrass', 'The dad carries the babies.'),
  PlayAnimal('Octopus', '🐙', 'fish', 'meat', 40, 15, 3, 'Oceans', 'Has three hearts and blue blood, and can squeeze through any gap.'),
  PlayAnimal('Butterfly', '🦋', 'insect', 'plants', 19, 0.001, 1, 'Everywhere', 'Tastes with its feet. Starts as a caterpillar.'),
  PlayAnimal('Bee', '🐝', 'insect', 'plants', 25, 0.0001, 1, 'Everywhere', 'Dances to tell friends where the flowers are.'),
  PlayAnimal('Ant', '🐜', 'insect', 'both', 2, 0.00003, 3, 'Everywhere', 'Can carry 50 times its own weight.'),
  PlayAnimal('Spider', '🕷️', 'insect', 'meat', 2, 0.001, 2, 'Everywhere', 'Not an insect: it has eight legs.'),
];

class PlayBodyPart {
  const PlayBodyPart(this.name, this.emoji, this.fx, this.fy, this.fact, this.system);
  final String name;
  final String emoji;
  final double fx; // 0..1 across the body outline
  final double fy; // 0..1 down
  final String fact;
  final String system;
}

const List<PlayBodyPart> kBody = [
  PlayBodyPart('Brain', '🧠', 0.5, 0.07, 'Weighs about 1.4 kg and uses a fifth of your energy. It has about 86 billion nerve cells.', 'Nerves'),
  PlayBodyPart('Eyes', '👀', 0.5, 0.115, 'Each eye sends a picture upside down to the brain, which flips it.', 'Senses'),
  PlayBodyPart('Lungs', '🫁', 0.42, 0.27, 'You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.', 'Breathing'),
  PlayBodyPart('Heart', '🫀', 0.56, 0.3, 'About the size of your fist. It beats around 100,000 times a day.', 'Blood'),
  PlayBodyPart('Liver', '🟤', 0.4, 0.39, 'Cleans your blood. It can grow back after damage.', 'Digestion'),
  PlayBodyPart('Stomach', '🥣', 0.6, 0.4, 'Acid inside could dissolve metal, but a thick layer of mucus protects it.', 'Digestion'),
  PlayBodyPart('Kidneys', '🫘', 0.5, 0.46, 'Clean about 180 litres of blood every day.', 'Cleaning'),
  PlayBodyPart('Intestines', '🌀', 0.5, 0.54, 'Your small intestine is about 6 metres long. Food stays for hours.', 'Digestion'),
  PlayBodyPart('Muscles', '💪', 0.2, 0.33, 'You have over 600 muscles. The strongest for its size is in your jaw.', 'Movement'),
  PlayBodyPart('Bones', '🦴', 0.5, 0.78, 'Babies have about 300 bones. Adults have 206, because some join together.', 'Frame'),
  PlayBodyPart('Ears', '👂', 0.36, 0.1, 'The tiny bones inside are the smallest in your body, and help you hear and balance.', 'Senses'),
  PlayBodyPart('Skin', '🖐️', 0.82, 0.5, 'Your biggest organ. It sheds about 30,000 cells every minute.', 'Cover'),
];
