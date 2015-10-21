var conf = {};

exports.get = function (key, defaultVal) {
	if (conf.hasOwnProperty(key)) {
		return conf[key];
	}
	return defaultVal || undefined;
};

exports.set = function (key, val) {
	conf[key] = val;
};