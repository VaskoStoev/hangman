let words = [
  'achievement',
  'technology',
  'subway',
  'legitimate',
  'compliment',
  'acknowledge',
  'opportunity',
  'supporter',
  'bulgaria',
  'improvement',
  'monopoly',
  'administration',
  'cowboy',
  'horse',
  'celebration',
  'octopus',
  'reservation',
  'nevertheless',
  'movement',
  'window',
  'novarto',
  'react',
  'javascript',
  'doctor',
  'dacia',
  'renault',
  'abortion',
  'conversation',
  'laboratory',
  'astronomy',
  'airplane',
  'painting',
  'hills',
  'moderate',
  'quantom',
  'characteristic',
  'membership',
  'floccinaucinihilipilification',
  'pneumonoultramicroscopicsilicovolcanoconiosis',
  'incomprehensibility',
  'trichotillomania',
  'xenotransplantation',
  'hippopotomonstrosesquippedaliophobia',
  'uncopyrightable',
];

function RandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export { RandomWord };
