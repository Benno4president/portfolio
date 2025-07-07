function importAndAppendItems() {
  fetch(
    "https://api.github.com/repos/Benno4president/portfolio/contents/items/test.html"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
