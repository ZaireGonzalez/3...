document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    const modules = document.querySelectorAll('.module-btn');
    const tableContainer = document.getElementById('table-container');
    const tableTitle = document.getElementById('table-title');
    const dataTable = document.getElementById('data-table');

    const data = {
        venta: [
            ["Producto", "Cantidad", "Precio"],
            ["Tomate", "10", "$20"],
            ["Papa", "5", "$10"]
        ],
        anulacion: [
            ["ID", "Motivo", "Fecha"],
            ["001", "Error de registro", "2024-11-26"],
            ["002", "Cliente canceló", "2024-11-25"]
        ],
        cierre: [
            ["Fecha", "Total Ventas", "Total Anulaciones"],
            ["2024-11-25", "$200", "$50"]
        ],
        configuracion: [
            ["Parámetro", "Valor"],
            ["Tasa IVA", "16%"],
            ["Descuento", "10%"]
        ],
        provedor: [
            ["Proveedor", "Producto", "Contacto"],
            ["Agrícola S.A.", "Tomate", "123-456-7890"]
        ],
        inventario: [
            ["Producto", "Stock", "Precio Unitario"],
            ["Tomate", "50", "$2"],
            ["Papa", "30", "$1"]
        ],
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí podrías validar las credenciales
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            loginScreen.classList.add('hidden');
            dashboardScreen.classList.remove('hidden');
        } else {
            alert('Por favor ingrese un usuario y una contraseña válidos.');
        }
    });

    modules.forEach(module => {
        module.addEventListener('click', () => {
            const tableKey = module.dataset.table;
            const tableData = data[tableKey];
            
            tableTitle.textContent = module.textContent;
            renderTable(tableData);

            tableContainer.classList.remove('hidden');
        });
    });

    function renderTable(data) {
        const [headers, ...rows] = data;
        
        const thead = dataTable.querySelector('thead');
        const tbody = dataTable.querySelector('tbody');

        thead.innerHTML = '';
        tbody.innerHTML = '';

        // Crear encabezado de tabla
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Llenar el cuerpo de la tabla
        rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }
});
