document.addEventListener('DOMContentLoaded', function() {
    showHeader();
    showMain();
    showFooter();
})

// Header
function showHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    header.setAttribute('id', 'content-header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Operasi Matriks';
    const p = document.createElement('p');
    p.textContent = 'Mata Kuliah: Aljabar Linear dan Matriks';
    header.append(h1, p);
    content.insertAdjacentElement('afterbegin', header);
}
// Header END

// Main
function showMain() {
    const content = document.getElementById('content-header');
    const main = document.createElement('main');
    main.setAttribute('id', 'content-main');
    content.insertAdjacentElement('afterend', main);
    showMainContent();
}

function showMainContent() {
    showMainContentLeft();
    showMainContentMid();
}
// Main END

// Left Content
function showMainContentLeft() {
    const content = document.getElementById('content-main');
    const section = document.createElement('section');
    section.classList.add('left-container');
    section.setAttribute('id', 'left-container');
    // Matriks A
    const divLeftA = document.createElement('div');
    divLeftA.classList.add('left');
    const h2A = document.createElement('h2');
    h2A.textContent = 'Matriks A';
    // Baris Matriks A
    const divBarisA = document.createElement('div');
    const pBarisA = document.createElement('p');
    pBarisA.textContent = 'Jumlah Baris:';
    const inputBarisA = document.createElement('input');
    inputBarisA.type = 'number';
    inputBarisA.id = 'barisA';
    inputBarisA.placeholder = 'Masukkan jumlah baris matriks';
    divBarisA.append(pBarisA, inputBarisA);
    // Kolom Matriks A
    const divKolomA = document.createElement('div');
    const pKolomA = document.createElement('p');
    pKolomA.textContent = 'Jumlah Kolom:';
    const inputKolomA = document.createElement('input');
    inputKolomA.type = 'number';
    inputKolomA.id = 'kolomA';
    inputKolomA.placeholder = 'Masukkan jumlah kolom matriks';
    divKolomA.append(pKolomA, inputKolomA);
    divLeftA.append(h2A, divBarisA, divKolomA);
    // Matriks B
    const divLeftB = document.createElement('div');
    divLeftB.classList.add('left');
    const h2B = document.createElement('h2');
    h2B.textContent = 'Matriks B';
    // Baris Matriks B
    const divBarisB = document.createElement('div');
    const pBarisB = document.createElement('p');
    pBarisB.textContent = 'Jumlah Baris:';
    const inputBarisB = document.createElement('input');
    inputBarisB.type = 'number';
    inputBarisB.id = 'barisB';
    inputBarisB.placeholder = 'Masukkan jumlah baris matriks';
    divBarisB.append(pBarisB, inputBarisB);
    // Kolom Matriks B
    const divKolomB = document.createElement('div');
    const pKolomB = document.createElement('p');
    pKolomB.textContent = 'Jumlah Kolom:';
    const inputKolomB = document.createElement('input');
    inputKolomB.type = 'number';
    inputKolomB.id = 'kolomB';
    inputKolomB.placeholder = 'Masukkan jumlah kolom matriks';
    divKolomB.append(pKolomB, inputKolomB);
    const divButton = document.createElement('div');
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('id', 'next');
    button.textContent = 'Selanjutnya';
    divButton.appendChild(button);
    divLeftB.append(h2B, divBarisB, divKolomB, divButton);
    section.append(divLeftA, divLeftB);
    content.insertAdjacentElement('beforeend', section);
}
// Left END

// Mid Content
function showMainContentMid() {
    const button = document.getElementById('next');
    button.addEventListener('click', function() {
        const barisA = document.getElementById('barisA').value;
        const kolomA = document.getElementById('kolomA').value;
        const barisB = document.getElementById('barisB').value;
        const kolomB = document.getElementById('kolomB').value;
        if (barisA && kolomA && barisB && kolomB) {
            showMainMidContentLoad();
        } else {
            showAlert('Mohon isi data terlebih dahulu.');
        }
    })
}

function showMainMidContentLoad() {
    const leftContainer = document.getElementById('left-container');
    const section = document.createElement('section');
    section.classList.add('mid-container');
    section.setAttribute('id', 'mid-container');
    const divA = document.createElement('div');
    divA.classList.add('mid');
    const h2A = document.createElement('h2');
    h2A.textContent = 'Angka Matriks A';
    const textareaA = document.createElement('textarea');
    textareaA.id = 'matriksA';
    textareaA.placeholder = 'Masukkan angka matriks A:\nContoh:\n1 2 [enter]\n1 2';
    textareaA.rows = 3;
    textareaA.cols = 20;
    divA.append(h2A, textareaA);
    const divB = document.createElement('div');
    divB.classList.add('mid');
    const h2B = document.createElement('h2');
    h2B.textContent = 'Angka Matriks B';
    const textareaB = document.createElement('textarea');
    textareaB.id = 'matriksB';
    textareaB.placeholder = 'Masukkan angka matriks B:\nContoh:\n1 2 [enter]\n1 2';
    textareaB.rows = 3;
    textareaB.cols = 20;
    divB.append(h2B, textareaB);
    const divOperator = document.createElement('div');
    divOperator.classList.add('mid');
    const p = document.createElement('p');
    p.textContent = 'Pilih Operasi:';
    const select = document.createElement('select');
    select.setAttribute('id', 'operator');
    const operator = [
        { 'op': '+', 'title': 'Penjumlahan'},
        { 'op': '-', 'title': 'Pengurangan'},
        { 'op': 'x', 'title': 'Perkalian'},
        { 'op': '/', 'title': 'Pembagian'},
    ];
    operator.forEach(list => {
        const option = document.createElement('option');
        option.value = list.op;
        option.textContent = list.title;
        select.appendChild(option);
    });
    divOperator.append(p, select);
    const button = document.createElement('button');
    button.type = 'submit';
    button.id = 'sum';
    button.textContent = 'Hitung';
    section.append(divA, divB, divOperator, button);
    leftContainer.insertAdjacentElement('afterend', section);
    showMainContentRight();
}
// Mid END

// Right Content
function showMainContentRight() {
    const buttonRight = document.getElementById('sum');
    buttonRight.addEventListener('click', function() {
        const matriksA = document.getElementById('matriksA').value.split('\n').map(row => row.trim().split(' ').map(Number));
        const matriksB = document.getElementById('matriksB').value.split('\n').map(row => row.trim().split(' ').map(Number));
        const operator = document.getElementById('operator').value;
        if(matriksA && matriksB && operator) {
            showMainContentRightLoad();
        } else {
            showAlert('Masukkan Matriks terlebih dahulu.');
        }
    })
}

async function showMainContentRightLoad() {
    const midContainer = document.getElementById('mid-container');
    const barisA = document.getElementById('barisA').value;
    const kolomA = document.getElementById('kolomA').value;
    const barisB = document.getElementById('barisB').value;
    const kolomB = document.getElementById('kolomB').value;
    const matriksA = document.getElementById('matriksA').value.split('\n').map(row => row.trim().split(' ').map(Number));
    const matriksB = document.getElementById('matriksB').value.split('\n').map(row => row.trim().split(' ').map(Number));
    const operator = document.getElementById('operator').value;
    const data = {
        baris_a: parseInt(barisA),
        kolom_a: parseInt(kolomA),
        baris_b: parseInt(barisB),
        kolom_b: parseInt(kolomB),
        matriks_a: matriksA,
        matriks_b: matriksB,
        operator: operator
    };
    try {
        const response = await fetch('https://sukasehat.com/API/public/matriks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
        const result = await response.json();
        const hasil = result.result.hasil;
        let rightContainer = document.getElementById('right-container');
        if (!rightContainer) {
            rightContainer = document.createElement('section');
            rightContainer.classList.add('right-container');
            rightContainer.setAttribute('id', 'right-container');
            const pText = document.createElement('p');
            pText.textContent = `Hasil dari Matriks A (${barisA}x${kolomA}) ${operator} Matriks B (${barisB}x${kolomB}):`;
            rightContainer.appendChild(pText);
        } else {
            rightContainer.innerHTML = '';
        }
        // Matriks A
        const pTextMatriksA = document.createElement('p');
        pTextMatriksA.textContent = 'Matriks A:';
        const tableA = createMatrixTable(matriksA);
        // Matriks B
        const pTextMatriksB = document.createElement('p');
        pTextMatriksB.textContent = 'Matriks B:';
        const tableB = createMatrixTable(matriksB);
        // Result
        const pResult = document.createElement('p');
        pResult.textContent = 'Hasil Matriks:';
        const tableResult = createMatrixTable(hasil);
        // Button
        const button = document.createElement('button');
        button.type = 'reset';
        button.id = 'reset-sum';
        button.textContent = 'Reset';
        // Append
        rightContainer.append(pTextMatriksA, tableA, pTextMatriksB, tableB, pResult, tableResult, button);
        midContainer.insertAdjacentElement('afterend', rightContainer);
    } catch(error) {
        showAlert('Silahkan masukkan angka yang benar.');
    }
    showResetContent();
}

function createMatrixTable(matrix) {
    const table = document.createElement('table');
    table.classList.add('matrix-table');
    matrix.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table;
}

function showResetContent() {
    const button = document.getElementById('reset-sum');
    if(button) {
        button.addEventListener('click', function() {
            const midContainer = document.getElementById('mid-container');
            const rightContainer = document.getElementById('right-container');
            if(midContainer) midContainer.remove();
            if(rightContainer) rightContainer.remove();
            const barisA = document.getElementById('barisA');
            const kolomA = document.getElementById('kolomA');
            const barisB = document.getElementById('barisB');
            const kolomB = document.getElementById('kolomB');
            if(barisA) barisA.textContent = '';
            if(kolomA) kolomA.textContent = '';
            if(barisB) barisB.textContent = '';
            if(kolomB) kolomB.textContent = '';
        })
    }
}
// Right END

// Footer
function showFooter() {
    const content = document.getElementById('content-main');
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Copyright @2025 Jeremi';
    footer.appendChild(p);
    content.insertAdjacentElement('afterend', footer);
}
// Footer END

// Alert
function showAlert(message) {
    const checkAlert = document.getElementById('alert-container');
    if(!checkAlert) {
        const mainContainer = document.getElementById('content-main');
        const divContainer = document.createElement('div');
        divContainer.classList.add('alert-container');
        divContainer.setAttribute('id', 'alert-container');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('alert-content');
        const p = document.createElement('p');
        p.textContent = message;
        const button = document.createElement('button');
        button.type = 'reset';
        button.id = 'close-alert';
        button.textContent = 'Close';
        divContent.append(p, button);
        divContainer.appendChild(divContent);
        mainContainer.insertAdjacentElement('beforeend', divContainer);
        showAlertCloseButton();
    } else {
        checkAlert.style.display = 'flex';
    }
}

function showAlertCloseButton() {
    const button = document.getElementById('close-alert');
    button.addEventListener('click', function () {
        const alert = document.getElementById('alert-container');
        alert.style.display = 'none';
    })
}