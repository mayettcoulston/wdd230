const baseURL = "https://mayettcoulston.github.io/wdd230/";
const linksURL = "https://mayettcoulston.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  }
  
  getLinks();

  const displayLinks = (weeks) => {

    weeks.forEach((week) => {
        let section = document.createElement('section');
        let heading = document.createElement('h3');
        let ul = document.createElement('ul');

        heading.textContent = week.week;
        section.appendChild(heading);

        week.links.forEach((link) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', link.url);
            a.textContent = link.title;
            a.setAttribute('target', '_blank');

            li.appendChild(a);
            ul.appendChild(li);
        });

        section.appendChild(ul);
        container.appendChild(section);
    });
};