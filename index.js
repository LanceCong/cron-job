/**
 * Created by lance on 16-3-21.
 */
//定义常量
const ONE_DAY = 24*60*60*1000;//one day.一天。

var date_util = {
    getToday:function(){
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        return Math.floor(today.getTime());
    }
    ,getThisMonth:function(){
        var today = new Date();
        today.setDate(0);
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        return Math.floor(today.getTime());
    }
    ,getNowTimestamp:function(){
        return Math.floor(new Date().getTime());
    }
};

var doJobBytimegap = function(job,timegap){
    job();
    setTimeout(function(){
        doJobBytimegap(job,timegap);
    },timegap);

};

var doJobEveryday = function(job){
    job();
    //and then do it every day
    setTimeout(function(){
        doJobEveryday(job)
    },ONE_DAY);

};


/**
 * 每天定时任务
 * @param targettime
 * @param job
 */
var startJobEveryDay = function(targettime, job){
    var timegap = targettime - date_util.getNowTimestamp();
    setTimeout(function(){
        doJobEveryday(job);
    },timegap);
};

var startJobEveryTimegap = function(start_timestamp, timegap, job){
    var timetogo = start_timestamp - date_util.getNowTimestamp();
    setTimeout(function(){
        doJobBytimegap(job,timegap);
    },timetogo);
};


module.exports = {
    startJobEveryDay:startJobEveryDay
    ,startJobEveryTimegap:startJobEveryTimegap
    ,date_util:date_util
    ,ONE_DAY:ONE_DAY
};