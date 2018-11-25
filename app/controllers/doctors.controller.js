const request = require('request-promise')
const cheerio = require('cheerio')

function listTopDoctors(req, res, next) {
    const { profession, city, page = '' } = req.body

    request.get(`https://www.znanylekarz.pl/${profession}/${city}/${page}`)
    .then(body =>{
        console.log(page)
        const $ = cheerio.load(body)
        let doctorsData = []

        $("[data-object-type = 'doctor']").each(function(i, elem) {
            doctorsData.push({
                name: $("*[itemprop = 'name']", this).text(),
                city: $(".city", this).first().text(),
                street: $(".street", this).first().text(),
                rating: $(".rating", this).first().attr('data-score'),
                reviews: $("span", ".rating", this).first().text().replace(/\D/g,''),
            })
        })
        
        res.json(doctorsData)
    })
    .catch(next)
}

module.exports = {
    listTopDoctors
}