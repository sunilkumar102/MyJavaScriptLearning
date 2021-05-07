document.querySelector('.check').addEventListener('click', function () {
  const input = document.querySelector('.change').value.toLowerCase();

  let finalSubString = '';
  let camelCase = '';

  const withoutUnderScore = input.split('_');

  for (i = 1; i < withoutUnderScore.length; i++) {
    finalSubString =
      finalSubString +
      withoutUnderScore[i][0].toUpperCase() +
      withoutUnderScore[i].slice(1);
  }
  camelCase = withoutUnderScore[0] + finalSubString;
  console.log(camelCase);
});
