const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
    const theHeader = document.createElement('div');
  const theDate = document.createElement('span');
  const theTitle = document.createElement('h1');
  const theTemp = document.createElement('span')
  // assign the attributes
  theHeader.classList.add('header');
  theDate.classList.add('date');
  theTemp.classList.add('temp');
  //assign the text
  theDate.textContent = date;
  theTitle.textContent = title;
  theTemp.textContent = temp;
  //create the heiarchy
  theHeader.appendChild(theDate);
  theHeader.appendChild(theTitle);
  theHeader.appendChild(theTemp);
  // console.log(theHeader)
  return theHeader
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper"))
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
    const headerElement = Header('BloomTech Times', 'Janurary 6, 2021','26°' )
  const entryPoint = document.querySelector(selector);
   entryPoint.appendChild(headerElement)
}

export { Header, headerAppender }
