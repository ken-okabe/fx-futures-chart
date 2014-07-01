/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('CORE:', msg);
};
log('init5');

Object.defineProperty(Object.prototype, 'map',
{
  value: function(f, ctx)
  {
    ctx = ctx || this;
    var self = this,
      result = {};
    Object.keys(self).forEach(function(v)
    {
      result[v] = f.call(ctx, self[v], v, self);
    });
    return result;
  }
});

var B = require('baconjs');

var moment = require('moment');

var g = window;

g.io = {};


$(document)
  .ready(function()
  {
    var reload = function()
    {
      var rand = Math.random();


      var EURUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6E+%23F&period=D&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var JPYUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6J+%23F&period=D&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var GBPUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6B+%23F&period=D&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CHFUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6S+%23F&period=D&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var AUDUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6A+%23F&period=D&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var NZDUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6N+%23F&period=D&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CADUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6C+%23F&period=D&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;


      var $imgEURUSD = $('<img/>').attr('src', EURUSDurl);
      $('#EURUSD').html($imgEURUSD);

      var $imgJPYUSD = $('<img/>').attr('src', JPYUSDurl);
      $('#JPYUSD').html($imgJPYUSD);

      var $imgGBPUSD = $('<img/>').attr('src', GBPUSDurl);
      $('#GBPUSD').html($imgGBPUSD);

      var $imgCHFUSD = $('<img/>').attr('src', CHFUSDurl);
      $('#CHFUSD').html($imgCHFUSD);

      var $imgAUDUSD = $('<img/>').attr('src', AUDUSDurl);
      $('#AUDUSD').html($imgAUDUSD);

      var $imgNZDUSD = $('<img/>').attr('src', NZDUSDurl);
      $('#NZDUSD').html($imgNZDUSD);

      var $imgCADUSD = $('<img/>').attr('src', CADUSDurl);
      $('#CADUSD').html($imgCADUSD);



      var EURUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6E+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var JPYUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6J+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var GBPUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6B+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CHFUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6S+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var AUDUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6A+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var NZDUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6N+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CADUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6C+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var $imgEURUSDw = $('<img/>').attr('src', EURUSDwurl);
      $('#EURUSDw').html($imgEURUSDw);

      var $imgJPYUSDw = $('<img/>').attr('src', JPYUSDwurl);
      $('#JPYUSDw').html($imgJPYUSDw);

      var $imgGBPUSDw = $('<img/>').attr('src', GBPUSDwurl);
      $('#GBPUSDw').html($imgGBPUSDw);

      var $imgCHFUSDw = $('<img/>').attr('src', CHFUSDwurl);
      $('#CHFUSDw').html($imgCHFUSDw);

      var $imgAUDUSDw = $('<img/>').attr('src', AUDUSDwurl);
      $('#AUDUSDw').html($imgAUDUSDw);

      var $imgNZDUSDw = $('<img/>').attr('src', NZDUSDwurl);
      $('#NZDUSDw').html($imgNZDUSDw);

      var $imgCADUSDw = $('<img/>').attr('src', CADUSDwurl);
      $('#CADUSDw').html($imgCADUSDw);

    };

    reload();
    var __timeSequence = B
      .interval(600000);

    __timeSequence //数学世界
    .onValue(function() //物理世界にマッピングする＝計算（コンピューティング）
      {
        reload();
      });


    //tab change

    var activateTab = function(tab)
    {
      $('.nav-tabs a[href="#' + tab + '"]').tab('show');
    };

    $('#WEEK').click(function(e)
    {
      var url = '' + e.target;

      var pair = url
        .split('#')[1]
        .split('w')[0];

      activateTab(pair);
    });

    $('#DAY').click(function(e)
    {
      var url = '' + e.target;

      var pair = url
        .split('#')[1] + 'w';

      activateTab(pair);
    });
  });
