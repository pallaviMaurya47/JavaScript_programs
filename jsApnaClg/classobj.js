let data ="secret information"

class user{
    constructor(name,email){
        this.name=name;
        this.email =email;
    }
    viewData()
    {
        console.log(data)
    }
}

class admin extends user{
    constructor(name,email){
      super(name,email)
    }
    editData(){
        data= "edited data "
    }
}

let stu1 = new user("jyoti", "jyoti@gmail.com");
let stu2 =new user("hellouser","2nduser@gmil.com");

let hod =new admin("hod","hod@gmil.com");