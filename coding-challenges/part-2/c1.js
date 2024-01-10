const getAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function winnerResult(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= koalasAvg * 2) {
    console.log("WINNER: DOLPHINS");
  } else if (dolphinsAvg <= dolphinsAvg * 2) {
    console.log("WINNER: KOALAS");
  } else {
    console.log("----- NO WINNER -----");
  }
  console.log(`Dolphins: ${dolphinsAvg} vs Koalas: ${koalasAvg}\n`);
}

const DOLPHINS_SCORE = getAverage(44, 23, 71);
const KOALAS_SCORE = getAverage(65, 54, 49);
winnerResult(DOLPHINS_SCORE, KOALAS_SCORE);

const DOLPHINS_SCORE2 = getAverage(85, 54, 41);
const KOALAS_SCORE2 = getAverage(23, 34, 27);
winnerResult(DOLPHINS_SCORE2, KOALAS_SCORE2);
