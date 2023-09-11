let number = 0;
let numberIncreaseSpeed = 1;
let increaseCost = 10;
let increaseCostIncrease = 2;
let increaseEffect = 1;
let increaseincreaseCost = 1000;
let increaseincreaseCostIncrease = 3;
let increaseincreaseEffect = 1;

function changeParagraph()
{
    document.getElementById('random paragraph').innerHTML += 'ya'
}

function showChanges()
{
    document.getElementById('number shower').innerHTML= number;
    document.getElementById('number increase').innerHTML = 'increase<br>cost=0<br>effect='+numberIncreaseSpeed;
    document.getElementById('increase increase').innerHTML = "increase 'increase'<br>cost="+increaseCost+'<br>effect='+increaseEffect;
    document.getElementById('increase increase increase').innerHTML = "increase 'increase increase'<br>cost="+increaseincreaseCost+'<br>effect='+increaseincreaseEffect;
}

function numberIncrease()
{
    number += numberIncreaseSpeed;
    showChanges();
}

function buyIncrease()
{
    if (number >= increaseCost)
    {
        number -= increaseCost;
        increaseCost += increaseCostIncrease;
        numberIncreaseSpeed += increaseEffect;
    }
    showChanges();
}

function buyIncreaseIncrease()
{
    if (number >= increaseincreaseCost)
    {
        number -= increaseincreaseCost;
        increaseincreaseCost += increaseincreaseCostIncrease;
        increaseEffect += increaseincreaseEffect;
    }
    showChanges();
}

let websites = {
    "google.com": 106500000000,
    "youtube.com": 94500000000,
    'microsoft.com': 1400000000,
    'linkedin.com': 1400000000,
    'apple.com': 665000000,
    'wikipedia.org': 7600000000,
    'cloudflare.com': 105300000,
    'whatsapp.com': 160000000
}

let idToWebsite = {
    'website1': '',
    'website2': ''
}

let score = 0;

function game()
{
    let indexA = Math.floor(Math.random() * Object.keys(websites).length);
    let indexB = Math.floor(Math.random() * Object.keys(websites).length);
    let siteA = Object.keys(websites)[indexA];
    let siteB = Object.keys(websites)[indexB];
    document.getElementById('website1').innerHTML = siteA;
    document.getElementById('website2').innerHTML = siteB;
    idToWebsite['website1'] = siteA;
    idToWebsite['website2'] = siteB;
    document.getElementById('visitors shower').innerHTML = '? | ?'
}

function pickSite(picked, unpicked)
{
    pickedSite = idToWebsite[picked];
    unpickedSite = idToWebsite[unpicked];

    pickedSiteVisitors = websites[pickedSite];
    unpickedSiteVisitors = websites[unpickedSite];

    if (pickedSiteVisitors >= unpickedSiteVisitors)
    {
        showVisitors(websites[idToWebsite['website1']], websites[idToWebsite['website2']]);
        score++;
        document.getElementById('score').innerHTML = 'score: ' + score;
    }
    else
    {
        score = 0;
        document.getElementById('score').innerHTML = 'score: ' + score;
        game();
    }
}

function showVisitors(visitors1, visitors2)
{
    document.getElementById('visitors shower').innerHTML = visitors1 + ' | ' + visitors2;
}

function nextRound()
{
    let randomChoice = Math.floor(Math.random() * 2) + 1;

    console.log(randomChoice)

    if (randomChoice == 1)
    {
        idToWebsite['website1'] = Object.keys(websites)[Math.floor(Math.random() * Object.keys(websites).length)];
        document.getElementById('website1').innerHTML = idToWebsite['website1'];
        let visitors2 = websites[idToWebsite['website2']];
        document.getElementById('visitors shower').innerHTML =  '? | ' + visitors2;
    }
    else
    {
        idToWebsite['website2'] = Object.keys(websites)[Math.floor(Math.random() * Object.keys(websites).length)];
        document.getElementById('website2').innerHTML = idToWebsite['website2'];
        let visitors1 = websites[idToWebsite['website1']];
        document.getElementById('visitors shower').innerHTML =  visitors1 + ' | ?';
    }
}

function printTextarea() {
    var textarea = document.getElementById('myTextarea');
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    var iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write('<html><head><title>Printed Page</title></head><body>');
    iframeDocument.write('<pre>' + textarea.value + '</pre>');
    iframeDocument.write('</body></html>');
    iframeDocument.close();

    iframe.contentWindow.focus();
    iframe.contentWindow.print();

    // Remove the iframe after printing is done
    setTimeout(function() {
      document.body.removeChild(iframe);
    }, 1000); // Adjust the delay if necessary
}

let pageNames = ["index.html", "tabler.html", "scripter.html", "former.html", "animetioner.html", "dom-activity-1.html", 'layoutit.html', 'card.html', 'booting.php'];
let currentPageIndex = 0;

function goToNextPage() 
{
  currentPageIndex++;
  if (currentPageIndex >= pageNames.length) 
  {
    currentPageIndex = 0;
  }
  let nextPageName = pageNames[currentPageIndex];
  window.location.assign(nextPageName);
}

function goToPreviousPage() 
{
  currentPageIndex--;
  if (currentPageIndex < 0) 
  {
    currentPageIndex = pageNames.length - 1;
  }
  let previousPageName = pageNames[currentPageIndex];
  window.location.assign(previousPageName + ".html");
}

function renderPagination() 
{
    let pagesContainer = document.querySelector('.pages');
  
    for (let i = 0; i < pageNames.length; i++) 
    {
      let pageLink = document.createElement('a');
      pageLink.href = pageNames[i] + '.html';
      pageLink.textContent = pageNames[i];
      pageLink.classList.add('page');
  
      if (i === currentPageIndex) {
        pageLink.classList.add('active');
      }
  
      pagesContainer.appendChild(pageLink);
    }
}

function changeColour()
{
    let element = document.getElementById('is-the-dot');

    if (element != null & changeColourIteration % 2 == 0)
    {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        let colour = `rgb(${r}, ${g}, ${b})`;

        element.style.backgroundColor = colour;
    }
    changeColourIteration++;
}

let changeColourIteration = 0;
document.addEventListener('animationiteration', changeColour);

document.addEventListener('click', function() {
    fetch('https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/master/master.txt')
    .then(response => response.text())
    .then(data => {
        const words = data.split('\n');
        let randomIndex = Math.floor(Math.random() * words.length);
        let randomWord = words[randomIndex];
        if (Math.floor(Math.random()*5) == 1)
        {
            window.open(`https://www.merriam-webster.com/dictionary/${randomWord}`, '_blank');
        }
    })
    .catch(error => console.error(error));
});

function showAlert()
{
    alert('are you ready');
    alert('for the craziness on this page');
    alert('yet');
}