var conf = {};

exports.get = function (key, defaultVal) {
	if (conf.hasOwnProperty(key)) {
		return conf[key];
	}
	return defaultVal;
};

exports.set = function (key, val) {
	conf[key] = val;
};