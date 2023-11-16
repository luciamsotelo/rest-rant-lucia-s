const express = require("express");
const router = require("express").Router();

// GET /places
router.get('/new', (req, res) => {
    res.render('places/new')
});
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  

router.get("/", (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg', 
        // Photo by <a href="https://unsplash.com/@clemono?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clem Onojeghuo</a> on <a href="https://unsplash.com/photos/person-sitting-inside-restaurant-zlABb6Gke24?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

}, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
        // Photo by <a href="https://unsplash.com/@robertbye?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Robert Bye</a> on <a href="https://unsplash.com/photos/muffin-served-on-brown-paper-5LBIuI7c_ps?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

}]

    res.render('places/index', { places });
});

module.exports = router;
