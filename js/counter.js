$(document).ready(function() {
    $('#minus').on('click', function() {
        var members = $('#member').val();
        decreaseMember(members);
    });
    $('#add').on('click', function() {
        var members = $('#member').val();
        increaseMember(members);
    });
});

function decreaseMember (minus) {
    var member = parseInt(minus) - 1;
    if(member >= 0) {
      $('#member').val(member);
    }
}

function increaseMember(add) {
    var members = parseInt(add) + 1;
    if(members <= 15) {
        $('#member').val(members);
    }
}
