const Url = require('../model/Url');
const { nanoid } = require('nanoid');
const { urlLogger } = require('../log/logs');


class URLService {
    constructor() {
        this.urlRepo = Url;
    }

    getURL = async (url) => {
        const findUrl = await this.urlRepo.findOne({ orgurl: url });
        return findUrl;
    }

    shortenURL = async (url) => {
        try {
            const urlID = nanoid();
            const baseURL = process.env.BASE_URL;
            const result = await this.urlRepo.create({
                orgurl: url,
                shorturl: `${baseURL}/${urlID}`,
                urlId: urlID,
                createdAt: new Date()
            })
            urlLogger.info('New url shortened!', result)

            return await result.save();
        } catch (error) {
            urlLogger.error(error.message);
        }
    }

    getUrlId = async (id) => {
        return await this.urlRepo.findOne({
            urlId: id
        });
    }

    updateClicks = async (urlID) => {
        try {
            const result = await this.getUrlId(urlID);

            if (result) {
                await this.urlRepo.updateOne(
                    {
                      urlId: urlID,
                    },
                    { $inc: { clicks: 1 } }
                  );
            }
        } catch (error) {
            urlLogger.error(error.message);
        }
    }
}

module.exports = URLService;