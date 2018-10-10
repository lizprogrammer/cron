var CronJob = require("cron").CronJob;

var bark = num => {
  const barkWorker = new CronJob(
    "*/" + num + " * * * * *",
    function() {
      //this.stop();
      let total = 0;
      //for (let i = 0; i < num; i++) {
      //  console.log("Bark");
      //}
      console.log("Bark");
    },
    null,
    false,
    "America/New_York"
  );
  barkWorker.start();
};






module.exports = bark;