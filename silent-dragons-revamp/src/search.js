function dropdownClick() {
    var ionicon = document.getElementsByTagName("ion-icon")[0];
    var dropdown = document.getElementsByClassName("dropdown-content")[0];
    // for (let i in dropdowns){
    // console.log(dropdowns[0]);
    if (dropdown.className.includes("closed")) {
      dropdown.className = dropdown.className.replace("closed", "");
      ionicon.setAttribute("name", "caret-up-outline");
    }
    else {
      dropdown.className += "closed";
      ionicon.setAttribute("name", "caret-down-outline");
    }
    // }
  }

  function del(item) {
    item = item.target;
    while (true) {
      if (item.parentElement.className == "tag") {
        var elm = item.parentElement;
        elm.remove();
        break;
      }
      else {
        item = item.parentElement
      }
    }

  }

  function addTag(item) {

    a = Array.from(document.getElementsByClassName("tag"));
    for (let b of a) {
      if (b.textContent == item.innerHTML) {
        return;
      }
    }
    const tag = document.createElement("div");
    tag.classList.add("tag");
    const delBtn = document.createElement("button");
    delBtn.addEventListener('click', del);
    tag.appendChild(delBtn);
    const delIcon = document.createElement("ion-icon");
    delIcon.setAttribute("name", "remove-circle-outline");
    delIcon.classList.add("tag-icon")
    delBtn.appendChild(delIcon);
    const tagText = document.createElement("p");
    const tagTextContent = document.createTextNode(item.innerHTML);
    tagText.appendChild(tagTextContent);
    delBtn.appendChild(tagText);
    const tags = document.getElementsByClassName("tag-container")[0];
    tags.appendChild(tag);
  }


  document.addEventListener("mouseup", (e) => {
    var dropdown = document.getElementsByClassName("dropdown-content")[0];
    // for (let dropdown of dropdowns){
    // console.log(dropdown)
    // console.log(dropdowns.item(dropdown))
    if (e.target != dropdown && !dropdown.className.includes("closed")) {
      dropdownClick(document.getElementsByTagName("ion-icon")[0])
    }
  });