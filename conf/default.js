/**
 * this is your configuration file defaults.
 *
 * You can create additional configuration files to that the server will load based on your
 * environment.  For example, if you want to have specific settings for production which are different
 * than your local development environment, you can create a production.js and a local.js.  Any changes
 * in those files will overwrite changes to this file (a object merge is performed). By default, your
 * local.js file will not be commited to git or the registry.
 *
 * This is a JavaScript file (instead of JSON) so you can also perform logic in this file if needed.
 */
module.exports = {
	// these are your generated API keys.  They were generated uniquely when you created this project.
	// DO NOT SHARE these keys with other projects and be careful with these keys since they control
	// access to your API using the default configuration.  if you don't want two different keys for
	// production and test (not recommended), use the key 'apikey'.  To simulate running in production,
	// set the environment variable NODE_ENV to production before running such as:
	//
	// NODE_ENV=production appc run
	//
	// production key, this is the key that will be required when you are running in production
	apikey_production: '7G5qOtwRpRcc3y7916NefKV732B67vvj',
	// development key, this is the key that will be required when you are testing non-production (such as locally)
	apikey_development: 'I2yyO88Zrrk1GGNAYS0cCE90PIMvPQbU',
	// preproduction key, this is the key that will be required when you are testing non-production (such as locally)
	apikey_preproduction: '6SAcefEoqdjEpU0pWX0ebee0YDNRRoMQ',

	// by default the authentication strategy is 'basic' which will use HTTP Basic Authorization where the
	// usename is the key and the password is blank.  the other option is 'apikey' where the value of the
	// APIKey header is the value of the key.  you can also set this to 'plugin' and define the key 'APIKeyAuthPlugin'
	// which points to a file or a module that implements the authentication strategy
	APIKeyAuthType: 'basic',

	// The number of milliseconds before timing out a request to the server.
	timeout: 120000,

	// logging configuration
	logLevel: 'debug', // Log level of the main logger.
	logging: {
		// location of the logs if enabled
		logdir: './logs',
		// turn on transaction logs
		transactionLogEnabled: true,
		// turn on adi logging of transaction logs
		adiLogging: false
	},

	// prefix to use for apis
	apiPrefix: '/api',

	// control the settings for the admin website
	admin: {
		// control whether the admin website is available
		enabled: true,
		// the prefix for the API documentation
		apiDocPrefix: '/apidoc',
		// if you set disableAPIDoc, in production your swagger API docs will not show up
		disableAPIDoc: false,
		// The hostnames or IPs from which connections to admin are allowed. Hostnames must be resolvable on the
		// server. IP ranges can also be specified. e.g. [ 'localhost', '192.168.1.0/24', '10.1.1.1' ]
		// An empty list [] will allow unrestricted access, though this is not recommended due to security concerns.
		allowedHosts: [
			'localhost', '::1'
		],
		// set the email addresses you want to be able to log in to the admin website
		validEmails: ["uhitzel@axway.com"],
		// set the organization ids you want to be able to log in to the admin website
		validOrgs: [100000142]
	},

	// you can generally leave this as-is since it is generated for each new project you created.
	session: {
		encryptionAlgorithm: 'aes256',
		encryptionKey: '6jAwDPdKvr0I64bQxaRtOIBsPKK8SvjQ0m5Xumz52pw=',
		signatureAlgorithm: 'sha512-drop256',
		signatureKey: '0xdJHjwDNEmBEdT3fowS3Dr9Cjtn5eU0Y4AlCnJ3PlMXn4/gV1GV6yKZa9I+HR8DfFsTrSNBBrpf44Ki7qa29Q==',
		secret: 'UbmTDQr8UaUO2jQH0e8U81RB7OR1ntJ4', // should be a large unguessable string
		duration: 86400000, // how long the session will stay valid in ms
		activeDuration: 300000 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
	},

	// if you want signed cookies, you can set this value. if you don't want signed cookies, remove or make null
	cookieSecret: 'dZSGrSnieQ3QVqMdZ6/MlaOsmwnQxXdq',

	serialization: {
		// Here for backwards compatibility with older arrow apps. When you set this to
		// true, a model's primary key will always be exposed under 'id' instead of it's
		// actual name
		exposePrimaryKeyAsId: false
	},

	// your connector configuration goes here
	connectors: {
	},

	// the date and time format to be used for admin-ui. Default is 'yyyy:mm:dd, HH:MM:ss.l'
	// reference: https://github.com/felixge/node-dateformat
	dateTimeFormat: 'yyyy-mm-dd, HH:MM:ss.l',

	// cross-origin-resource-sharing settings
	cors: {
		// list of allowed origins (format: any, space separated string, array or regex)
		// 'Access-Control-Allow-Origin': '*' or 'http://foo.com http://bar.com' or ['http://foo.com', 'http://bar.com'] or /foo\.com$/,

		// 'Access-Control-Allow-Credentials': true/false,

		// only these methods will be allowed out of all available methods for an endpoint. All available methods are allowed by default
		// (format: comma separated string or, an array)
		// 'Access-Control-Allow-Methods': 'GET' or 'GET, PUT' or ['GET', 'PUT'],

		// allowed request headers (format: comma separated string or, an array)
		// 'Access-Control-Allow-Headers': 'content-type, authorization' or ['content-type', 'authorization']

		// list of response headers exposed to the user. Always exposed headers: request-id, response-time and any headers defined in the endpoint
		// (format: comma separated string or, an array)
		// 'Access-Control-Expose-Headers': 'content-type, response-time' or ['content-type', 'response-time']
	}
};
