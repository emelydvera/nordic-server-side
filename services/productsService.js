/**
 * Ejercitación integradora:
 * En este archivo deberás crear el servicio.
 *
 ********************************************
 * Una vez creado, deberás correr el comando 
 * `npm run test:unit:watch products-service`
 * y corroborrar que pasen los tests.
 ********************************************
 */
const restclient = require('nordic/restclient')({
    timeout: 5000
});

class ServiceProduct {
    static getProducts( name, siteID, limit) {
        return restclient.get(`/sites/${siteID}/search?q=${name}&limit=${limit}`)
            .then(res => res.data.results)
            .catch( err=> console.log(err))
    }
}

module.exports = ServiceProduct;