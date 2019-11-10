const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error ('Unable to get puzzle');
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountry(location.country);
    return country;
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all');

    if (response.status === 200) {
        const data = await response.json();
        const country = data.find((c) => {
            return c.alpha2Code === countryCode;
        })
        return country;
    } else {
        throw new Error('Unable to get country');
    }    
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=ca7872b92a4897')
    if (response.status === 200) {
        const data = await response.json();
        const ipInfo = {
            city: data.city,
            region: data.region,
            country: data.country
        };
        return ipInfo;
    } else {
        throw new Error('Unable to get IP info')
    }
}

const getCountry_Old = countryCode => {
    return fetch('//restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('unable to fetch country info')
        }
    }).then(data => {
        const country = data.find(c => {
            return c.alpha2Code === countryCode;
        })
        return country;
    })
}

const  getPuzzle_Old = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('unable to fetch the puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    })
}

const getLocation_Old = () => {
    return fetch('http://ipinfo.io/json?token=ca7872b92a4897').then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('unable to fetch ip info');
        }
    }).then(data => {
        const ipInfo = {
            city: data.city,
            region: data.region,
            country: data.country
        };
        return ipInfo;
    })
}

export { getPuzzle as default }

/*
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const country = data.find(c => {
                return c.alpha2Code === countryCode
            })
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('Error occured');
        }
    });

    request.open('GET', 'http://restcountries.eu/rest/v2/all');
    request.send();
})

*/