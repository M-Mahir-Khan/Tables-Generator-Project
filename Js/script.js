const input = document.querySelector(".input");
        const form = document.querySelector(".form")
        const tableContainer = document.querySelector(".table-container")

        form.addEventListener("submit", generateTable);

        function generateTable(e) {
            e.preventDefault();
            let num = input.value;

            if(num === ""){
                alert("Please enter a number")
            }else{
                 let table = document.createElement("div");
            table.classList.add("table");
            tableContainer.appendChild(table);


            // Generate table
            for (let i = 1; i < 10; i++) {
                let row = document.createElement("div");
                row.classList.add("row");
                table.appendChild(row);

                let res = `${num} * ${i} = ${num * i}`;
                row.innerText = res
            }
            input.value = ""    
            }

           
        }