const color_box = document.getElementById("color_box");
const blue_button = document.getElementById("blue_button");
const gray_button = document.getElementById("gray_button");
const pink_button = document.getElementById("pink_button");
const countspan = document.getElementById("countspan");
const counter_button = document.getElementById("counter_button");
const even_or_odd_button = document.getElementById("even_or_odd_button");

// Color changer
gray_button.onclick = function() {
    color_box.className = "gray";
};

blue_button.onclick = function () {
    color_box.className = "blue";
};

// Add a third button (and the associated event handler) to support an additional color: pink
pink_button.onclick = function () {
    color_box.className = "pink";
};

// Counter
let a = 0;  

counter_button.onclick = function() {   
    // Complete this function so that it increments the variable named count
    document.querySelector('#countspan').innerHTML = a++
}

// Even or odd?
even_or_odd_button.onclick = function() {
    //Fill in this function so that it shows an alert dialog stating whether the count (from part 2, above) is even or odd.
    // Hint: is it divisible by 2?
    if (a % 2)
    {
        alert ('even')
    }
    else
    {
        alert ('odd')
    }
}