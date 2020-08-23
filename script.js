let url = "https://davids-restaurant.herokuapp.com/menu_items.json";
let menu_items = null;

$('document').ready(function(){
    $.get(url,function(data,success){
        menu_items = data.menu_items;
        console.log(menu_items.length);
        createOptions();
        
    });
});

function createOptions() {
    let i = 0;
    let j=1;
    var ele = document.getElementById('dropdownmenu');
    if (menu_items != null) {
        for (const jsonObj of menu_items) {
            ele.innerHTML = ele.innerHTML +
                '<option value="' + i++ + '">' + " "+ j++ + ". "+ jsonObj.name + '</option>';
            console.log(i, jsonObj.name);
        }
    }
    
    
}

function change_value(){   
    var k=document.getElementById("dropdownmenu").value;
    showDetails(k);
}



function showDetails(index) {
    // let index = e.traget.value;
    if(index==-1)
    {
        document.getElementById("dropdownmenu").style.opacity=80;
        resetting();

    }
    else if (menu_items != null) {
        document.getElementById("dropdownmenu").style.opacity=100;
        let data = menu_items[index];
        //console.log(data);
        if(data.short_name==null)
        document.querySelector("#shortName").textContent="NULL";
        else
        document.querySelector("#shortName").textContent = data.short_name;
        if(data.name==null)
        document.querySelector("#Name").textContent="NULL";
        else
        document.querySelector("#Name").textContent = data.name;
        if(data.description==null)
        document.querySelector("#description").textContent="NULL";
        else
        document.querySelector("#description").textContent = data.description;
        if(data.price_small==null)
        document.querySelector("#priceSmall").textContent="NULL";
        else
        document.querySelector("#priceSmall").textContent = data.price_small;
        if(data.price_large==null)
        document.querySelector("#priceLarge").textContent="NULL";
        else
        document.querySelector("#priceLarge").textContent = data.price_large;
        if(data.small_portion_name==null)
        document.querySelector("#smallPortionN").textContent="NULL";
        else
        document.querySelector("#smallPortionN").textContent = data.small_portion_name;
        if(data.large_portion_name==null)
        document.querySelector("#largePortionN").textContent="NULL";
        else
        document.querySelector("#largePortionN").textContent = data.large_portion_name;
    }
}

function resetting(){
    console.log("Please select an item!");
    document.querySelector("#shortName").textContent="NONE";
    document.querySelector("#Name").textContent="NONE";
    document.querySelector("#description").textContent="NONE";
    document.querySelector("#priceSmall").textContent="NONE";
    document.querySelector("#priceLarge").textContent="NONE";
    document.querySelector("#smallPortionN").textContent="NONE";
    document.querySelector("#largePortionN").textContent="NONE";
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  //Divisions in the webisite
  function home(){
    document.getElementById("Home").style.display = "inline-block";
    document.getElementById("Menu").style.display = "none";
  }
  function menu(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Menu").style.display = "inline-block";
  }