/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history, imagesLoaded */
'use strict';

var log = function(msg)
{
  console.log('CORE:', msg);
};
log('init5');

var _ = require('spacetime').lazy();
var __ = require('spacetime').timeline();

var moment = require('moment');
var moment = require('moment-timezone');
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
      imagesLoaded($imgEURUSD, function()
      {
        $('#EURUSD').html($imgEURUSD);
      });

      var $imgJPYUSD = $('<img/>').attr('src', JPYUSDurl);
      imagesLoaded($imgJPYUSD, function()
      {
        $('#JPYUSD').html($imgJPYUSD);
      });

      var $imgGBPUSD = $('<img/>').attr('src', GBPUSDurl);
      imagesLoaded($imgGBPUSD, function()
      {
        $('#GBPUSD').html($imgGBPUSD);
      });

      var $imgCHFUSD = $('<img/>').attr('src', CHFUSDurl);
      imagesLoaded($imgCHFUSD, function()
      {
        $('#CHFUSD').html($imgCHFUSD);
      });

      var $imgAUDUSD = $('<img/>').attr('src', AUDUSDurl);
      imagesLoaded($imgAUDUSD, function()
      {
        $('#AUDUSD').html($imgAUDUSD);
      });

      var $imgNZDUSD = $('<img/>').attr('src', NZDUSDurl);
      imagesLoaded($imgNZDUSD, function()
      {
        $('#NZDUSD').html($imgNZDUSD);
      });

      var $imgCADUSD = $('<img/>').attr('src', CADUSDurl);
      imagesLoaded($imgCADUSD, function()
      {
        $('#CADUSD').html($imgCADUSD);
      });




      var EURUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6E+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var JPYUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6J+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var GBPUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6B+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CHFUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6S+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var AUDUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6A+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var NZDUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6N+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CADUSDwurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6C+%23F&period=W&size=1150x500&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var $imgEURUSDw = $('<img/>').attr('src', EURUSDwurl);
      imagesLoaded($imgEURUSDw, function()
      {
        $('#EURUSDw').html($imgEURUSDw);
      });

      var $imgJPYUSDw = $('<img/>').attr('src', JPYUSDwurl);
      imagesLoaded($imgJPYUSDw, function()
      {
        $('#JPYUSDw').html($imgJPYUSDw);
      });

      var $imgGBPUSDw = $('<img/>').attr('src', GBPUSDwurl);
      imagesLoaded($imgGBPUSDw, function()
      {
        $('#GBPUSDw').html($imgGBPUSDw);
      });

      var $imgCHFUSDw = $('<img/>').attr('src', CHFUSDwurl);
      imagesLoaded($imgCHFUSDw, function()
      {
        $('#CHFUSDw').html($imgCHFUSDw);
      });

      var $imgAUDUSDw = $('<img/>').attr('src', AUDUSDwurl);
      imagesLoaded($imgAUDUSDw, function()
      {
        $('#AUDUSDw').html($imgAUDUSDw);
      });

      var $imgNZDUSDw = $('<img/>').attr('src', NZDUSDwurl);
      imagesLoaded($imgNZDUSDw, function()
      {
        $('#NZDUSDw').html($imgNZDUSDw);
      });

      var $imgCADUSDw = $('<img/>').attr('src', CADUSDwurl);
      imagesLoaded($imgCADUSDw, function()
      {
        $('#CADUSDw').html($imgCADUSDw);
      });



      var EURUSD30url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6E+%23F&period=V&varminutes=30&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var JPYUSD30url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6J+%23F&period=V&varminutes=30&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var GBPUSD30url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6B+%23F&period=V&varminutes=30&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CHFUSD30url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6S+%23F&period=V&varminutes=30&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var AUDUSD30url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6A+%23F&period=V&varminutes=30&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var NZDUSD30url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6N+%23F&period=V&varminutes=30&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var CADUSD30url = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6C+%23F&period=V&varminutes=30&size=1150x500&bartype=CANDLE&bardensity=MEDIUM&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;


      var $imgEURUSD30 = $('<img/>').attr('src', EURUSD30url);
      imagesLoaded($imgEURUSD30, function()
      {
        $('#EURUSD30').html($imgEURUSD30);
      });

      var $imgJPYUSD30 = $('<img/>').attr('src', JPYUSD30url);
      imagesLoaded($imgJPYUSD30, function()
      {
        $('#JPYUSD30').html($imgJPYUSD30);
      });

      var $imgGBPUSD30 = $('<img/>').attr('src', GBPUSD30url);
      imagesLoaded($imgGBPUSD30, function()
      {
        $('#GBPUSD30').html($imgGBPUSD30);
      });

      var $imgCHFUSD30 = $('<img/>').attr('src', CHFUSD30url);
      imagesLoaded($imgCHFUSD30, function()
      {
        $('#CHFUSD30').html($imgCHFUSD30);
      });

      var $imgAUDUSD30 = $('<img/>').attr('src', AUDUSD30url);
      imagesLoaded($imgAUDUSD30, function()
      {
        $('#AUDUSD30').html($imgAUDUSD30);
      });

      var $imgNZDUSD30 = $('<img/>').attr('src', NZDUSD30url);
      imagesLoaded($imgNZDUSD30, function()
      {
        $('#NZDUSD30').html($imgNZDUSD30);
      });

      var $imgCADUSD30 = $('<img/>').attr('src', CADUSD30url);
      imagesLoaded($imgCADUSD30, function()
      {
        $('#CADUSD30').html($imgCADUSD30);
      });

    };

    reload();
    var __timeSequence = __().interval(30000);

    __timeSequence //数学世界
    .compute(function() //物理世界にマッピングする＝計算（コンピューティング）
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
      var pairH = pair + '30';

      activateTab(pairD);
      activateTab(pairH);
    });

    $('#DAY').click(function(e)
    {
      var url = '' + e.target;
      var pair = url
        .split('#')[1];

      var pairW = pair + 'w';
      var pairH = pair + '30';

      activateTab(pairW);
      activateTab(pairH);
    });

    $('#H').click(function(e)
    {
      var url = '' + e.target;
      var pair = url
        .split('#')[1]
        .split('30')[0];

      var pairW = pair + 'w';
      var pairD = pair;

      activateTab(pairW);
      activateTab(pairD);
    });

    //--------


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

    var __timeSequence2 = __().interval(500);

    __timeSequence2 //数学世界
    .compute(function() //物理世界にマッピングする＝計算（コンピューティング）
      {
        clock();
      });

    //-------
  });
