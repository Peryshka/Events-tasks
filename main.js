/*
1) Дан массив из объектов с полями title и text. Заполните массив сами произвольными данными.
 Ваша задача отрисовать данные на странице в соответствующих тегах (h2 - для title, p - для text)
*/
// const articles = [
//   {title: 'WCNC', text: 'Israel plans to maintain security in Gaza indefinitely, Netanyahu says'},
//   {title: 'ABC News', text: 'Brazilian police search Portugal\'s Consulate in Rio de Janeiro for a corruption investigation'},
//   {title: 'BBC News', text: 'King Charles III delivers first King’s Speech in more than 70 years to UK parliament - BBC News'},
//   {title: 'Hindustan Times', text: 'Iran\'s Raisi Wants PM Modi\'s Help To End Israel\'s War In Gaza | \'India Is Expected To Use...'},
//   {title: 'Daily Beast', text: 'Ahed Tamimi, 22, was detained as Gaza health officials said over 10,000 have died in Israeli attacks.'},
//   {title: 'Reuters', text: 'Turkish parliament dumps Coke, Nestle from menus over alleged Israel support'},
//   {title: 'Politico', text: 'Poland’s Duda nominates Morawiecki in no-hope bid to form a new government'},
//   {title: 'CNA', text: 'China and Australia agree to build trust, overcome differences'}
// ];
//
// articles.forEach((item,idx, array) => {
//   let title = document.createElement('h2');
//   let text = document.createElement('p');
//     title.textContent = item.title;
//     text.textContent = item.text;
//     document.body.append(title);
//     document.body.append(text);
// });

/*
2) Дан элемент. Сделайте так,
 чтобы по клику на него он красился в красный цвет,
  но только если в момент клика нажата клавиша Ctrl
*/
// const redBlock = document.getElementById('redBlock');
// redBlock.addEventListener('click',function(e) {
//   if(e.ctrlKey) {
//     redBlock.style.backgroundColor='red';
//   }
// });




