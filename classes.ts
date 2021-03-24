class class_one{
 private sub_one:string;
 private sub_two:string;
 private sub_three:string;

 constructor(){
  this.sub_one = "hellow_1";
  this.sub_two = "hello_2";
  this.sub_three = "hello_3";

 }
 public getSubOne():string{
  return this.sub_one;
 }
 public getSubTwo():string{
  return this.sub_two;
 }
 public getSubThree():string{
  return this.sub_three;
 }


}

let obj:class_one = new class_one();
console.log(obj.getSubOne(),obj.getSubTwo(),obj.getSubThree());
