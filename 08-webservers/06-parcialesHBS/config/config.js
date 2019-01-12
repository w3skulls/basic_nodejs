/**
 * IMPORTACIÓN DE LIBRERÍAS
 */
const express = require('express');
const argv = require('yargs');
const colors = require('colors');
const hbs = require('hbs');

module.exports.CFG = {
    express,
    hbs,
    argv,
    colors
}