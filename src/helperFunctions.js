// Pomocné funkce

import { DATA_STORE, MS_IN_YEAR } from './constants.js';

/**
 * Z pole vybere náhodnou položku.
 * @param {Array} array pole
 * @returns {*} Náhodná položka z pole.
 */
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Vygeneruje náhodné datum narození v rámci zadaného věkového rozmezí.
 * @param {number} minAge - Minimální věk (spodní hranice).
 * @param {number} maxAge - Maximální věk (horní hranice).
 * @returns {string} Datum ve formátu ISO 8601.
 */
function getRandomBirthdate(minAge, maxAge) {
    const now = new Date().getTime();
    const minTimestamp = now - (maxAge * MS_IN_YEAR);
    const maxTimestamp = now - (minAge * MS_IN_YEAR);

    // Vygenerování náhodného času v rámci intervalu
    const randomTime = minTimestamp + Math.random() * (maxTimestamp - minTimestamp);

    return new Date(randomTime).toISOString();
}

/**
 * Vygeneruje objekt jednoho zaměstnance s náhodnými daty.
 * @param {number} ageMin - Minimální věk pro generování.
 * @param {number} ageMax - Maximální věk pro generování.
 * @returns {object} Objekt zaměstnance.
 */
export function generateEmployee(ageMin, ageMax) {
    // Náhodně určení pohlaví
    const gender = Math.random() < 0.5 ? "male" : "female";
    // Náhodně určení úvazku a data narození
    const workload = getRandomItem(DATA_STORE.workloads);
    const birthdate = getRandomBirthdate(ageMin, ageMax);

    let name, surname;
    // Přiřazení jmen a příjmení podle pohlaví
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