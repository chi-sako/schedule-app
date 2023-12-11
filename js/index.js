// import "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const removeClick = (event) => {
    event.currentTarget.parentNode.parentNode.remove();
}
const addClick = () => {
    if(document.getElementById("addDate").value == ""){
        alert("日付が設定されていません");
        return;
    }
    if(document.getElementById("addText").value == ""){
        alert("内容が設定されていません");
        return;
    }
    // 行タグの作成
    var newRow = document.createElement("tr");
    // 日付列
    var dateTd = document.createElement("td");
    // 内容列
    var contentTd = document.createElement("td");
    // 削除列
    var removeTd = document.createElement("td");
    // removeボタン
    var removeButton = document.createElement("input");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("class", "btn btn-outline-dark")
    removeButton.setAttribute("value", "remove");
    removeButton.onclick = removeClick;

    // TDの中身を設定
    dateTd.innerText = document.getElementById("addDate").value;
    contentTd.innerText = document.getElementById("addText").value;
    removeTd.appendChild(removeButton);

    // TRへTDを追加
    newRow.appendChild(dateTd);
    newRow.appendChild(contentTd);
    newRow.appendChild(removeTd);

    document.getElementById("tableBody").appendChild(newRow);
}

window.onload = () => {
    document.getElementById("addButton").onclick = addClick;
}