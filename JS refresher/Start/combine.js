var mountains = ['everest', 'fish tail', 'annapurna'];
var mountainsFromSlo = ['Triglav', 'Stol'];

// ... merges together
var allMountains = [...mountains, ...mountainsFromSlo];
console.log(allMountains);

var day = {
    breakfast: 'toast with an avocado',
    lunch: 'rice with chicken curry'
};
var night = {
    dinner: 'noodle soup'
};

var picnic = [...breakfast, ...night];

var rivers = ['sun', 'tamakoshhi', 'saptakoshi'];
var [first, ...rest] = rivers;

console.log(first);
console.log(rest);