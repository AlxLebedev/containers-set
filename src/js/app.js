import Team from './Team';

import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Undead from './characters/Undead';
import Zombie from './characters/Zombie';
import Daemon from './characters/Daemon';
import DeadCharacter from './characters/DeadCharacter';

const steve = new Bowman('Steve Gadd');
const todd = new Swordsman('Todd Sucherman');
const jared = new Magician('Jared Falk');
const anika = new Undead('Anika Nilles');
const emmanuelle = new Zombie('Emmanuelle Caplette');
const elise = new Daemon('Elise Trouw');
const egor = new DeadCharacter('Egor Krid');

const dreamTeam = new Team();

console.log('Игрок создается корректно');
console.log(steve);

dreamTeam.addAll(steve, todd, jared, anika, emmanuelle, elise, egor);

console.log('Создана команда методом addAll');
console.log(dreamTeam);

const anotherTeam = new Team();

anotherTeam.add(steve);
anotherTeam.add(todd);

console.log('Создана другая команда методом add из двух игроков');
console.log(anotherTeam);

anotherTeam.add(steve);
