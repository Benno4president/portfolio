$(document).ready(function() {
  let list_of_items = '';
  let list_of_letters = '';
  let prev_letter = '';

  for (let i in files) {
    let url = files[i];

    // skip underscore
    if (url[0] === '_') {
      continue;
    }

    // create anchor and name from url
    let anchor = url.replace('.md', '');
    let name = anchor.split('-').join(' ');

    // if the first letter of the recipe hasn't been
    // seen yet, add to list of letters and put an achor in
    let firstLetter = name.charAt(0).toUpperCase();
    if (firstLetter !== prev_letter) {
      list_of_items += '<li id="' + firstLetter + '">';
      list_of_letters += '<a href="#' + firstLetter + '">' + firstLetter + ' </a>';
    }
    else {
      list_of_items += '<li>';
    }

    list_of_items += '<a href="item.html#' + anchor + '">' + name + '</a></li>';
    prev_letter = firstLetter;
  }

  // add recipes to page...
  $('#toc ul').html(list_of_items);

  // ...and the list of first-letters for quick nav
  $('#navigation').html(list_of_letters);
});
