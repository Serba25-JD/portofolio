document.addEventListener('DOMContentLoaded', function() {
    const buttonLeft = document.getElementById('next');
    buttonLeft.addEventListener('click', function() {
        const container = document.getElementById('left-container')
        const section = document.createElement('section');
        section.classList.add('mid-container');
        section.setAttribute('id', 'mid-container');
        const divA = document.createElement('div');
        divA.classList.add('mid');
        const h2A = document.createElement('h2');
        h2A.textContent = 'Angka Matriks A';
        const textareaA = document.createElement('textarea');
        textareaA.id = 'matriksA';
        textareaA.placeholder = 'Masukkan elemen Matriks A (pisahkan dengan spasi)';
        textareaA.rows = 3;
        textareaA.cols = 20;
        divA.append(h2A, textareaA);
        const divB = document.createElement('div');
        divB.classList.add('mid');
        const h2B = document.createElement('h2');
        h2B.textContent = 'Angka Matriks B';
        const textareaB = document.createElement('textarea');
        textareaB.id = 'matriksB';
        textareaB.placeholder = 'Masukkan elemen Matriks B (pisahkan dengan spasi)';
        textareaB.rows = 3;
        textareaB.cols = 20;
        divB.append(h2B, textareaB);
        const divOperator = document.createElement('div');
        divOperator.classList.add('mid');
        const h2 = document.createElement('h2');
        h2.textContent = 'Pilih Operasi:';
        const select = document.createElement('select');
        select.setAttribute('id', 'operator');
        const operator = [
            { 'op': '+', 'title': 'Penjumlahan'},
            { 'op': '-', 'title': 'Pengurangan'},
            { 'op': 'x', 'title': 'Perkalian'},
            { 'op': '/', 'title': 'Pembagian'},
        ]
        operator.forEach(list => {
            const option = document.createElement('option');
            option.value = list.op;
            option.textContent = list.title;
            select.appendChild(option);
        });
        divOperator.append(h2, select);
        const button = document.createElement('button');
        button.type = 'submit';
        button.id = 'sum';
        button.textContent = 'Hitung';
        section.append(divA, divB, divOperator, button);
        container.insertAdjacentElement('afterend', section);
        const buttonMid = document.getElementById('sum');
        if(buttonMid) {
            buttonMid.addEventListener('click', async function() {
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
                        header: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    if (!response.ok) {
                        const errorText = await response.text();
                        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
                    }
                    const result = await response.json()
                    // const hasil = result.result;
                    console.log(result);
                    // const containerMid = document.getElementById('mid-container');
                    // const p = document.createElement('p');
                    // p.textContent = hasil;
                    // containerMid.insertAdjacentElement('afterend', p);
                } catch (error) {
                    console.log(error);
                };
            })
        }
    })
})