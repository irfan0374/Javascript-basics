
// call apply 

let tool={
    name:"irfan",
    lastName:"iqbal",
    
}

let obj={
    fullName:function(score){
        return this.name+" "+this.lastName+" "+score
    }
}
let x=obj.fullName.bind(tool,300)
