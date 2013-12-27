$(document).ready(function() {
  $('.example-countries .typeahead').typeahead(null, {
    name: 'countries',
    source: {
      limit: 10,
      prefetch: '../data/countries.json'
    }
  });

  $('.example-twitter-oss .typeahead').typeahead(null, {
    name: 'twitter-oss',
    source: {
      prefetch: '../data/repos.json'
    },
    templates: {
      suggestion: Handlebars.compile([
        '<p class="repo-language">{{language}}</p>',
        '<p class="repo-name">{{name}}</p>',
        '<p class="repo-description">{{description}}</p>'
      ].join(''))
    }
  });

  $('.example-arabic .typeahead').typeahead({
    hint: false
  },
  {
    name: 'arabic',
    source: {
      local: [
        "الإنجليزية",
        "نعم",
        "لا",
        "مرحبا",
        "کيف الحال؟",
        "أهلا",
        "مع السلامة",
        "لا أتكلم العربية",
        "لا أفهم",
        "أنا جائع"
      ]
    }
  });

  var nba = {
    name: 'nba-teams',
    source: {
      prefetch: '../data/nba.json'
    },
    templates: {
      header: '<h3 class="league-name">NBA Teams</h3>'
    }
  };

  var nhl = {
    name: 'nhl-teams',
    source: {
      prefetch: '../data/nhl.json'
    },
    templates: {
      header: '<h3 class="league-name">NHL Teams</h3>'
    }
  };

  $('.example-sports .typeahead').typeahead({ highlight: true }, nba, nhl);

  $('.example-films .typeahead').typeahead(null, {
    source: {
      remote: '../data/films/queries/%QUERY.json',
      prefetch: '../data/films/post_1960.json'
    },
    templates: {
      suggestion: Handlebars.compile(
        '<p><strong>{{value}}</strong> – {{year}}</p>'
      )
    }
  });

  var anExcitedSource = function(query, cb) {
    var results = $.map(['!', '!!', '!!!'], function(appendage) {
      var datum = { theValue: query + appendage };

      return datum;
    });

    cb(results);
  };

  $('.example-exclaimation .typeahead').typeahead(null, {
    valueKey: 'theValue',
    source: anExcitedSource
  });
});
