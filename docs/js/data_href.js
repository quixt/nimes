    var dataHrefs = document.querySelectorAll('[data-href]');
    console.log(dataHrefs);
    dataHrefs.forEach(function(dataHref) {
        dataHref.setAttribute('title', dataHref.getAttribute('data-href'));
        dataHref.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = this.getAttribute('data-href');
        });

    });