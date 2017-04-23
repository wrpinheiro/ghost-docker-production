// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    production: {
        url: process.env.GHOST_URL,
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        },
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.GHOST_MAIL_USER,
                    pass: process.env.GHOST_MAIL_PASSWORD
                }
            },
            from: process.env.GHOST_MAIL_FROM
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(process.env.GHOST_CONTENT, '/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};

module.exports = config;
