const {func} = require('./func');
const {hello} = require('./log');

const main = () => {
    func()
    hello()
    console.log("main")
    func()
}
main()
console.log("hello")
