const foo = [1,2,3]
const bar = [...foo]

bar[0]=4

console.log(foo);
console.log(bar);

const ObjA = {
    a:{
        b:2
    }
}
const ObjB = {
    ...ObjA
}

ObjA.a.b=1//ネスとしてるとBの方も変わってしまう

console.log(ObjA);
console.log(ObjB);