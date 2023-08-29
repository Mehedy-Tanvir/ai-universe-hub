const loadData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  console.log(data.data.tools);
  const tools = data.data.tools;
  let firstTools = tools.slice(0, 6);
  const cardContainer = document.getElementById("card-container");
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
  });
};
loadData();
function replaceImage(image) {
  image.src = "./images/noimage.jpg";
  image.onerror = null;
}
