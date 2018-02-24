var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

//GET all reviews for a hotel
module.exports.reviewsGetAll = function(req, res){

  var hotelId = req.params.hotelId;
  console.log('GET hotelId', hotelId);

  Hotel
    .findById(hotelId)
    .select('reviews') //seleziono solo quello che mi seve per non farmi vedere tutto il doc
    .exec(function(err, doc) {
      console.log("reviews", doc)
      res
        .status(200)
        .json(doc.reviews);
    });

};

//GET single review for a hotel
module.exports.reviewsGetOne = function(req, res){

    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;
    console.log('GET reviewId ' + reviewId + 'for hotelId' + hotelId);

    Hotel
      .findById(hotelId)
      .select('reviews') //seleziono solo quello che mi seve per non farmi vedere tutto il doc
      .exec(function(err, hotel) {
        console.log("reviews", hotel)
        var review =  hotel.reviews.id(reviewId)
        res
          .status(200)
          .json(review);
      });

};
