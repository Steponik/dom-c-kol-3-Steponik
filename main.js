// Importy
import { generateEmployee } from "./src/helperFunctions.js";

/**
 * The main function which calls the application.
 *
 * Tato funkce slouží jako generátor zaměstnanců.
 * Na základě vstupních parametrů (počet osob a věkové rozmezí) vytvoří seznam zaměstnanců.
 *
 * Pro každou osobu probíhá cyklus, který náhodně určí:
 * 1. Pohlaví (muž/žena).
 * 2. Jméno a příjmení (vybrané ze seznamu tak, aby odpovídalo pohlaví).
 * 3. Pracovní úvazek (konkrétní hodnoty 10, 20, 30 nebo 40 hodin).
 * 4. Datum narození.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
    // Inicializace výstupního pole
    const dtoOut = [];

    // Iterace: Generování požadovaného počtu zaměstnanců
    for (let i = 0; i < dtoIn.count; i++) {
        // Volání pomocné funkce pro vytvoření jedné osoby
        const employee = generateEmployee(dtoIn.age.min, dtoIn.age.max);

        // Přidání do seznamu
        dtoOut.push(employee);
    }

    // Vrácení hotového seznamu
    return dtoOut;
}

