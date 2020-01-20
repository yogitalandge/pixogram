



const one = function(){
    console.log('one')

}
const two = ()=>{
    console.log('two')

}
const three = ()=>{
    console.log('three')

}

const four = function(){
    console.log('four')

}
const five = function(){
    console.log('five')

}

const zero = () =>{
    console.log('zero')
    one()
    setTimeout(two,2000)
    three()
    four()
    five()
}
zero()
