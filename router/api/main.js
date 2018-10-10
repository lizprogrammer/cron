const express = require("express");
const router = express.Router();
const mainWorker = require("../../workers/mainWorker");
const barkWorker = require("../../workers/barkWorker");
const addRandomNumbers = require("../../workers/adderWorker");

/// route: GET /api/main/
router.get("/", (req, res) => res.json({ status: "success" }));

router.get("/start", (req, res) => {
  if (mainWorker.running) {
    return res.json({ status: "already running" });
  }
  mainWorker.start();
  res.json({ status: "started worker" });
});

router.get("/stop", (req, res) => {
  if (!mainWorker.running) {
    return res.json({ status: "Worker not running" });
  }
  mainWorker.stop();
  res.json({ status: "Worker stopped" });
});

router.get("/barker/start", (req, res) => {
  //if (!barkWorker.running) {
  //  return res.json({ status: "Barker is running" });
  //}
  barkWorker.start();
  res.json({ status: "Barker started" });
});

router.get("/barker/stop", (req, res) => {
  //if (!barkWorker.running) {
  //  return res.json({ status: "Worker is not running" });
  //}
  barkWorker.stop();
  res.json({ status: "Worker stopped" });
});

router.get("/adder/:num", (req, res) => {
  addRandomNumbers(parseInt(req.params.num, 10));
  res.json({ status: "ran the worker check console." });
});

router.get("/barker/:num", (req, res) => {
  barkWorker(parseInt(req.params.num, 10));
  res.json({ status: "ran the worker check console." });
});



module.exports = router;
