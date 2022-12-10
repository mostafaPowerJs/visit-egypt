import {Search} from './myClasses.js';


const emp = new Search('Alice', 30);


console.log(emp.name);


let myRequest = new Request('../json/packages.json');

console.log(myRequest);



fetch(myRequest)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        getMyData(data)
    })


function getMyData(data) {
    for (let unit of data) {
        $('#packages').append(` <div class="col-lg-6 main-card-element" id="package-${unit.id}">
        <div class="destination-item">
            <div class="destination-image p-2">
                <img src="images/packages/${unit.img}.jpg" alt="Image">
                <div class="destination-overlay"></div>
                <div class="destination-btn">
                    <a href="${unit.url}" class="btn-blue btn-red">Book Now</a>
                </div>
            </div>
            <div class="destination-content">
                <h3 class='d-flex' style='justify-content: space-around;'>
                    <span class="fa fa-star fav-star"></span>
                    <a href="tour-detail.html" class="package-name d-flex align-items-center">${unit.name}</a>
                    <span>
                        <img src="../images/agents/${unit.agentLogo}" class="img-agent-packages">
                    </span>
                </h3>
                
                <div class="deal-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-o"></span>
                    <span class="fa fa-star-o"></span>
                </div>
                <p><i class="flaticon-time"></i> ${unit.duration} days starts from <span class="bold package-price">$${unit.price}</span> </p>
            </div>
            <div class="sale-tag-2 tag-${unit.tag}-bg">
                <span class="old-price p-2">${unit.tag}</span>
            </div>
        </div>
    </div>
        `)
    }
}


$(document).ready(function () {
    $('#place-name').on('input change keyup', function () {
        $('.main-card-element').show().filter(function () {
            let placeName = $('#place-name').val().toLowerCase();
            let packageName = $(this).find('.package-name').text().toLowerCase();
            let price = $(this).find('.package-price').text().split('$')[1];
            let minPrice = Number($('.min-value').text().split('$')[0]);
            let maxPrice = Number($('.max-value').text().split('$')[0]);
            if ((placeName == packageName || placeName == "" || packageName.includes(placeName)) && (price >= minPrice && price <= maxPrice)) {
                return false
            } else {
                return true
            }
        }).hide()
    });
    $('#search').on('click', function () {

        $('.main-card-element').show().filter(function () {
            let placeName = $('#place-name').val().toLowerCase();
            let packageName = $(this).find('.package-name').text().toLowerCase();
            let price = $(this).find('.package-price').text().split('$')[1];
            let minPrice = Number($('.min-value').text().split('$')[0]);
            let maxPrice = Number($('.max-value').text().split('$')[0]);
            let ratingLength = $('.rating > input:checked ~ label').length;
            console.log(ratingLength);
            if ((placeName == packageName || placeName == "" || packageName.includes(placeName)) && (price >= minPrice && price <= maxPrice)) {
                return false
            } else {
                return true
            }
        }).hide()
    });
    setTimeout(() => {
        $('.fav-star').on('click', function () {
            $(this).toggleClass('fav-selected');
            console.log([...$('.fav-selected')]);
        });
    }, "400");

})

