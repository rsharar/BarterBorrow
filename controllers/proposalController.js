const db = require("../db/models");

module.exports = {
    findAllWithUserId: function (req, res) {
        db.Proposal.find({ userIdA: req.params.userId })
            .then(dbProposal => res.json(dbProposal))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Proposal.findById(req.params.id)
            .then(dbProposal => res.json(dbProposal))
            .catch(err => res.status(422).json(err));
    },
    create: function (req) {
        return db.Proposal.create(req)
            .then(dbProposal => {
                return dbProposal
            })
            .catch(err => console.log(err));
    },
    update: function (req, res) {
        db.Proposal.findByIdAndUpdate({ id: req.params.id }, req.body)
            .then(dbProposal => res.json(dbProposal))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Proposal.findById(req.params.id)
            .then(dbProposal => dbProposal.remove())
            .then(dbProposal => res.json(dbProposal))
            .catch(err => res.status(422).json(err));
    }
};