function function_name(param1: number): number{
    //kood
    return param1;
}

//string add function
function concatenate_these_two_strings(str1: string, str2: string): string{
    return str1+" "+str2;
}

function say_my_name(name: string): void {
    console.log(name)
}

//it somthin
function greet_me(name: string, greeting?: string){
    if(greeting === undefined){
        greeting = "Hallo"
    }

    return greeting + " " +name;

}

console.log( greet_me("wtf?", "das ist not right"))