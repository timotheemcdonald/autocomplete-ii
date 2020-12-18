const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e) => {
   let userData = e.target.value; //what the user inputs into search box
   let emptyArray = [];
   if(userData){
       emptyArray = suggestions.filter((data) => {
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
       })
       emptyArray = emptyArray.map((data) => {
           return data = '<li>' + data + '</li>';
       });
       searchWrapper.classList.add("active"); //show autocomplete box
       showSuggestions(emptyArray);
       let allList = suggBox.querySelectorAll("li");
       for (let i = 0; i < allList.length; i++) {
           allList[i].setAttribute("onclick", "select(this)");
       }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
   }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData; //passing the user selected list data to textfield
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}