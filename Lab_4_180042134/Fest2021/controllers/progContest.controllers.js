const ProgContest = require("../models/ProgContest.model");
const mailer = require("../Util/mailer");
const generateKey = require("../Util/generateKey");

const getPC = (req, res) => {
  res.render("prog-contest/registerTeam.ejs", { error: req.flash("error") });
};

const postPC = (req, res) => {
  const {
    teamName,
    institute,
    coachName,
    coachContact,
    coachEmail,
    coachTshirt,
    TLName,
    TLContact,
    TLEmail,
    TLtshirt,
    TM1Name,
    TM1Contact,
    TM1Email,
    TM1tshirt,
    TM2Name,
    TM2Contact,
    TM2Email,
    TM2tshirt,
  } = req.body;

  const total = 800;
  const paid = 0;
  const selected = false;
  let error = "";

  ProgContest.findOne({ teamName: teamName, institute: institute }).then(
    (team) => {
      if (team) {
        error = "Team with this name and institution already exists!";
        req.flash("error", error);
        res.redirect("/ProgContest/register");
      } else {
        let key = generateKey();
        const participant = new ProgContest({
          teamName,
          institute,
          coachName,
          coachContact,
          coachEmail,
          coachTshirt,
          TLName,
          TLContact,
          TLEmail,
          TLtshirt,
          TM1Name,
          TM1Contact,
          TM1Email,
          TM1tshirt,
          TM2Name,
          TM2Contact,
          TM2Email,
          TM2tshirt,
          total,
          paid,
          selected,
          key,
        });
        participant
          .save()
          .then(() => {
            mailer(coachEmail, "Programming Contest", key, coachName);
            mailer(TLEmail, "Programming Contest", key, TLName);
            mailer(TM1Email, "Programming Contest", key, TM1Name);
            mailer(TM2Email, "Programming Contest", key, TM2Name);
            error = "Team has been registered successfully!";
            req.flash("error", error);
            res.redirect("/ProgContest/register");
          })
          .catch(() => {
            error = "An unexpected error occured!";
            console.log("error ", error);
            req.flash("error", error);
            res.redirect("/ProgContest/register");
          });
      }
    }
  );
};

const getPCList = (req, res) => {
  let all_participant = [];
  let error = "";
  ProgContest.find()
    .then((data) => {
      all_participant = data;
      res.render("prog-contest/teamList.ejs", {
        error: req.flash("error"),
        participants: all_participant,
      });
    })
    .catch(() => {
      error = "Failed to fetch data";
      res.render("prog-contest/teamList.ejs", {
        error: req.flash("error", error),
        participants: all_participant,
      });
    });
};
const deletePC = (req, res) => {
  const id = req.params.id;

  let error = "";
  ProgContest.deleteOne({ _id: req.params.id })
    .then(() => {
      error = "";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    })
    .catch(() => {
      error = "Failed to delete data!";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

const paymentDonePC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.paid = participant.total;
      participant
        .save()
        .then(() => {
          let error = "Payment completed succesfully!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

const selectPC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.selected = true;
      participant
        .save()
        .then(() => {
          let error = "Team has been selected succesfully!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

module.exports = {
  getPC,
  postPC,
  getPCList,
  deletePC,
  paymentDonePC,
  selectPC,
};
