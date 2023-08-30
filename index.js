let isShowAll = false;
let isLoading = true;
const loadData = async () => {
  isLoading = true;
  if (isLoading) {
    const spinner = document.getElementById("loading-spinner");
    spinner.classList.remove("hidden");
  }
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  console.log(data.data.tools);
  const tools = data.data.tools;
  let firstTools = tools.slice(0, 6);
  const showAllBtn = document.getElementById("btn-show-all");
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ``;
  if (!isShowAll) {
    showAllBtn.classList.remove("hidden");
    firstTools.forEach((item, index) => {
      let div = document.createElement("div");
      let str = "";
      item.features.forEach((feature, index) => {
        str += `<p>${index + 1}. ${feature}.</p>`;
      });
      div.classList = "card bg-base-100 shadow-xl p-[25px]";
      div.innerHTML = `   <figure>
    <img
      src=${item.image}
      alt="Shoes"
      onerror ="replaceImage(this)"
    />
  </figure>
  <div class="">
    <h2
      class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
    >
      Features
    </h2>
    <div class="text-left">
${str}
    </div>
    <hr class="w-full bg-[#11111133] mt-[24px]" />
    <div class="mt-[24px] flex items-center justify-between">
      <div>
        <h2
          class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
        >
          ${item.name}
        </h2>
        <div class="flex gap-2">
          <img src="./images/Frame(1).svg" alt="" srcset="" />
          <p>${item.published_in}</p>
        </div>
      </div>
      <div
        class="bg-[#FEF7F7] w-[50px] h-[50px] rounded rounded-[50%] flex justify-center items-center cursor-pointer active:bg-gray-100"
        onclick="detailsClickHandler('${item.id}'); my_modal_3.showModal()"
      >
        <button class="">
          <img src="./images/arrow.svg" alt="" srcset="" />
        </button>
      </div>
    </div>
  </div>`;
      // const hrElement = document.querySelector("hr");
      // div.insertBefore(hrElement, features);
      cardContainer.appendChild(div);
      isLoading = false;
      if (!isLoading) {
        const spinner = document.getElementById("loading-spinner");
        spinner.classList.add("hidden");
      }
    });
  } else {
    showAllBtn.classList.add("hidden");

    tools.forEach((item, index) => {
      let div = document.createElement("div");
      let str = "";
      item.features.forEach((feature, index) => {
        str += `<p>${index + 1}. ${feature}.</p>`;
      });
      div.classList = "card bg-base-100 shadow-xl p-[25px]";
      div.innerHTML = `   <figure>
    <img
      src=${item.image}
      alt="Shoes"
      onerror ="replaceImage(this)"
    />
  </figure>
  <div class="">
    <h2
      class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
    >
      Features
    </h2>
    <div class="text-left">
${str}
    </div>
    <hr class="w-full bg-[#11111133] mt-[24px]" />
    <div class="mt-[24px] flex items-center justify-between">
      <div>
        <h2
          class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
        >
          ${item.name}
        </h2>
        <div class="flex gap-2">
          <img src="./images/Frame(1).svg" alt="" srcset="" />
          <p>${item.published_in}</p>
        </div>
      </div>
      <div
        class="bg-[#FEF7F7] w-[50px] h-[50px] rounded rounded-[50%] flex justify-center items-center cursor-pointer active:bg-gray-100" onclick="detailsClickHandler('${item.id}'); my_modal_3.showModal()"
      >
        <button class="">
          <img src="./images/arrow.svg" alt="" srcset="" />
        </button>
      </div>
    </div>
  </div>`;
      // const hrElement = document.querySelector("hr");
      // div.insertBefore(hrElement, features);
      cardContainer.appendChild(div);
      isLoading = false;
      if (!isLoading) {
        const spinner = document.getElementById("loading-spinner");
        spinner.classList.add("hidden");
      }
    });
  }
};
loadData();
function replaceImage(image) {
  image.src = "./images/noimage.jpg";
  image.onerror = null;
}
function showButtonHandler() {
  isShowAll = true;
  loadData();
}
async function detailsClickHandler(id) {
  const data = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const details = await data.json();
  console.log(details);
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = ` <div class="bg-[#EB57570D] p-[30px] border border-[#EB5757] rounded-2xl">
  <div><h2
      class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
    >
    ${details.data.description}

    </h2></div>
    <div class="flex gap-2 justify-center items-center">
      <div class="w-[132px] h-[100px] bg-white rounded-2xl flex items-center justify-center"><p class="text-[#03A30A] text-[16px] text-center font-work-sans font-bold">${
        details.data.pricing ? details.data.pricing[0].price : "No data"
      } <br>${
    details.data.pricing ? details.data.pricing[0].plan : "No Data"
  }</p></div>
          <div class="w-[132px] h-[100px] bg-white rounded-2xl flex items-center justify-center"><p class="text-[#F28927] text-[16px] text-center font-work-sans font-bold">${
            details.data.pricing ? details.data.pricing[1].price : "No Data"
          } <br>${
    details.data.pricing ? details.data.pricing[1].plan : "No Data"
  }</p></div>
          <div class="w-[132px] h-[100px] bg-white rounded-2xl flex items-center justify-center"><p class="text-[#EB5757] text-[16px] text-center font-work-sans font-bold">${
            details.data.pricing ? details.data.pricing[2].price : "No Data"
          } <br>${
    details.data.pricing ? details.data.pricing[2].plan : "No Data"
  }</p></div>
    </div>
    <div class="flex gap-4 items-center justify-between">
      <div><h2
          class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
        >
        Features
        </h2>
        <ul>
        ${
          details.data.features[1] && details.data.features[1].feature_name
            ? `<li class="list-disc text-[#585858] font-work-sans text-[16px] font-normal">${details.data.features[1].feature_name}</li>`
            : ""
        }
        ${
          details.data.features[2] && details.data.features[2].feature_name
            ? `<li class="list-disc text-[#585858] font-work-sans text-[16px] font-normal">${details.data.features[2].feature_name}</li>`
            : ""
        }
        ${
          details.data.features[3] && details.data.features[3].feature_name
            ? `<li class="list-disc text-[#585858] font-work-sans text-[16px] font-normal">${details.data.features[3].feature_name}</li>`
            : ""
        }
      </ul>
      
      </div>
      <div><h2
          class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
        >
        Integration
        </h2>
        <ul>
        ${
          details.data.integrations && details.data.integrations[0]
            ? `<li class="list-disc text-[#585858] font-work-sans text-[16px] font-normal">${details.data.integrations[0]}</li>`
            : ""
        }
        ${
          details.data.integrations && details.data.integrations[1]
            ? `<li class="list-disc text-[#585858] font-work-sans text-[16px] font-normal">${details.data.integrations[1]}</li>`
            : ""
        }
        ${
          details.data.integrations && details.data.integrations[2]
            ? `<li class="list-disc text-[#585858] font-work-sans text-[16px] font-normal">${details.data.integrations[2]}</li>`
            : ""
        }
      </ul>
      
      </div>
    </div>
</div>
<div>
  <div class="card bg-base-100 shadow-xl p-[25px]">
<figure>
<img src=${details.data.image_link[0]} alt="" />
</figure>
<div class="">
<h2
class="text-left text-[25px] font-work-sans text-[#111] font-semibold mt-[25px]"
>
Hi, how are you doing today?
</h2>
<div id="description">
<p>I'm doing well, thank you for asking. How can I assist you today?</p>
</div>
</div>
</div>
    </div>`;
}
