"use strict";
 
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let words = ["wine", "seattle", "oregon"];
$(document).ready(() => {
    alphabet.forEach(letter => {
        let btn = $("<button></button>")
            .text(letter)
            .attr({
                value: letter,
                class: "btn-primary btn",
                id: letter
            });
        $("#letters").append(btn);
    });

    pickWord = () => {
        let num = Math.floor((Math.random() * words.length) + 1);
        
    }

    $(document).on('click', $("select"), (el) => {
        console.log($(el.target).val());
    });
});

