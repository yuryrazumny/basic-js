module.exports = function createDreamTeam(members) {
  var teamtag = [];

  if (Array.isArray(members) != true) {
    return false;
  }

  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      teamtag.push(members[i].trim()[0].toUpperCase());
    }
  }

  return teamtag.sort().join('');
};