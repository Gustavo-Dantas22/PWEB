function obterCurso(selectObject) {
    var value = selectObject.value;

    var ads = "Análise e Desenvolvimento de Sistemas";
    var ea = "Eletrônica Automotiva";
    var fm = "Fabricação Mecânica";
    var ge = "Gestão Empresarial - EAD";
    var l = "Logística";
    var ma = "Manufatura Avançada";
    var pmt = "Processos Metalúrgicos";
    var p = "Polímeros";
    var pmc = "Projetos Mecânicos";
    var sb = "Sistemas Biomédicos";

    var texto = "Curso de ";

    var box = document.getElementById('hidden');
    var titulo = document.getElementById("tituloCurso");
    var imagem = document.getElementById('imagem');

    switch (value) {
        case 'ads':
            alert(`Deseja realmente abrir a janela do curso de ${ads}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ads}`;
            imagem.src = "ads.jpg"
            break;
        case 'ea':
            alert(`Deseja realmente abrir a janela do curso de ${ea}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ea}`;
            imagem.src = "ea.jpg"
            break;
        case 'fm':
            alert(`Deseja realmente abrir a janela do curso de ${fm}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${fm}`;
            imagem.src = "fm.jpg"
            break;
        case 'ge':
            alert(`Deseja realmente abrir a janela do curso de ${ge}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ge}`;
            imagem.src = "ge.jpg"
            break;
        case 'l':
            alert(`Deseja realmente abrir a janela do curso de ${l}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${l}`;
            imagem.src = "l.jpg"
            break;
        case 'ma':
            alert(`Deseja realmente abrir a janela do curso de ${ma}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ma}`;
            imagem.src = "ma.jpg"
            break;
        case 'pmt':
            alert(`Deseja realmente abrir a janela do curso de ${pmt}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${pmt}`;
            imagem.src = "pmt.jpg"
            break;
        case 'p':
            alert(`Deseja realmente abrir a janela do curso de ${p}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${p}`;
            imagem.src = "p.jpg"
            break;
        case 'pmc':
            alert(`Deseja realmente abrir a janela do curso de ${pmc}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${pmc}`;
            imagem.src = "pmc.jpg"
            break;
        case 'sb':
            alert(`Deseja realmente abrir a janela do curso de ${sb}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${sb}`;
            imagem.src = "sb.jpg"
            break;
        case 'none':
            box.style.display = "none";
            titulo.innerHTML = "Pweb - Fatec Sorocaba";
            imagem.src = "default.jpg"
            break;
    }
}