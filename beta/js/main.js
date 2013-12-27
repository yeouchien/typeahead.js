$(document).ready(function() {
  var haunt;

  $('.typeahead').typeahead(null, {
    name: 'repos',
    source: {
      prefetch: 'data/repos.json'
    },
    templates: {
      suggestion: Handlebars.compile([
        '<p class="repo-language">{{language}}</p>',
        '<p class="repo-name">{{name}}</p>',
        '<p class="repo-description">{{description}}</p>'
      ].join(''))
    }
  });

  haunt = ghostwriter.haunt({
    input: '#main-typeahead'
  , interval: 500
  , manuscript: [
      ghostwriter.noop
    , 'Boots'
    , ghostwriter.backspace.repeat(3)
    , 'wer'
    , ghostwriter.down.repeat(2)
    , ghostwriter.enter
    , ghostwriter.selectAll
    , 'FlIgHt'
    , ghostwriter.selectAll
    , 'type'
    , ghostwriter.right
    , ghostwriter.esc
    , ghostwriter.selectAll
    ]
  });

  $('.btn-demo').on('click', function(e) {
    e.stopPropagation();

    $(this).addClass('is-pressed');
    haunt.start();
  });

  $(document).on('click keydown', function(e) {
    !e.ghostwriter && haunt.pause();
  });
});
