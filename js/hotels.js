$(document).ready(function () {

    $('#place-name').on('input change keyup', function () {
        $('.main-card-element').show().filter(function () {
            let rating = $('.input-rating:checked').attr('id').split('star')[1];
            let placeName = $('#place-name').val().toLowerCase();
            let hotelName = $(this).find('.hotel-name').text().toLowerCase();
            let price = $(this).find('.hotel-price').text().split('$')[1];
            let minPrice = Number($('.min-value').text().split('$')[0]);
            let maxPrice = Number($('.max-value').text().split('$')[0]);
            let hotelRating = $(this).find('.deal-rating .fa-star').length;
            if ((placeName == hotelName || placeName == "" || hotelName.includes(placeName)) && (price >= minPrice && price <= maxPrice) && (rating == hotelRating || rating == 1)) {
                return false
            } else {
                return true
            }
        }).hide();
    });
    $('#search').on('click', function () {
        $('.main-card-element').show().filter(function () {
            let rating = $('.input-rating:checked').attr('id').split('star')[1];
            let placeName = $('#place-name').val().toLowerCase();
            let hotelName = $(this).find('.hotel-name').text().toLowerCase();
            let price = $(this).find('.hotel-price').text().split('$')[1];
            let minPrice = Number($('.min-value').text().split('$')[0]);
            let maxPrice = Number($('.max-value').text().split('$')[0]);
            let hotelRating = $(this).find('.deal-rating .fa-star').length;
            if ((placeName == hotelName || placeName == "" || hotelName.includes(placeName)) && (price >= minPrice && price <= maxPrice) && (rating == hotelRating || rating == 1)) {
                return false
            } else {
                return true
            }
        }).hide();
    });
    function Favourites() {
        let test = '';
        let allFavSelected = $('.fav-selected');
        allFavSelected.each((index, ele) => {
            test += `<div>
                            <span>${$(ele).closest('.main-card-element').find('.hotel-name').text()}</span>
                    </div>`;
            $('#fav-choice').html(test)
        })


    }
    setTimeout(() => {
        $('.fav-star').on('click', function () {
            $(this).toggleClass('fav-selected');
            Favourites()
        });
    }, "400");


    $('.full').on('click', function () {
        setTimeout(() => {
            
            $('.main-card-element').show().filter(function () {
                let rating = $('.input-rating:checked').attr('id').split('star')[1];
                let placeName = $('#place-name').val().toLowerCase();
                let hotelName = $(this).find('.hotel-name').text().toLowerCase();
                let price = $(this).find('.hotel-price').text().split('$')[1];
                let minPrice = Number($('.min-value').text().split('$')[0]);
                let maxPrice = Number($('.max-value').text().split('$')[0]);
                let hotelRating = $(this).find('.deal-rating .fa-star').length;
                if ((placeName == hotelName || placeName == "" || hotelName.includes(placeName)) && (price >= minPrice && price <= maxPrice) && (rating == hotelRating || rating == 1)) {
                    return false
                } else {
                    return true
                }
            }).hide();
        }, "10");
    })
})