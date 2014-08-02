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

//var moment = require('moment');
var moment = require('moment-timezone');
var g = window;

g.io = {};




$(document)
  .ready(function()
  {
   var memo =  localStorage['memo'];

   if (memo === undefined)
    {
     memo = 'input text here';
    }

   $('#textarea1').html(text);

   document.getElementById('textarea1').addEventListener('input',
   function()
   { localStorage.setItem('memo',$('#textarea1').text()); }, false);


    $('#label').hide();
    var reload = function()
    {

      $('#time').html(moment()
        .tz('Europe/London')
        .add(2, 'hours')
        .format('YYYY/MM/DD HH:mm:ss dddd'));

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
        $('#EURUSDday').html($imgEURUSD);
      });

      var $imgJPYUSD = $('<img/>').attr('src', JPYUSDurl);
      imagesLoaded($imgJPYUSD, function()
      {
        $('#JPYUSDday').html($imgJPYUSD);
      });

      var $imgGBPUSD = $('<img/>').attr('src', GBPUSDurl);
      imagesLoaded($imgGBPUSD, function()
      {
        $('#GBPUSDday').html($imgGBPUSD);
      });

      var $imgCHFUSD = $('<img/>').attr('src', CHFUSDurl);
      imagesLoaded($imgCHFUSD, function()
      {
        $('#CHFUSDday').html($imgCHFUSD);
      });

      var $imgAUDUSD = $('<img/>').attr('src', AUDUSDurl);
      imagesLoaded($imgAUDUSD, function()
      {
        $('#AUDUSDday').html($imgAUDUSD);
      });

      var $imgNZDUSD = $('<img/>').attr('src', NZDUSDurl);
      imagesLoaded($imgNZDUSD, function()
      {
        $('#NZDUSDday').html($imgNZDUSD);
      });

      var $imgCADUSD = $('<img/>').attr('src', CADUSDurl);
      imagesLoaded($imgCADUSD, function()
      {
        $('#CADUSDday').html($imgCADUSD);
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
        $('#EURUSDweek').html($imgEURUSDw);
      });

      var $imgJPYUSDw = $('<img/>').attr('src', JPYUSDwurl);
      imagesLoaded($imgJPYUSDw, function()
      {
        $('#JPYUSDweek').html($imgJPYUSDw);
      });

      var $imgGBPUSDw = $('<img/>').attr('src', GBPUSDwurl);
      imagesLoaded($imgGBPUSDw, function()
      {
        $('#GBPUSDweek').html($imgGBPUSDw);
      });

      var $imgCHFUSDw = $('<img/>').attr('src', CHFUSDwurl);
      imagesLoaded($imgCHFUSDw, function()
      {
        $('#CHFUSDweek').html($imgCHFUSDw);
      });

      var $imgAUDUSDw = $('<img/>').attr('src', AUDUSDwurl);
      imagesLoaded($imgAUDUSDw, function()
      {
        $('#AUDUSDweek').html($imgAUDUSDw);
      });

      var $imgNZDUSDw = $('<img/>').attr('src', NZDUSDwurl);
      imagesLoaded($imgNZDUSDw, function()
      {
        $('#NZDUSDweek').html($imgNZDUSDw);
      });

      var $imgCADUSDw = $('<img/>').attr('src', CADUSDwurl);
      imagesLoaded($imgCADUSDw, function()
      {
        $('#CADUSDweek').html($imgCADUSDw);
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
    var __timeSequence = __().interval(180000);

    __timeSequence //数学世界
    .compute(function() //物理世界にマッピングする＝計算（コンピューティング）
      {
        reload();
      });


    //tab change



    var __currentPair = {
      val: null
    };


    var activateTab = function(tab)
    {
      $('.nav-tabs a[href="#' + tab + '"]').tab('show');

    };

    require('watchjs').watch(__currentPair, 'val', function()
    {

      var pairW = __currentPair.val + 'week';
      var pairD = __currentPair.val + 'day';
      var pairM30 = __currentPair.val + '30';

      activateTab(pairW);
      activateTab(pairD);
      activateTab(pairM30);

      $('#pair').html(__currentPair.val);

      if (__currentPair.val === 'EURUSD')
        $('#rev').html('-----');
      if (__currentPair.val === 'JPYUSD')
        $('#rev').html('REVERSED');
      if (__currentPair.val === 'GBPUSD')
        $('#rev').html('-----');
      if (__currentPair.val === 'CHFUSD')
        $('#rev').html('REVERSED');
      if (__currentPair.val === 'AUDUSD')
        $('#rev').html('-----');
      if (__currentPair.val === 'NZDUSD')
        $('#rev').html('-----');
      if (__currentPair.val === 'CADUSD')
        $('#rev').html('REVERSED');

    });


    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e)
    {
      var url = "" + e.target;

if (url.indexOf('memo') !== -1)
{
  $('#label').hide();

}
     else if (url.indexOf('clock') !== -1)
      {
        $('#label').hide();

      }
      else if (url.indexOf('WEEK') !== -1)
      {
        $('#label').show();

        if (__currentPair.val === null)
        {
          // alert('null pair');

          __currentPair.val = 'EURUSD';
        }

        $('#period').html('WEEK');


      }
      else if (url.indexOf('DAY') !== -1)
      {
        $('#label').show();

        if (__currentPair.val === null)
        {
          //   alert('null pair');

          __currentPair.val = 'EURUSD';
        }

        $('#period').html('DAY');

      }
      else if (url.indexOf('M30') !== -1)
      {
        $('#label').show();

        if (__currentPair.val === null)
        {
          //  alert('null pair');

          __currentPair.val = 'EURUSD';
        }

        $('#period').html('30M');

      }
      else if (url.indexOf('week') !== -1)
      {
        $('#label').show();

        __currentPair.val = url
          .split('#')[1]
          .split('week')[0];

      }

      else if (url.indexOf('day') !== -1)
      {
        $('#label').show();

        __currentPair.val = url
          .split('#')[1]
          .split('day')[0];

      }
      else if (url.indexOf('30') !== -1)
      {
        $('#label').show();

        __currentPair.val = url
          .split('#')[1]
          .split('30')[0];

      }

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
