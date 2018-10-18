const sh = require('child_process')
const sleep = require('sleep')
const fs = require('fs')

const interval = 120

// get gets.json
let gets = require('./gets.json').urls
// get gots.json
let gots = require('./gots.json').urls
// pull gots from gets
// https://stackoverflow.com/questions/14930516/compare-two-javascript-arrays-and-remove-duplicates#14930567
gets = gets.filter(val => !gots.includes(val))
let newGets = JSON.parse(JSON.stringify(gets))

// iterate thru gets
gets.forEach((item, index)=>{
	// get item
	getURL(item)
	// add item to gots
	gots.push(item)
	fs.writeFileSync('./gots.json', JSON.stringify({ urls: gots }), 'utf8', ()=>{});
	// remove item from gets
	newGets.splice(newGets.indexOf(item),1)
	fs.writeFileSync('./gets.json', JSON.stringify({ urls: newGets }), 'utf8', ()=>{});
	// wait
	sleep.sleep(interval)
})

function getURL(URL) {
	console.log(URL)
	sh.exec('open ' + URL, (error, stdout, stderr) => {
	  if (error) {
	    console.error(`exec error: ${error}`);
	    return;
	  }
	  console.log(`stdout: ${stdout}`);
	  console.log(`stderr: ${stderr}`);
	})
}