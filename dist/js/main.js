const mySiema = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: true,
    onInit: () => {},
    onChange: () => {},
  });
//document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
//document.querySelector('.next').addEventListener('click', () => mySiema.next());