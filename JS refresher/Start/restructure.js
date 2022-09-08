var name = 'everest';
var height = 8848;
var output = function() {
    console.log(`Mt. ${this.name} is ${this.height} meters tall`);
};

var adventureClimbing = {name, height, output};
adventureClimbing.output();