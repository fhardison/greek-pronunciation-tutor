


const subscript = '\u0345'

const keepSubscript = /[\u0300-\u0315\u0340-\u0344]/g

const removeall = /[\u0300-\u0315\u0340-\u0345]/g
const removeAccents2 = (word) => word.normalize("NFD").replace(keepSubscript, "");//.codePointAt(0).toString(16));



function removeGreekAccents(str) {
 const accentMap = {
    // Single accents
    'ά': 'α', 'έ': 'ε', 'ή': 'η', 'ί': 'ι', 'ό': 'ο', 'ύ': 'υ', 'ώ': 'ω',
    'ά': 'α', 'έ': 'ε', 'ή': 'η', 'ί': 'ι', 'ό': 'ο', 'ύ': 'υ', 'ώ': 'ω',
    'ᾶ': 'α', 'ῆ': 'η', 'ῖ': 'ι', 'ῦ': 'υ', 'ῶ': 'ω',
    'ὰ': 'α', 'ὲ': 'ε', 'ὴ': 'η', 'ὶ': 'ι', 'ὸ': 'ο', 'ὺ': 'υ', 'ὼ': 'ω',
    'ΐ': 'ι', 'ΰ': 'υ',
    'ῐ': 'ι', 'ῒ': 'ι', 'ΐ': 'ι', 'Ὶ': 'ι', 'Ί': 'ι',
    'Ὸ': 'υ', 'Ό': 'υ', 'Ὼ': 'υ', 'ῼ': 'υ',

    // Breathing marks
    '῾': '', 'ʹ': '',

    // Combined accents
    'ἁ': 'α', 'ἑ': 'ε', 'ἠ': 'η', 'ἰ': 'ι', 'ὀ': 'ο', 'ὐ': 'υ', 'ὠ': 'ω',
    'ᾅ': 'α', 'ᾍ': 'ε', 'ᾇ': 'η', '᾿': 'ι', 'ᾭ': 'ο', 'Ύ': 'υ', 'ᾩ': 'ω',
    'ἂ': 'α', 'ἒ': 'ε', 'ἢ': 'η', 'ἲ': 'ι', 'ὂ': 'ο', 'ὒ': 'υ', 'ὢ': 'ω',
    'ᾁ': 'α', 'ᾏ': 'ε', 'ᾝ': 'η', '῁': 'ι', 'ᾝ': 'ο', '῭': 'υ', 'ᾡ': 'ω',
    'ᾲ': 'ι', 'ᾼ': 'υ',
  };
  return str.replace(/[^\x00-\x7F]/g, function(match) {
    return accentMap[match] || match;
  });
}


const TEST = "αὐτῳ ει Οἱ τῶν ἀγώνων τῶν ἔξωθεν θεαταὶ "
//const TEST = "ἀγώνων";
console.log(removeAccents2(TEST));
