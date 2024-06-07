const express = require("express");
const jobControllers = require("../controllers/jobs");

const router = express.Router();

router.post("/api/v1/add-job", jobControllers.addJob);
router.get("/api/v1/get-job-list", jobControllers.listJob);
router.put("/api/v1/:id", jobControllers.updateJob);
router.delete("/api/v1/:id", jobControllers.deleteJob);

module.exports = router;
