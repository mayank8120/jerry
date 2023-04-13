export default {
    searchResult: {
        url: '/customer/getRecordsByAddress',
        method: "POST",
        data: {
            "addressObj": {
                "property_city": "",
                "property_county": "",
                "property_state": "",
                "property_zip": "",
                "property_street_display_address": ""
            },
            "page": 0,
            "pagination": 0
        }

    }
}
