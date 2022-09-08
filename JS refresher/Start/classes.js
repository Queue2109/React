function Holiday(destination, days) {
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function() {
    console.log(this.destination + ' | ' + this.days + ' days ');

};
var nepal = new Holiday("Nepal", 30);
console.log(nepal.info());