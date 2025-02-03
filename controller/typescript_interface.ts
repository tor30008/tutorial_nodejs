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

        เวลาการเรียกใช้ 
        - ตอนกำหนด interface Company {
            name:string;
            address: string;
        }
        - ตอนเรียกใช้ const nvdiaCompany : Company = {
            name : "nvdia",
            address : "USA",
        }
        ตัวอย่างการประกาศ และ การเรียกใช้

        ข้อดีการใช้ Interface 
        - เราสามารถจัดกลุ่มชุดข้อมูล ที่มีลักษณะเดียวกันได้ 
        - โค๊ดอ่านง่าย Clean 

        
    */

    res.status(200).json({
        people1:people1,
        people2:people2,
        people1Scrore:people1Scrore,
        people2Scrore:people2Scrore,
        gradeSeven:gradeSeven
    })

}

export const typescript_interface_optional = (req: Request , res: Response) => {
    interface Snack {
        name:string;
        calories?: number;
        price?:number;
    }

    const snackThailand : Snack = {
        name:"กาละแม"
    }

    const snackJapan : Snack = { name: "ข้าวญี่ปุ่น" , calories : 100 , price: 50 }

    res.status(200).json({
        interface_optional:{
            snackThailand:snackThailand,
            snackJapan:snackJapan
        }
    })
    /* interface optional
        - ถ้าไม่มี ? = จำเป็นต้องมีค่า 
        - ถ้ามี ? ต่อหลังตัวแปร = มีค่าก็ได้ ไม่จำเป็นต้องมีก็ได้
    */ 

}

export const typescript_interface_readonly = (req:Request , res: Response) => {

    interface PEOPLETHAILAND {
        firstname:string;
        lastname:string;
        readonly ID:number;
    }

    const me :PEOPLETHAILAND = {
        firstname:"ศิริโรจน์",
        lastname: "กิตติวุฒิกุล",
        ID:1432456
    }

    console.log(me);
    
    me.firstname = "Sawadee"
    me.lastname = "KUB"
    /*
        me.ID = 789798798
        ที่ยกตัวอย่างเป็น PEOPLETHAILAND เท่ากับคนไทย เพราะว่า 
        เราสามารถเปลี่ยนชื่อ - นามสกุล ได้ แต่เราไม่สามารถเปลี่ยนเลขบัตรประชาชนได้ 
        เพราะการที่เราใช้ readonly ใน ID เราจะกำหนด ID ตอนแรก แล้วก็ไม่สามารถเปลี่ยนเลขบัตรประชาชนได้ 
        ยกตัวอย่างอีกเคสคือ 
         interface ANIMAL {
            name : string ;
            readonly typeanimal : string;
         }
        
        celebAnimal.name = 'หมูเด้ง'
        celenAnimal.typeanimal = 'HIPPO'

        ตอนนี้คือ celeb เราคือ หมูเด้ง ที่เป็นฮิปโป 
        เราสามารถเปลี่ยน ชื่อหมูเด้งเป็นแบบอื่นได้ 
        ** แต่ไม่สามารถเป็น ฮิปโป ไปเป็น เสือได้ เพราะหมูเด้งเกิดมาเป็น HIPPO 
    */
    console.log(me);
}

export const typescript_interface_inheritance = (req:Request , res: Response) => {
    interface NPCGAME {
        name : string;
        typenpc:string;
        GPSCITY():string;
    }

    interface NPCsword extends NPCGAME {
        usesword():string
    }

    interface NPCmage extends NPCGAME{
        usemage():string
    }

    const NPCcityA : NPCsword = {
        name:"นักดาบนะจ๊ะ",
        typenpc:"Swordman",
        GPSCITY: function(){
            return "อยู่เมือง A นะ เดินไปทางซ้าย";
        },
        usesword: function(){
            return "ฟันแม้ง";
        }
    }

    const NPCcityB : NPCmage = {
        name:"นักเวทย์นะจ๊ะ",
        typenpc:"WIZARD",
        GPSCITY:function(){
            return"อยู่เมือง B นะ เดินไปทางขวา";
        },
        usemage:function(){
            return "storm gust";
        }
    }

    console.log('// NPC city A //')
    console.log(NPCcityA.name);
    console.log(NPCcityA.typenpc);
    console.log(NPCcityA.GPSCITY());
    console.log(NPCcityA.usesword());
    console.log('// ------------- // ');
    
    console.log('// NPC city B //');
    console.log(NPCcityB.name);
    console.log(NPCcityB.typenpc);
    console.log(NPCcityB.GPSCITY());
    console.log(NPCcityB.usemage());

    /*
        เราประกาศมาว่า NPCGAME เนี้ยทำไรได้บ้าง (ความสามารถพื้นฐาน)
        - name ชือ
        - typenpc ประเภทอาชีพ
        - GPSCITY() สามารถบอกได้ว่า อยู่ที่ไหนของแผนที่ 

        NPC มีความสามารถประมาณนี้ 

        NPCsword เนี้ย เราอยากสร้างนักดาบ
        เราจะทำการสืบทอด (inheritance) มาแทน โดยเราไม่ต้องกำหนด name,typenpc,GPSCITY() // บอกว่าอยู่ที่ไหน 
        เราแค่มาเขียน function โจมตีของนักดาบก็พอ (usesword())

        Usecase อีกอัน NPCmage เราสามารถทำได้เช่นเดียวกัน โดยเรากำหนด ถ้าโจมตีของนักเวทย์ก็พอ (usemage())
        

        
    */

    

}