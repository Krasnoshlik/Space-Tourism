import Douglas from '../assets/crew/image-douglas-hurley.png';
import Mark from '../assets/crew/image-mark-shuttleworth.png';
import Victor from '../assets/crew/image-victor-glover.png';
import Anousheh from '../assets/crew/image-anousheh-ansari.png';

export interface Crew {
    name: string;
    position: string;
    info: string;
    img: any;
  }

export const CrewInfo: Crew[] = [
  {
    name: "Douglas Hurley",
    position: "COMMANDER",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img:`${Douglas}`
  },
  {
    name: "MARK SHUTTLEWORTH",
    position: "MISSION SPECIALIST",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img:`${Mark}`
  },
  {
    name: "Victor Glover",
    position: "PILOT",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img:`${Victor}`
  },
  {
    name: "Anousheh Ansari",
    position: "FLIGHT ENGINEER",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img:`${Anousheh}`
  },
];
