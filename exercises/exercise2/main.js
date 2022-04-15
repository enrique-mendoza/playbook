const explorers = require('./explorers');

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((explorer) => console.log(explorer.name));

// 2. Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((explorer) => console.log(explorer.stack));

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
let stacks = explorers.map((explorer) => explorer.stack);
console.log(stacks);

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
let jsFilter = explorers.filter((explorer) => explorer.stack.includes('js'));
console.log(jsFilter);

// 5. Busca el primer explorer que sea de la CDMX, usa FIND
let explorerCDMX = explorers.find((explorer) => explorer.city === 'CDMX');
console.log(explorerCDMX);

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
let sumExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
console.log(sumExercises);

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
let haveExercisesFinished = explorers.some((explorer) => explorer.missions.onboarding.exercisesFinished);
console.log(haveExercisesFinished);

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
let haveIsFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished);
console.log(haveIsFinished);