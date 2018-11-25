const request = require('request-promise')
const cheerio = require('cheerio')
const { specializations } = require('../static.data')

function latLonToCity(lat, lon) {
    return request(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=c50d238e4a2d4ade97f0942183daf19c&language=pl`)
    .then(data => JSON.parse(data).results[0].components.city)
}

function listTopDoctors(req, res, next) {
    const { profession, page = '', lat, lon } = req.body

    latLonToCity(lat, lon)
    .then(cityName => request.get(`https://www.znanylekarz.pl/${profession.split(', ').join('-').split(' ').join('-').replace('ę', 'e')}/${encodeURIComponent(cityName.toLowerCase())}/${page}`))
    .then(body => {
        const $ = cheerio.load(body)
        const doctorsData = []

        $("[data-object-type = 'doctor']").each(function(i, elem) {
            doctorsData.push({
                name: $("*[itemprop = 'name']", this).text(),
                city: $(".city", this).first().text(),
                street: $(".street", this).first().text(),
                rating: parseInt($(".rating", this).first().attr('data-score')),
                reviews: parseInt($("span", ".rating", this).first().text().replace(/\D/g,'')),
                link: $(elem).find('span.avatar-style').attr('data-href'),
                image: $(elem).find('span.avatar-style').find('img').attr('data-src') || $(elem).find('span.avatar-style').find('img').attr('src')
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