//without css
function handleWindowResize_no_css() {
    const currentWindowWidth = window.innerWidth;
    if (currentWindowWidth < 600) {
      document.body.style.backgroundColor = 'blue';
    } else if (currentWindowWidth >= 600 && currentWindowWidth < 1200) {
      document.body.style.backgroundColor = 'yellow';
    } else {
      document.body.style.backgroundColor = 'purple';
    }
  }
  
  //with css
  function handleWindowResize() {
    const currentWindowWidth = window.innerWidth;
    if (currentWindowWidth < 600) {
      // document.body.style.backgroundColor = "blue"
      document.body.classList.add('resized-below-600');
      document.body.classList.remove('resized-600-1200');
      document.body.classList.remove('resized-over-1200');
    } else if (currentWindowWidth >= 600 && currentWindowWidth < 1200) {
      // document.body.style.backgroundColor = "yellow"
      document.body.classList.add('resized-600-1200');
      document.body.classList.remove('resized-below-600');
      document.body.classList.remove('resized-over-1200');
    } else {
      //    document.body.style.backgroundColor = "purple"
      document.body.classList.add('resized-over-1200');
      document.body.classList.remove('resized-600-1200');
      document.body.classList.remove('resized-below-600');
    }
  }
  
  // window.addEventListener('resize', handleWindowResize_no_css);
  window.addEventListener('resize', handleWindowResize);
  handleWindowResize();
  