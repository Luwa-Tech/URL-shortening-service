const Url = require('../model/Url');
const nanoid = require('nanoid');
const logs = require('../log/logs');


class URLService {
    constructor () {
        this.urlRepo = Url;
    }

    getURL = async (url) => {
        const url = await this.urlRepo.findOne({orgurl: url});
        return url;
    }

    shortenURL = async (url) => {
        try {
            const shortUrlID = nanoid();
            const baseURL = process.env.BASE_URL;
            const result = await this.urlRepo.create({
                orgurl: url,
                shorturl: `${baseURL}/${shortUrlID}`,
                clicks: 0
            })

            return result;
        } catch (error) {
            logs.urlLogger.error(error.message);
            throw new Error(error.message);
            return;
        }
    }
}

module.exports = URLService;