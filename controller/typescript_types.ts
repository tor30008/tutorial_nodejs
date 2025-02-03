import { Request , Response } from "express";

export const typescript_basic_type = () => {
    let firstname : string = "John";
    let age : number = 30;
    let isKiller : boolean = true; 
    let money : bigint = BigInt(100000000000000);
    
    /* 
        *หัวข้อ Undefiend*
        Type undefined คือ เมื่อเราประกาศตัวแปรไว้แล้ว 
        แต่ยังไม้่ได้ใส่ค่า จะเป็น undefined

        หรือการเข้าถึง Object ที่ไม่ค่า ก็จะได้ undefined เหมือนกัน
    */
    let x ; 
    if(x === undefined){
        console.log(typeof x);
    }
    
    /*
        *หัวข้อ null*
        คือ เราเตรียมตัวแปรไว้ กำลังจะใส่ค่า เราสามารถกำหนดให้มันเป็น null ก่อนได้ 
    */
    let y = null; 
    
    let sym1 = Symbol("id");
    let sym2 = Symbol("id");

    console.log(`Result firstname : ${firstname} // typeof = ${typeof firstname}`);
    console.log(`Result age : ${age} // typeof = ${typeof age}`);
    console.log(`Result isKiller : ${isKiller} // typeof = ${typeof isKiller}`);
    console.log(`Result money : ${money} // typeof = ${typeof money}`);
    console.log(`Result x = ${x} // typeof = ${typeof x}`);
    console.log(`Result y = ${y} // typeof = ${typeof y}`);

    console.log(`sym1 === sym2 // ${sym1 === sym2}` ); // false


}
export const typescript_type_symbol = () => {
    /*
     แยกเป็นอีกหัวข้อ ยังไม่่เข้าใจการทำงาน ของ Symbol() เท่าไหร่ 
     ใช้ Symbol กรณีที่ ต้องการให้ Object มี Key ที่ไม่เหมือนกัน แต่ชื่อเหมือนกัน 
    */


    let sym1 = Symbol("id");
    let sym2 = Symbol("id");
    console.log(sym1 === sym2) // faslse 

    // ตัวอย่าง 1 
    let ROLE = Symbol("role");
    const staff = {
        name:"BOW",
        [ROLE]:"manager"
    }

    console.log(staff);
}