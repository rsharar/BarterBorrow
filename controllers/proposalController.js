const db = require("../db/models");

module.exports = {
    findAll: function (req, res) {
        db.Proposal.find(req.query)
            .then(dbProposal => res.json(dbProposal))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Proposal.findById(req.params.id)
            .then(dbProposal => res.json(dbProposal))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Proposal.create(req.body)
            .then(dbProposal => res.json(dbProposal))
            .catch(err => res.status(422).json(err));
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