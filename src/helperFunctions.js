// Pomocné funkce

import { DATA_STORE, MS_IN_YEAR } from './constants.js';

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function getRandomBirthdate(minAge, maxAge) {
    const now = new Date().getTime();
    const minTimestamp = now - (maxAge * MS_IN_YEAR);
    const maxTimestamp = now - (minAge * MS_IN_YEAR);
    const randomTime = minTimestamp + Math.random() * (maxTimestamp - minTimestamp);

    return new Date(randomTime).toISOString();
}

export function generateEmployee(ageMin, ageMax) {
    const gender = Math.random() < 0.5 ? "male" : "female";
    const workload = getRandomItem(DATA_STORE.workloads);
    const birthdate = getRandomBirthdate(ageMin, ageMax);

    let name, surname;

    if (gender === "male") {
        name = getRandomItem(DATA_STORE.maleNames);
        surname = getRandomItem(DATA_STORE.maleSurnames);
    } else {
        name = getRandomItem(DATA_STORE.femaleNames);
        surname = getRandomItem(DATA_STORE.femaleSurnames);
    }

    return {
        gender,
        birthdate,
        name,
        surname,
        workload
    };
}