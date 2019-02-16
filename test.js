let data = [
    {
        itemID:111,
        itemName:"screen",
        itemValue:""
    },
    {
        itemID:222,
        itemName:"operating system",
        itemValue:""
    },
    {
        itemID:333,
        itemName:"color",
        itemValue:""
    }
];

data.map(function(res){
   $('#mainForm').append(`
        <div class="form-group">
            <label for="exampleInputEmail1">${res.itemName}</label>
            <input type="text" class="form-control" id="item${res.itemID}"  placeholder="Enter ${res.itemName}">
        </div>
   `)
});
$(document).on('input',"input[id^='item']",function(event){
    //console.log(event)
    var selectedid = (event.target.id).slice(4);
    var inputValue = this.value;
    //console.log(`item id: ${selectedid} and its value = ${inputValue}`);
    let selectedObject = data.filter(item => item.itemID == selectedid);
    selectedObject[0].itemValue = inputValue;
    

})