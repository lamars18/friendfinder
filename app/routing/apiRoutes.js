var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {


        var perfectMatch = {
            name: "",
            photo: "",
            difference: 999
        };

        var userData = req.body;
        var userScores = userData.scores;

        for (var i = 0; i < friendsData.length; i++) {

            totalDifference = 0;

            for (var j = 0; j < friendsData[i].scores[j]; j++) {

                totalDifference += Math.abs(userScores[j] - friendsData[i].scores[j]);

                if (totalDifference <= perfectMatch.difference) {

                    perfectMatch.name = friendsData[i].name;
                    perfectMatch.photo = friendsData[i].photo;
                    perfectMatch.difference = totalDifference;
                }
            }
        }

        friendsData.push(userData);

        res.json(perfectMatch);

    });

}