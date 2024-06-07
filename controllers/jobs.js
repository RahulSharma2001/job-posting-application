const jobModel = require("../models/jobs");

const addJob = async (req, res) => {
  const job = req.body;
  const newJob = new jobModel(job);
  await newJob.save();
  res.json({
    message: "Job Added Successfully :)",
  });
};

const updateJob = async (req, res) => {
  const updatedJobData = req.body;
  const jobId = req.params.id;
  try {
    const newJob = await jobModel.findByIdAndUpdate(jobId, updatedJobData, {
      new: true,
    });
    res.json({
      message: "Job Updated Successfully :)",
      UpdatedJob: newJob,
    });
  } catch (e) {
    res.json({
      message: "Error Occured :(",
    });
  }
};

const listJob = async (req, res) => {
  try {
    const jobList = await jobModel.find();
    res.json({
      allJobs: jobList,
    });
  } catch (e) {
    res.json({
      message: "Error occured",
    });
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedJob = await jobModel.findByIdAndDelete(id);
    res.json({
      message: "Deleted Job Successfully",
      deleted: deletedJob,
    });
  } catch (e) {
    res.json({
      message: "Error Occured",
    });
  }
};

const jobControllers = {
  addJob,
  updateJob,
  listJob,
  deleteJob,
};

module.exports = jobControllers;
