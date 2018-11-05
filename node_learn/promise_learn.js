function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({name: 'nameabc'})
        })
    })
}

function getDData() {
    return new Promise((resolve, reject) => {
        const haha = {
            color: ['red', 'green'],
            age: ['11', '12']
        }

        resolve(haha)
    })
}

function fetch() {
    return new Promise((resolve, reject) => {
        resolve({fetchAnotherData: 'fetchAnotherData188', age: '18'})
    })
}


async function fetch2() {
    try {
        const data = await fetchData()
        if (data.name) {
            console.log('data.name: ' + data.name)
            const {fetchAnotherData, age} = await fetch()
            // const fetchAnotherData = await fetch()
            console.log('fetchAnotherData: ' + fetchAnotherData)
            console.log('age: ' + age)
            if (age === '18') {
                let getData = await getDData()
                console.log('getDData: ' + getData)
                return getData
            } else {
                throw new error('errorle')
            }
            return fetchAnotherData
        } else {
            console.log('else data: ' + data)
            return data
        }
    } catch (err) {
        console.log('catch error: ' + err)
    }

}

// fetch()
const resp = fetch2()
resp
    .then((data) => {
        console.log(data)
        const {color, age, time} = data
        console.log(color, age, time)
    })
    .catch(err => {
        console.log('resp err:' + err)
    })
