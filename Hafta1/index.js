// Data Type

//String Data
var sth = "ATEZ BOOTCAMP"

//Number Data
var number = 123

// Boolean Data
var istrue = true;
var isfalse = false;

//Undefined Data
//Undefined Data: Bir değişkenin olmadığı veya değişkene değer atanmadığı datalara denir.
var sthelse; //değişkene değer atanmamış.
console.log("Undefined", sthelse) //değişken tanımlanmamış.

//String Data
console.log("String Data",sth)

// Null Data
var nullData = null; //null tanımlanmış değer (null değeri tanımlanmazsa, undefined data olur.)

//Object Data  *İçerisinde birden fazla datayı ve data tipini bulundurabilen yapıdır.
var testObj = {
    sth: "ATEZ Bootcamp",
    number: 123,
    istrue: false,
}

// testObj içerisinde number nasıl kullanılır?
console.log(testObj.number);

//Array Data > Diziler içerisinde birden fazla string, number veya object içerebilir.

var testArray = [
   "ATEZ Bootcamp", 123, 456, testObj = {
        sth: "ATEZ Bootcamp",
        number: 123,
        istrue: false,
    }
]
console.log(testArray)

/* JS ES6 ile gelen let" ve "const" olarak 2 farklı data tipi ortaya çıktı

var: kod bloğu içerisinde heryerden ulaşılabilen ve değiştirilebilen data tipidir.
Const: Değişkenin değerini sonradan değiştireilemez. Yani değişkenin değeri sabittir.
const sadece bir kez tanımlanabilir.

Let: Değişkenin değeri sonradan değiştirilebilir.let sadece bir kez tanımlanabilir.
 */
console.log("Unmutated",testObj);

testObj.sth = "Another Bootcamp";
console.log("Mutated",testObj);

//Block Scope -- let & const

const globalScope = "Global Scope Variable";

function functionScope(){
    const fnScopeVariable = "Function Scope Variable";
}

console.log("Global =>", globalScope);
// console.log("Function =>", fnScopeVariable); fonksiyonun dışında olduğu için değiştirilemez.


function functionScope(){
    const fnScopeVariable = "Function Scope Variable";

    // fnScopeVariable = "NEW VALUE"; hata verir. değiştirilemez.
    // let fnScopeVariable = "NEW VALUE"; let kullanırsak değiştirilebilir.

    console.log("Global =>", globalScope);
    console.log("Function =>", fnScopeVariable); //fonskiyonun içerisinde global ve local scope datasına ulaştık.
}

functionScope();

/* FONKSİYON
Fonksiyonlar işin logicini yapar ya değer döner yada eylemi yapıp işi tamamlar.
 */

//Data dönen fonskiyon
function returnSomething (a,b) {
    const c = 5;
    const d = 6;
    return a + b + c + d; //a ve b değiştirilebilir argümandır.
}

console.log (returnSomething(a:1, b:2));