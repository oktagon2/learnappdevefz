// function test1( a, b) {
//     a();
//     b();
// }

// test1( ()=> {
//     console.log( 'a()')
// }, ()=> {
//     console.log( 'b()')
// });

var parser= new Parser1()
var evaluationResult= parser.evaluate( '15-3-4')
console.log( evaluationResult)
