'use strict';
const mongoose = require('mongoose');
const zoneTypeSchema = new mongoose.Schema({
        isActive: Boolean,
        name: String,
        createdOn: String,
        createdBy: String,
        modifiedOn: String,
        modifiedBy: String
    },
    {
        minimize: false,
        versionKey: false
    });

module.exports = {
    'model': mongoose.model('ZoneType', zoneTypeSchema)
}
