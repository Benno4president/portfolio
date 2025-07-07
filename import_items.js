function importAndAppendItems() {
  
    fetch("https://raw.githubusercontent.com/Benno4president/portfolio/refs/heads/main/items/test.html")
        .then((res) => {res.text().then((text) => {console.log(text)})})
    return
    fetch(
    "https://api.github.com/repos/Benno4president/portfolio/contents/items/test.html"
  )
    .then((res) => res.json())
    .then((data) => {
      const decodedContent = atob(data.content.replace(/\n/g, ""));
      console.log(decodedContent);
    });
}
