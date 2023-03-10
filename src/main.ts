import './styles/global.css'

function countdown() {
  let now = new Date();
  let eventDate = new Date(2023, 0, 1 );

  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  let s:any = Math.floor(remTime / 1000);
  let m:any = Math.floor(s / 60);
  let h:any = Math.floor(m / 60);
  let d:any = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.querySelector<HTMLDivElement>('#days')!.innerHTML = `${d}: `
  document.querySelector<HTMLDivElement>('#hours')!.innerHTML = `${h}: `
  document.querySelector<HTMLDivElement>('#minutes')!.innerHTML = `${m}: `
  document.querySelector<HTMLDivElement>('#seconds')!.innerHTML = `${s}`

  setTimeout(countdown, 1000);
}

countdown();


