const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const date = new Date().getFullYear().toString();
	console.log(method, url, date);
	next();
};

const printSomething = (req, res, next) => {
    console.log('Print something middleware');
    next();
};

module.exports = {logger, printSomething};