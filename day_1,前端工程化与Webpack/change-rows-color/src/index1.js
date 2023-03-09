import $ from 'jquery';
import './index.css'
import logo from './images/logo.png'
import './js/test/info.js'
$(function() {
    $('.box').attr('src', logo)
    $('li:odd').css('background-color', 'yellow');
    $('li:even').css('background-color', 'pink');
})

function info(target) {
    target.info = 'person info'
}

@info
class person {}

console.log(person.info);