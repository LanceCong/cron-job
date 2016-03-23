# cron-job
node模块。功能是定时任务。cron job.Do something every day or at a specific time

# USAGE
> npm install cron-job

```js

var cronjob = require('cron-job');

var job = function(){
    console.log('do job...')
};

//do it after 5s,and do it every 3s
cronjob.startJobEveryTimegap(cronjob.date_util.getNowTimestamp()+5000,3000,job);

//do it at tomorrow's 0 o'clock,and do it every day
var tomorrowtimestamp = cronjob.date_util.getToday()+cronjob.ONE_DAY;//
cronjob.startJobEveryDay(tomorrowtimestamp,job);


```

# API
* startJobEveryTimegap(start_timestamp, timegap, job)
* startJobEveryDay(targettime, job)
* ONE_DAY:constant

> date_util:
* getToday():get today's 0 o'clock timestamp
* getThisMonth(): get this month's first day's 0 o'clock timestamp
* getNowTimestamp(): current timestamp