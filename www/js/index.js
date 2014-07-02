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






      var EURUSD60url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6E+%23F&period=V&varminutes=60&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var JPYUSD60url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6J+%23F&period=V&varminutes=60&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var GBPUSD60url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6B+%23F&period=V&varminutes=60&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CHFUSD60url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6S+%23F&period=V&varminutes=60&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var AUDUSD60url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6A+%23F&period=V&varminutes=60&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var NZDUSD60url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6N+%23F&period=V&varminutes=60&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CADUSD60url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6C+%23F&period=V&varminutes=60&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;


      var $imgEURUSD60 = $('<img/>').attr('src', EURUSD60url);
      $('#EURUSD60').html($imgEURUSD60);

      var $imgJPYUSD60 = $('<img/>').attr('src', JPYUSD60url);
      $('#JPYUSD60').html($imgJPYUSD60);

      var $imgGBPUSD60 = $('<img/>').attr('src', GBPUSD60url);
      $('#GBPUSD60').html($imgGBPUSD60);

      var $imgCHFUSD60 = $('<img/>').attr('src', CHFUSD60url);
      $('#CHFUSD60').html($imgCHFUSD60);

      var $imgAUDUSD60 = $('<img/>').attr('src', AUDUSD60url);
      $('#AUDUSD60').html($imgAUDUSD60);

      var $imgNZDUSD60 = $('<img/>').attr('src', NZDUSD60url);
      $('#NZDUSD60').html($imgNZDUSD60);

      var $imgCADUSD60 = $('<img/>').attr('src', CADUSD60url);
      $('#CADUSD60').html($imgCADUSD60);


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

      var pairD = pair;
      var pairH = pair + '60';

      activateTab(pairD);
      activateTab(pairH);
    });

    $('#DAY').click(function(e)
    {
      var url = '' + e.target;
      var pair = url
        .split('#')[1];

      var pairW = pair + 'w';
      var pairH = pair + '60';

      activateTab(pairW);
      activateTab(pairH);
    });

    $('#H').click(function(e)
    {
      var url = '' + e.target;
      var pair = url
        .split('#')[1]
        .split('60')[0];

      var pairW = pair + 'w';
      var pairD = pair;

      activateTab(pairW);
      activateTab(pairD);
    });

    //--------
    var moment = require('moment-timezone');

    var time = [];

    var doTime = function(n)
    {
      var hours = time[n].hours();
      var mins = time[n].minutes();
      var seconds = time[n].seconds();

      var hdegree = (360 / 12) * hours + (30 / 60 * mins);
      var mdegree = (360 / 60) * mins + (6 / 60 * seconds);
      var sdegree = (360 / 60) * seconds;

      var hrotate = "rotate(" + hdegree + "deg)";
      var mrotate = "rotate(" + mdegree + "deg)";
      var srotate = "rotate(" + sdegree + "deg)";

      $(".hour").eq(n).css(
      {
        "-moz-transform": hrotate,
        "-webkit-transform": hrotate
      });

      $(".min").eq(n).css(
      {
        "-moz-transform": mrotate,
        "-webkit-transform": mrotate
      });

      $(".sec").eq(n).css(
      {
        "-moz-transform": srotate,
        "-webkit-transform": srotate
      });

      $('p').eq(n * 3 + 1).html(time[n].format('YYYY/MM/DD HH:mm:ss dddd'));

      var dst;
      if (time[n].isDST())
      {
        dst = '(DayLight Saving Time)';
      }
      else
      {
        dst = '';
      }

      $('p').eq(n * 3 + 2).html("<small>" + dst + "</small>");
    };

    var clock = function()
    {　
      time[0] = moment().tz('America/New_York');
      time[1] = moment().tz('Europe/London');
      time[2] = moment().tz('Europe/London').add(2, 'hours');
      time[3] = moment().tz('Asia/Tokyo');　
      time.map(function(t, i)
      {
        doTime(i);
      });


    };

    var __timeSequence2 = B
      .interval(500);

    __timeSequence2 //数学世界
    .onValue(function() //物理世界にマッピングする＝計算（コンピューティング）
      {
        clock();
      });

    //-------
  });
