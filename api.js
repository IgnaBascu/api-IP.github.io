const options = {
  method: "GET",  
  headers: {
    "X-RapidAPI-Key": "02e7e88ee3msh1c947dacee57348p1aaa4cjsn8637fc5640f0",
    "X-RapidAPI-Host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
  },
};

const getInfoIp = ip => {
  return fetch(
    `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const form = document.querySelector("#form");
const ip = document.querySelector("#ip");
const submit = document.querySelector("#submit");
const info = document.querySelector("#info");



// function Validate_It(IP) {
//   const flag = true;

//   // Regex expression for validating IPv4
//   let ipv4 =
//     /(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/;

//   // Regex expression for validating IPv6
//   let ipv6 = /((([0-9a-fA-F]){1,4})\:){7}([0-9a-fA-F]){1,4}/;

//   // Chequear IPv4
//   if (IP.match(ipv4)) return (flag = true & "IPv4 válida");
//   // Chequear IPv6
//   else if (IP.match(ipv6)) return (flag = true & "IPv6 válida");

//   // Return inválida
//   return (flag = false & alert("IP inválida"));
// }

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita que se recargue la página
  const { value } = ip;
//   Validate_It(value);

//   if (flag == false) return;

  submit.setAttribute("disabled", "");
  submit.setAttribute("aria-busy", true);

  const infoIP = await getInfoIp(value);

  if (infoIP) {
    info.innerHTML = JSON.stringify(infoIP, null, 2);
  }

  submit.removeAttribute("disabled");
  submit.removeAttribute("aria-busy");
});
