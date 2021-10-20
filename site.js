(function() {
  let root = document.documentElement;

  function clearFrames() {
    document.body.classList.remove('hg-frame--1');
    document.body.classList.remove('hg-frame--2');
    document.body.classList.remove('hg-frame--3');
    document.body.classList.remove('hg-frame--4');
    document.body.classList.remove('hg-frame--5');
    document.body.classList.remove('hg-frame--6');
    document.body.classList.remove('hg-frame--7');
    document.body.classList.remove('hg-frame--8');
    document.body.classList.remove('hg-frame--9');
    document.body.classList.remove('hg-frame--10');
    document.body.classList.remove('hg-frame--11');
    document.body.classList.remove('hg-frame--12');
    document.body.classList.remove('hg-frame--13');
  }

  function setFrame(frameClass) {
    clearFrames();
    document.body.classList.add(frameClass);
  }

  document.getElementsByClassName("hg-col--frame-1")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--1');
  });
  document.getElementsByClassName("hg-col--frame-2")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--2');
  });
  document.getElementsByClassName("hg-col--frame-3")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--3');
  });
  document.getElementsByClassName("hg-col--frame-4")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--4');
  });
  document.getElementsByClassName("hg-col--frame-5")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--5');
  });
  document.getElementsByClassName("hg-col--frame-6")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--6');
  });
  document.getElementsByClassName("hg-col--frame-7")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--7');
  });
  document.getElementsByClassName("hg-col--frame-8")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--8');
  });
  document.getElementsByClassName("hg-col--frame-9")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--9');
  });
  document.getElementsByClassName("hg-col--frame-10")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--10');
  });
  document.getElementsByClassName("hg-col--frame-11")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--11');
  });
  document.getElementsByClassName("hg-col--frame-12")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--12');
  });
  document.getElementsByClassName("hg-col--frame-13")[0].addEventListener("mouseenter", e => {
    setFrame('hg-frame--13');
  });

})();
