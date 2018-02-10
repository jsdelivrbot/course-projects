var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id" + id + "&client_secrect" + sec;

function getProfile (username) {
  return axios.get('https://api.github.com/users' + username + params)
    .then(function (user) {
      return user.data;
    });
}

// getProfile('tylermcginnis')
//   .then(function (data) {
//
//   })

function getRepos (username) {
  return axios.get('https://api.github.com/users' + username + '/repos' + params + '&per_page=100')
}

// Take repos.data - reduce all of it to a single number
function getStarCount (repos) {
  return repos.data.reduce(function (count, repo) {
    return count + repo.stargazers_count;
  }, 0)
}

function calculateScore (profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError (error) {
  console.warn(error);
  return null;
}

// compose functions
function getUserData (player) {
  return axios.all([
    // get player profile info
    getProfile(player),
    // get player repos
    getRepos(player)
  ]).then(function (data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

function sortPlayers (players) {
  // item in first array is the winner
  return players.sort(function (a,b) {
    return b.score - a.score;
  });
}


// api.battle(['tyler', 'ean'])
//   .then(function (players) {
//     players[0]
//   })

module.exports = {
  battle: function (players) {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },

  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
}
