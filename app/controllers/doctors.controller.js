const request = require('request-promise')
const cheerio = require('cheerio')
const { specializations } = require('../static.data')

function listTopDoctors(req, res, next) {
    const { profession, city, page = '' } = req.body

    request.get(`https://www.znanylekarz.pl/${profession}/${city}/${page}`)
    .then(body => {
        const $ = cheerio.load(body)
        const doctorsData = []

        $("[data-object-type = 'doctor']").each(function(i, elem) {
            doctorsData.push({
                name: $("*[itemprop = 'name']", this).text(),
                city: $(".city", this).first().text(),
                street: $(".street", this).first().text(),
                rating: $(".rating", this).first().attr('data-score'),
                reviews: $("span", ".rating", this).first().text().replace(/\D/g,''),
                link: $(elem).find('span.avatar-style').attr('data-href'),
                image: $(elem).find('span.avatar-style').find('img').attr('src')
            })
        })
        
        res.json(doctorsData)
    })
    .catch(next)
}

function listPossibleSpecializations(req, res, next) {
    res.json(specializations)
}

module.exports = {
    listTopDoctors,
    listPossibleSpecializations
}