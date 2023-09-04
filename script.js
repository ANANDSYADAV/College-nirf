const populate = async (college) => {
    let str = "";
    url = "https://script.google.com/macros/s/AKfycbw3pno6cY65Jq9rKFFPwMp_KDQcdqxZ6cFD4xSNhDDezLa6x1ComZl06Wm_hA4wLmEP/exec?college=" + college;

    let response = await fetch(url);
    let result = await response.json();
    for (let item of Object.keys(result["data"])) {
        if (result["data"][item]["Rank"] != "Rank") {
            str += `
    <div class="card">
      <p class="card-title">Rank: ${result["data"][item]["Rank"]}</p>
      <p class="card-text">${result["data"][item]["Institute_Name"]}</p>
    <ul>
      <li>City: ${result["data"][item]["City"]}</li>
      <li>State: ${result["data"][item]["State"]}</li>
      <li>Score: ${result["data"][item]["Score"]}</li>
    </ul>
      <button onclick="window.open('${result["data"][item]["Website"]}')" class="btn">Visit</button>
    </div>
      `
        }
    }

    let out = document.querySelector(".output");
    out.innerHTML = str;
}

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const college = document.querySelector("input[name='college_name']").value;
    populate(college);
})