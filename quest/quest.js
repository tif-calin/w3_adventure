import quests from '../data/data.js';
import { findByProperty } from '../utils.js';

const questName = (new URLSearchParams(window.location.search)).get('id');
const quest = quests[questName];

console.log(quest);