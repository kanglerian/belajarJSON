function showAllMenu() {
    $.getJSON('pizza.json', function(data) {
        let menu = data.menu;
        $.each(menu, function(i, data) {
            $('#list').append('<div class="col-xl-3 mr-4 mb-3"><div class="card" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><a href="#" class="btn btn-primary">Rp' + data.harga + '</a></div></div></div>');
        });
    });
}

showAllMenu();

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All menu') {
        showAllMenu();
        return;
    }

    $.getJSON('pizza.json', function(data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data) {
            if (data.kategori == kategori) {
                content += '<div class="col-xl-3 mr-4 mb-3"><div class="card" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><a href="#" class="btn btn-primary">Rp' + data.harga + '</a></div></div></div>';
            }
        });

        $('#list').html(content);
    });


});