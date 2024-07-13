const usernameIs = document.getElementById("username");
const btnIs = document.getElementById("btn");
const resultsAre = document.getElementById("results");

btnIs.addEventListener("click", async () => {
  const usernameVal = usernameIs.value;
  const response = await fetch(`https://api.github.com/users/${usernameVal}`);
  const data = await response.json();
  console.log(response);
  console.log(data);

  resultsAre.innerHTML = userHtml(data);
});

const userHtml = (data) => {
  const htmlIs = `
  <div class="user-card"><div class="head d-flex center">
  <img src="${data.avatar_url}" alt="${data.name}" class="photo">
  <div class="d-flex between w-100 sub">
      <div>
          <h1 class="name fw-bold">${data.name}</h1>
          <a href="${data.html_url}" class="username" target="_blank">@${
    data.login
  }</a>
      </div>
      <p class="joined">Joined ${data.created_at.toString().split("T")[0]}</p>
  </div>
</div>
<div class="details">
  <p class="bio">${data.bio}</p>
  <ul class="card d-flex between center">
      <li>
          <h6 class="mb-5">Repos</h6>
          <span class="fw-bold">${data.public_repos}</span>
      </li>
      <li>
          <h6 class="mb-5">Followers</h6>
          <span class="fw-bold">${data.followers}</span>
      </li>
      <li>
          <h6 class="mb-5">Following</h6>
          <span class="fw-bold">${data.following}</span>
      </li>
  </ul>
  <div class="links d-flex between">
      <ul>
          <li>
              <i class="fas fa-fw fa-map-marked-alt"></i>
              <span>-</span>
          </li>
          <li>
              <i class="fas fa-fw fa-link"></i>
              <span>-</span>
          </li>
      </ul>
      <ul>
          <li>
              <i class="fab fa-fw fa-twitter"></i>
              <span>-</span>
          </li>
          <li>
              <i class="fas fa-fw fa-building"></i>
              <span>-</span>
          </li>
      </ul>
  </div>
</div>
  </div>
  `;
  return htmlIs;
};
