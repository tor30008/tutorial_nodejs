import { Request , Response } from "express";

export const typescript_type = (req: Request , res: Response) => {
    const type = 'typescript';
    res.status(200).json({
        "message" : "example typescript1"
    })
}
export const typescript_interface = (req: Request , res: Response ) => {
    // ประกาศ Interface = Interface มันคือ "สัญญา " ว่าตัวแปรใน Interface ต้องมีตามนี้้นะ ถ้าไม่มีก็ไม่ให้ใช้"
    const roomSubject = ['math','data structor'];
 
    interface Student {
        firstname:string,
        lastname:string,
        age:number
    }
    interface Score {
        student: Student ,
        subject:String,
        score: number
    }
    interface Classroom {
        people: Array<Student>
        teacher: String
        teacherAssist?:String
        showpeople():void
        showscore(p : Score): void
        showsubject(sub: Array<String>):void

    } 

    // ประกาศ Interface 
    // มันจะทำให้ออกแบบว่า ชุดข้อมูลนี้ มีอะไรบ้าง สามารถเอา interface ซ้อน interface ได้ 


    const people1 : Student = {
        firstname: 'tor',
        lastname: 'kittiwuttikul',
        age: 31
    }

    const people2 : Student = {
        firstname : 'Tee',
        lastname : 'Worapat',
        age : 32
    }

    let allPeople : Array<Student> = [people1 , people2];

    let people1Scrore : Score = {
        student : people1 ,
        subject : 'Math',
        score: 75
    }

    let people2Scrore : Score = {
        student : people2 ,
        subject: 'Data structor',
        score: 99
    }

    let gradeSeven : Classroom = {
        people : allPeople ,
        teacher : 'Mr.Kit',
        teacherAssist : 'Miss.ไข่เน่า',
        showpeople: function(){
            this.people.forEach((a) => {
                console.log(a.firstname)
            })
        },
        showscore : function(s : Score) {
            //console.log(`Student : ${s.student}`);
            //console.log(`Subject : ${s.subject}`);
            console.log(`Score : ${s.score}`);
        },
        showsubject : (roomSubject) =>{
            roomSubject.forEach((rm) => {
                console.log(
                    `Subject : ${rm} ` 
                )
            })
        }
    }
    //console.log(people1);
    //console.log(people2);
    //console.log(people1Scrore);
    //console.log(people2Scrore);
    //console.log(gradeSeven);
    gradeSeven.showscore(people1Scrore);
    gradeSeven.showsubject(roomSubject);
    //gradeSeven.showscore(people2Scrore);


    /*
        เราสามารถใส่ function ใน interface ได้เลย 
        - แต่เวลา response ออกไป function ไม่ได้ตามไปด้วย 
        - เราสามารถเรียกใช้ function ใน interface ได้ด้วย
    */

    res.status(200).json({
        people1:people1,
        people2:people2,
        people1Scrore:people1Scrore,
        people2Scrore:people2Scrore,
        gradeSeven:gradeSeven
    })

}