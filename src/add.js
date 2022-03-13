const formEl = document.querySelector("form");
      const tbodyEl = document.querySelector("tbody");
      const tableEl = document.querySelector("table");
      function onAddWebsite(e) {
        e.preventDefault();
        const fullname = document.getElementById("fullname").value;
        const wpm = document.getElementById("wpm").value;
        const grade = document.getElementById("grade").value;
        const btn = document.getElementById("submit");
        tbodyEl.innerHTML += `
            <tr>
                <td>${fullname}</td>
                <td>${wpm}</td>
                <td>${grade}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
      }
      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      
      tableEl.addEventListener("click", onDeleteRow);