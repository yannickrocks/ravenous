const apiKey = '81qqV9vVu5wEIzMf2QVeq3J4c2BEf_OJYOeXBNZjbwHYdVOzBcfc8bYYobvVr1oUUTLUwFYxbZdOYz0xujr-jq1qmK4JCDh4PRm4MsbAYj-pCLun5sCuP-bx5w3-XnYx';

const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {headers: {
            Authorization:`Bearer ${apiKey}`
        }})
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
             if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business)
                   return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count
                   } 
                });
             }
        });
     }
 };

 export default yelp;