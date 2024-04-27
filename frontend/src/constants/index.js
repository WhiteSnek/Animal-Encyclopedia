import LionFront from '../assets/images/lion_front.webp';
import LionBack from '../assets/images/lion.jpg';
import TigerFront from '../assets/images/tiger-front.png';
import TigerBack from '../assets/images/tiger.jpg';
import ElephantFront from '../assets/images/elephant-front.png';
import ElephantBack from '../assets/images/elephant.jpg';
import ZebraFront from '../assets/images/zebra-front.png';
import ZebraBack from '../assets/images/zebra.jpg';
import GiraffeFront from '../assets/images/giraffe-front.webp';
import GiraffeBack from '../assets/images/giraffe.jpg';
import MonkeyFront from '../assets/images/monkey-front.png';
import MonkeyBack from '../assets/images/monkey.webp';
import PandaFront from '../assets/images/panda-front.png';
import PandaBack from '../assets/images/panda.jpg';
import KoalaFront from '../assets/images/koala-front.png';
import KoalaBack from '../assets/images/koala.jpg';
import BearFront from '../assets/images/bear-front.png';
import BearBack from '../assets/images/bear.jpg';
import WolfFront from '../assets/images/wolf-front.png';
import WolfBack from '../assets/images/wolf.jpg';

const animals = [
  {
    id: 1,
    name: 'Lion',
    frontImageUrl: LionFront,
    backImageUrl: LionBack,
    category: 'Mammals',
    diet: 'Carnivore',
  },
  {
    id: 2,
    name: 'Tiger',
    frontImageUrl: TigerFront,
    backImageUrl: TigerBack,
    category: 'Mammals',
    diet: 'Carnivore',
  },
  {
    id: 3,
    name: 'Elephant',
    frontImageUrl: ElephantFront,
    backImageUrl: ElephantBack,
    category: 'Mammals',
    diet: 'Herbivore',
  },
  {
    id: 4,
    name: 'Zebra',
    frontImageUrl: ZebraFront,
    backImageUrl: ZebraBack,
    category: 'Mammals',
    diet: 'Herbivore',
  },
  {
    id: 5,
    name: 'Giraffe',
    frontImageUrl: GiraffeFront,
    backImageUrl: GiraffeBack,
    category: 'Mammals',
    diet: 'Herbivore',
  },
  {
    id: 6,
    name: 'Monkey',
    frontImageUrl: MonkeyFront,
    backImageUrl: MonkeyBack,
    category: 'Mammals',
    diet: 'Omnivore',
  },
  {
    id: 7,
    name: 'Panda',
    frontImageUrl: PandaFront,
    backImageUrl: PandaBack,
    category: 'Mammals',
    diet: 'Herbivore',
  },
  {
    id: 8,
    name: 'Koala',
    frontImageUrl: KoalaFront,
    backImageUrl: KoalaBack,
    category: 'Mammals',
    diet: 'Herbivore',
  },
  {
    id: 9,
    name: 'Bear',
    frontImageUrl: BearFront,
    backImageUrl: BearBack,
    category: 'Mammals',
    diet: 'Omnivore',
  },
  {
    id: 10,
    name: 'Wolf',
    frontImageUrl: WolfFront,
    backImageUrl: WolfBack,
    category: 'Mammals',
    diet: 'Carnivore',
  },
];

const animalDetails = [
  {
    id: 1,
    name: 'Lion',
    description: 'The lion (Panthera leo) is an iconic and formidable big cat, renowned for its golden fur and impressive mane. Inhabiting diverse landscapes across sub-Saharan Africa and a small population in the Gir Forest of India, lions form social groups called prides consisting of related lionesses, their cubs, and a coalition of adult males. These social structures aid in territory defense, cooperative hunting, and cub rearing. Lions are apex predators, preying primarily on large ungulates like zebras and wildebeests, though they opportunistically scavenge and hunt smaller mammals. Their distinctive roar resonates across the savannas, serving both as a territorial advertisement and a means of communication within the pride. Despite their status as apex predators, lions face significant conservation challenges due to habitat loss, human-wildlife conflict, and poaching, leading to population declines and classification as "Vulnerable" on the IUCN Red List, underscoring the urgent need for conservation efforts to ensure their survival.',
    characteristics: 'They are social animals, living in groups called prides, and are skilled hunters.',
    distribution: 'Lions primarily inhabit savannas and grasslands across sub-Saharan Africa, with a small population in the Gir Forest of India.',
    habitat: 'They prefer open plains and scrubland where they can find prey and access water sources.',
    funFacts: 'Male lions can sleep up to 20 hours a day, conserving energy for hunting.',
  },
  {
    id: 2,
    name: 'Tiger',
    description: 'Tigers are iconic big cats with striking orange fur and dark stripes.',
    characteristics: 'They are solitary hunters and apex predators, capable of taking down prey much larger than themselves.',
    distribution: 'Tigers are found in various habitats across Asia, including tropical forests, mangrove swamps, and snowy landscapes.',
    habitat: 'They require dense vegetation for cover and access to water sources for hunting.',
    funFacts: 'Tigers are excellent swimmers and can traverse rivers and lakes in search of prey.',
  },
  {
    id: 3,
    name: 'Elephant',
    description: 'Elephants are the largest land animals, known for their long trunks and tusks.',
    characteristics: 'They are highly intelligent and social animals, living in matriarchal herds led by the oldest female.',
    distribution: 'Elephants inhabit diverse habitats across Africa and Asia, including savannas, forests, and grasslands.',
    habitat: 'They require access to water and extensive areas for foraging, often migrating in search of food and resources.',
    funFacts: 'Elephants have a complex communication system that includes a wide range of vocalizations, body language, and infrasound.',
  },
  {
    id: 4,
    name: 'Zebra',
    description: 'Zebras are iconic African equids known for their distinctive black and white stripes.',
    characteristics: 'They are social animals, forming herds for protection against predators.',
    distribution: 'Zebras are native to various habitats in Africa, including savannas, grasslands, and woodlands.',
    habitat: 'They prefer open grasslands where they can graze on grass and access water sources.',
    funFacts: 'Every zebra has a unique stripe pattern, much like human fingerprints.',
  },
  {
    id: 5,
    name: 'Giraffe',
    description: 'Giraffes are the tallest land animals, known for their long necks and spotted coats.',
    characteristics: 'They are herbivores, feeding on leaves from tall trees, and have specialized cardiovascular systems to pump blood to their heads.',
    distribution: 'Giraffes are found in savannas, grasslands, and open woodlands across sub-Saharan Africa.',
    habitat: 'They inhabit areas with plenty of acacia trees and other vegetation suitable for browsing.',
    funFacts: 'Giraffes only need 5 to 30 minutes of sleep per day and often sleep standing up.',
  },
  {
    id: 6,
    name: 'Monkey',
    description: 'Monkeys are primates known for their intelligence, agility, and social behaviors.',
    characteristics: 'They live in troops or groups, exhibiting complex social structures and communication.',
    distribution: 'Monkeys are found in various habitats across Africa, Asia, and Central and South America, including forests, savannas, and mountains.',
    habitat: 'They inhabit areas with plenty of trees for shelter and foraging, as well as access to water sources.',
    funFacts: 'Some monkey species use tools, such as sticks or stones, to obtain food or for grooming.',
  },
  {
    id: 7,
    name: 'Panda',
    description: 'Pandas are beloved bears known for their distinctive black and white fur.',
    characteristics: 'They are herbivores, primarily feeding on bamboo, and have a specialized digestive system for processing their diet.',
    distribution: 'Giant pandas are found in mountainous bamboo forests of central China, while red pandas inhabit forests across the eastern Himalayas and southwestern China.',
    habitat: 'They inhabit dense bamboo forests with plenty of bamboo shoots for food.',
    funFacts: 'Giant pandas have a pseudo thumb, a modified wrist bone that helps them grasp bamboo stalks.',
  },
  {
    id: 8,
    name: 'Koala',
    description: 'Koalas are marsupials native to Australia, known for their cute appearance and love for eucalyptus leaves.',
    characteristics: 'They are arboreal animals, spending most of their time in eucalyptus trees, and are solitary except during mating season.',
    distribution: 'Koalas are found in eucalyptus forests and woodlands along the eastern and southeastern coast of Australia.',
    habitat: 'They inhabit areas with eucalyptus trees for food and shelter, as well as access to water sources.',
    funFacts: 'Koalas have a specialized diet of eucalyptus leaves, which are toxic to many other animals.',
  },
  {
    id: 9,
    name: 'Bear',
    description: 'Bears are large mammals known for their strength, intelligence, and omnivorous diet.',
    characteristics: 'They are solitary animals, except during mating season or when raising cubs, and have a keen sense of smell.',
    distribution: 'Bears are found in various habitats across North America, Europe, Asia, and parts of South America.',
    habitat: 'They inhabit forests, mountains, tundra, and Arctic ice floes, depending on the species.',
    funFacts: 'Some bear species, such as polar bears, are excellent swimmers and can cover long distances in water.',
  },
  {
    id: 10,
    name: 'Wolf',
    description: 'Wolves are highly social carnivores known for their intelligence, agility, and hunting skills.',
    characteristics: 'They live and hunt in packs, exhibiting complex social behaviors and communication.',
    distribution: 'Wolves are found in a wide range of habitats across North America, Europe, Asia, and parts of Africa.',
    habitat: 'They inhabit diverse ecosystems, including forests, grasslands, tundra, and deserts.',
    funFacts: 'Wolves play a crucial role in regulating prey populations and maintaining ecosystem balance.',
  },
];

export {animals, animalDetails};
