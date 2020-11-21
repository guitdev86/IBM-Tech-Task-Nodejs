var repository = require('../repository/repository');

exports.getFilteredData = async () => {
    let data = await repository.getData();
    let filteredData = [];

    if(data) {
        data.forEach(element => {
            filteredData.push(
                {
                    id: Number(element.vrt_id),
                    name: element.vrt_pav,
                    date: element.rink_data
                }
            )
        });
        return filteredData
    }
}

exports.sortByDate = data => {
    return data.sort(function(a, b) {
        return a.date.localeCompare(b.date);
    })
}