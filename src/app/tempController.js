export class ExampleController{
    constructor($filter, MyService) {
        console.log(MyService.name)
    }

    onClick(){
        alert("clicked")
    }
    
}




