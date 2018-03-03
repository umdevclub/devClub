function makeGhCard(username, repo) {
    return '<div class="col-md-4"><iframe frameborder="0" scrolling="0" allowtransparency="true" src="https://cdn.jsdelivr.net/github-cards/1.0.2/cards/default.html?user=' + username + '&repo=' + repo + '"></iframe><script src="https://cdn.jsdelivr.net/github-cards/1.0.2/widget.js"></script></div>'
};

var projects = $.getJSON("js/projects.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        for(i = 0; i < val.length; i++){
            console.log(key + " " + val[i]);
            $("#projects").append(makeGhCard(key, val[i]));
        }
    });
});
