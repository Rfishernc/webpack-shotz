import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('.btn').click(() => {
  $('#coolDiv').append('You clicked the button');
});
