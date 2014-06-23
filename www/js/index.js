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

      var EURUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6E+%23F&period=D&size=1250x600&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var USDJPYurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6J+%23F&period=D&size=1250x600&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var GBPUSDurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=6B+%23F&period=D&size=1250x600&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var EURJPYurl = 'http://quotes.esignal.com/esignalprod//esigchartspon?cont=RY+%23F&period=D&size=1250x600&bartype=CANDLE&bardensity=LOW&STUDY=VOI&STUDY0=1&STUDY1=1&showextendednames=true&random=' + rand;

      var $imgEURUSD = $('<img/>').attr('src', EURUSDurl);
      $('#EURUSD').html($imgEURUSD);

      var $imgUSDJPY = $('<img/>').attr('src', USDJPYurl);
      $('#USDJPY').html($imgUSDJPY);

      var $imgGBPUSD = $('<img/>').attr('src', GBPUSDurl);
      $('#GBPUSD').html($imgGBPUSD);

      var $imgEURJPY = $('<img/>').attr('src', EURJPYurl);
      $('#EURJPY').html($imgEURJPY);

    };

    reload();
    var timeSequence = B
      .interval(60000);

    timeSequence //数学世界
    .onValue(function() //物理世界にマッピングする＝計算（コンピューティング）
      {
        reload();
      });
  });
