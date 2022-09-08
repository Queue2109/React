
/*let nepal = {
    // add property
    mountains: ['everest', 'Triglav', 'Stol'],
    printwithDash: function() {
        setTimeout(function() {
            console.log(this.mountains.join(" - "))
        }, 3000);
    }

};*/


//use arrow functions, they are better
let nepal = {
    // add property
    mountains: ['everest', 'Triglav', 'Stol'],
    printwithDash: function() {
        setTimeout(() =>
            console.log(this.mountains.join(" - ")),
         3000);
    }

};

alert(nepal.printwithDash());
let [, second] = ['everest', 'triglav', 'stol'];
console.log(second);

let uniStudent = student => {
    let {name, university} = student;
    console.log(`${name} from ${university}`);
};

uniStudent({
    name: 'Ryan',
    university: 'Universiy of sydney'
});