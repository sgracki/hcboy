const request = require('request-promise')
const cheerio = require('cheerio')

function listTopDoctors(req, res, next) {
    const { profession, city, page = '' } = req.body

    request.get(`https://www.znanylekarz.pl/${profession}/${city}/${page}`)
    .then(body =>{
        console.log(page)
        const $ = cheerio.load(body)
        let doctorsData = {
            "name":[],
            "city":[],
            "street":[],
            "rating":[],
            "reviews":[]
        }

        $("[data-object-type = 'doctor']").each(function(i, elem) {
            doctorsData.name.push($("*[itemprop = 'name']", this).text())
            doctorsData.city.push($(".city", this).first().text())
            doctorsData.street.push($(".street", this).first().text())
            doctorsData.rating.push($(".rating", this).first().attr('data-score'))
            doctorsData.reviews.push($("span", ".rating", this).first().text().replace(/\D/g,''))
        })
        
        res.json(doctorsData)
    })
    .catch(next)
}

module.exports = {
    listTopDoctors
}