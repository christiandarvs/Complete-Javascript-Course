const DOLPHINS_SCORE = (96 + 108 + 89) / 3;
const KOALAS_SCORE = (88 + 91 + 110) / 3;

/*
dolphins: 97 112 101 ; koalas: 109 95 123
dolphins: 97 112 101 ; kolas: 109 95 106
*/

function firstScenario(dolphins, koalas) {
  if (dolphins > koalas) {
    console.log("WINNER: DOLPHINS");
  } else if (dolphins < koalas) {
    console.log("WINNER: KOALAS");
  } else {
    console.log("----- DRAW -----");
  }
  console.log();
}

function secondScenario(dolphins, koalas) {
  if (dolphins > koalas && dolphins >= 100) {
    console.log("WINNER: DOLPHINS");
  } else if (dolphins < koalas && koalas >= 100) {
    console.log("WINNER: KOALAS");
  } else {
    console.log("----- DRAW -----");
  }
  console.log();
}

function thirdScenario(dolphins, koalas) {
  if (dolphins > koalas && dolphins >= 100) {
    console.log("WINNER: DOLPHINS");
  } else if (dolphins < koalas && koalas >= 100) {
    console.log("WINNER: KOALAS");
  } else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log("----- DRAW -----");
  } else {
    console.log("----- NO WINNER -----");
  }
  console.log();
}

firstScenario(DOLPHINS_SCORE, KOALAS_SCORE);
secondScenario(DOLPHINS_SCORE, KOALAS_SCORE);
thirdScenario(DOLPHINS_SCORE, KOALAS_SCORE);
