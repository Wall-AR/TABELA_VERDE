// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 33.51, tag: '' },
        { desc: 'Biotina gotas 30ml - Tutti Frutti', unit: 15.96, tag: '' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 51.02, tag: '' },
        { desc: 'Reforce Hair 60caps', unit: 22.75, tag: '' },
        { desc: '3 Magnésios 30 Caps', unit: 16.05, tag: '' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 18.56, tag: '' },
        { desc: 'Carbonato de Cálcio 60 Caps', unit: 14.18, tag: 'novo' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 32.62, tag: '' },
        { desc: 'Creatina Monohidratada Xtra 300G', unit: 45.24, tag: 'novo' },
        { desc: 'Creatina Gummies - Uva verde 40gomas', unit: 64.75, tag: 'novo' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 51.03, tag: '' },
        { desc: 'Colágeno Tipo 2 30cap', unit: 17.55, tag: 'novo' },
        { desc: 'CurcuMAX 95% - Cúrcuma com Pimenta Preta 60 caps - ÂMBAR', unit: 13.10, tag: 'novo' },
        { desc: 'Curcumina com colágeno tipo 2 30ml - Gotas', unit: 18.54, tag: 'gotas' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 20.47, tag: '' },
        { desc: 'CO-MAG 60caps', unit: 30.44, tag: '' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 28.60, tag: '' },
        { desc: 'D3 + K2 30caps (2000UI / 159mcg)', unit: 10.39, tag: '' },
        { desc: 'Ferrofor + C 60caps', unit: 14.87, tag: '' },
        { desc: 'Feno Grego 60caps', unit: 18.14, tag: '' },
        { desc: 'GABA 400 60caps', unit: 15.55, tag: 'novo' },
        { desc: 'Morofor 120caps', unit: 29.92, tag: 'novo' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 16.75, tag: '' },
        { desc: 'Magnésio Dimalato 60caps', unit: 18.06, tag: '' },
        { desc: 'Magnésio Inositol DIA (Taurina) 210g - Maracujá', unit: 44.02, tag: 'novo' },
        { desc: 'Magnésio Inositol NOITE (Melatonina) 210g - Maracujá', unit: 44.02, tag: 'novo' },
        { desc: 'Magnésio L-Treonato 60caps', unit: 14.35, tag: 'novo' },
        { desc: 'Magnésio L-Treonato 60caps - ÂMBAR', unit: 13.88, tag: 'novo' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 20.53, tag: '' },
        { desc: 'Magnésio Quelato 60caps', unit: 15.60, tag: '' },
        { desc: 'Magnésio Soft 60caps', unit: 9.49, tag: 'novo' },
        { desc: 'Memo Ative 30caps', unit: 11.56, tag: '' },
        { desc: 'Melatokalm Gotas 30ml (Melatonina)', unit: 16.95, tag: '' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 19.37, tag: '' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 24.13, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60caps', unit: 28.05, tag: 'novo' },
        { desc: 'Ômega 3 60caps 1gr Softgel', unit: 22.72, tag: '' },
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 26.48, tag: '' },
        { desc: 'PEA-600 60caps', unit: 29.78, tag: 'novo' },
        { desc: 'PEA + Colágeno Tipo 2 60caps', unit: 32.16, tag: 'novo' },
        { desc: 'Picolinato de Cromo 30caps', unit: 12.20, tag: '' },
        { desc: 'PlenaMente 30caps', unit: 17.75, tag: 'novo' },
        { desc: 'Própolis Verde 60caps', unit: 17.30, tag: 'novo' },
        { desc: 'Reartron 60caps', unit: 31.69, tag: '' },
        { desc: 'Vitamina B12 30caps', unit: 13.20, tag: '' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 17.12, tag: '' },
        { desc: 'Vitamina K2 30caps', unit: 15.42, tag: '' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 11.25, tag: '' },
        { desc: 'SuperVita C 60caps', unit: 17.25, tag: 'novo' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 14.50, tag: '' },
        { desc: 'Ashwagandha 60caps', unit: 20.07, tag: 'novo' },
        { desc: 'Amora Miúra 60cap', unit: 16.72, tag: '' },
        { desc: 'Amora com Isoflavona 60cap', unit: 16.23, tag: '' },
        { desc: 'Calmim 60cap', unit: 17.14, tag: '' },
        { desc: 'Canela de Velho + Sucupira 60cap', unit: 15.45, tag: '' },
        { desc: 'Carvão Vegetal 60cap', unit: 16.10, tag: '' },
        { desc: 'Castanha da Índia 60cap', unit: 16.18, tag: '' },
        { desc: 'Cloreto de Magnésio PA 60cap', unit: 14.67, tag: '' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 15.33, tag: '' },
        { desc: 'Colágeno Hidrolisado 60cap', unit: 16.43, tag: '' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60cap', unit: 16.11, tag: '' },
        { desc: 'Espinheira Santa 60cap', unit: 16.32, tag: '' },
        { desc: 'Ginkgo Biloba 60cap', unit: 16.12, tag: '' },
        { desc: 'Ginkgo + Castanha 60cap', unit: 17.49, tag: '' },
        { desc: 'L-Treonato Magnésio 60cap', unit: 18.62, tag: '' },
        { desc: 'Maca Peruana Negra 60cap', unit: 17.80, tag: '' },
        { desc: 'Mais Ativa 60cap', unit: 15.66, tag: '' },
        { desc: 'Óleo de Copaíba 1000mg 60cap', unit: 22.26, tag: 'novo' },
        { desc: 'Óleo de Sucupira 60cap', unit: 21.36, tag: 'novo' },
        { desc: 'Ora Pro Nóbis 60cap', unit: 16.33, tag: '' },
        { desc: 'Seca Barriga com Laranja MORO 60cap', unit: 16.04, tag: '' },
        { desc: 'Tribulus Terrestris 40% 60cap', unit: 15.45, tag: '' },
        { desc: 'Tribulus + Maca Peruana 60cap', unit: 15.49, tag: '' },
        { desc: 'Uxi Amarelo + Unha de Gato 60cap', unit: 15.44, tag: '' },
        { desc: 'Valeriana 60cap', unit: 18.82, tag: '' },
      ]
    }
  ];

  const container = document.getElementById('tabela-container');

  tableData.forEach(brandData => {
    const tbl = document.createElement('table');
    tbl.className = 'table-brand';

    const colgroup = document.createElement('colgroup');
    ['60%', '20%', '20%'].forEach(w => {
      const col = document.createElement('col');
      col.style.width = w;
      colgroup.appendChild(col);
    });
    tbl.appendChild(colgroup);

    const bannerRow = document.createElement('tr');
    const bannerCell = document.createElement('th');
    bannerCell.colSpan = 3;
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'brand-banner';
    bannerDiv.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(brandData.colorVar);
    const img = document.createElement('img');
    img.src = brandData.logo;
    img.alt = brandData.brand;
    bannerDiv.appendChild(img);
    bannerDiv.append(brandData.brand);
    bannerCell.appendChild(bannerDiv);
    bannerRow.appendChild(bannerCell);

    const thead = document.createElement('thead');
    thead.appendChild(bannerRow);
    const hdr = document.createElement('tr');
    hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th><th>Caixa (12 unidades)</th>`;
    thead.appendChild(hdr);
    tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    brandData.items.forEach(item => {
      const tr = document.createElement('tr');
      const tdDesc = document.createElement('td');
      tdDesc.textContent = item.desc;
      if (item.tag) {
        const span = document.createElement('span');
        span.className = `tag ${item.tag}`;
        span.textContent = item.tag.toUpperCase();
        tdDesc.appendChild(span);
      }
      tr.appendChild(tdDesc);

      const tdUnit = document.createElement('td');
      tdUnit.textContent = `R$ ${item.unit.toFixed(2)}`;
      tr.appendChild(tdUnit);

      const tdBox = document.createElement('td');
      tdBox.textContent = `R$ ${(item.unit * 12).toFixed(2)}`;
      tr.appendChild(tdBox);

      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    container.appendChild(tbl);
  });

 // Por este:
document.getElementById('btn-export').addEventListener('click', () => {
  window.print();
});

  document.getElementById('btn-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('btn-theme');
    btn.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
  });
});















